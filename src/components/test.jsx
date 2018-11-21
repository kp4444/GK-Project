//imported all necessary components
import React, { Component } from 'react';
import Chart from 'react-google-charts';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import rotateMatrix from 'rotate-matrix';
import rotate from 'matrix-rotate';
import math from 'mathjs';
import mdn from 'mdn-data';


//this starts the react app with a component titled App
class App extends Component {
  //constructor sets your initial states with this.this.state.  This.state sets the initial state of variables, strings, arrays.
  //Super needs to follow constructor
  constructor() {
    super();
    this.state = {
      currentSample: '',
      bod: '',
      tss: '',
      samples: [],
      tssData: [],
      userData: [],
      bodData: [],
      chartLabels: ["Date", 'concentration', 'concentration'],
      chartData: [],






    }
    //these are triggered events.  handleChange is for text box changes
    //handlesubmit is for the form being submitted.
    //every event trigger needs to be bound like is below with .bind
    //we might now have to do this anymore with the newest version of react, but i have it to be safe.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //event triggered when text boxes of forms, values are changed
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //event triggered when form is submitted
  handleSubmit(e) {
    e.preventDefault();
    //firebase.database().ref('samples') refers to the main title of the firebase database.
    const samplesRef = firebase.database().ref('samples');
    const sample = {
      BOD: this.state.bod,
      tss: this.state.tss,
      user: this.state.currentSample
    }

    samplesRef.push(sample);
    //this.setState is used to clear the text boxes after the form has been submitted.
    this.setState({
      currentSample: '',
      bod: '',
      tss: ''
    });
  }

  //this function is constantly running after the initial render.  Snapshot is used to look into the database.
  //[] indicates an array value
  //.map(Number) changes an array of strings to an array of integers
  //snapshot.foreach(ss => {...}) **this looks in each "Sample" for the child of "user"**
  //child of user can be child of BOD or child of tss or whatever.  It finds the value that is a child to that label.

  componentDidMount() {

    //sets access to the firebase database
      const samplesRef = firebase.database().ref('samples');
      samplesRef.on('value', (snapshot) => {
      let tssDatas = [];
      let userData = [];
      let bodData = [];



//Pulls an array for all of the tss data values
        snapshot.forEach(ss => {
        tssDatas.push(ss.child('tss').val());
        this.setState({
          tssData: Number(tssDatas),
        })
      });

//pulls an array for all the sample dates labeled as users
      snapshot.forEach(ss => {
        userData.push(ss.child('user').val());
        this.setState({
          userData: userData,
        })
      });

//pulls an array with all of the values for BOD
      snapshot.forEach(ss => {
        bodData.push(ss.child('BOD').val());
        this.setState({
          bodData: bodData,
        })
      });

      console.log(userData);
      console.log(tssDatas);
      console.log(bodData);

      //chart labels first
      let chartData = [['Date', 'BOD Concentration', 'TSS Concentration']];

      //loop to scan firebase data
      for (let i=0; i < userData.length; i++) {
        //push send this data to the back of the chartData variable above.
        chartData.push([userData[i], parseInt(tssDatas[i]), parseInt(bodData[i])]);
        this.setState({
          chartData: chartData,
        })
      }

      //this is the data that is actaully graphed in the chart component in the render section.
      console.log(chartData);



      let samples = snapshot.val();
      let newState = [];
      let testers = [];
      for (let sample in samples) {
        newState.push({
          id: sample,
          BOD: samples[sample].BOD,
          tss: samples[sample].tss,
          user: samples[sample].user
        });
      }
      this.setState({
        samples: newState,
      });
    });

  }

//totally honest...not sure how this knows exactly the right one to remove.
//something to do with the SampleID, but I think .remove() is a firebase standard function.
  removesample(sampleId) {
    const sampleRef = firebase.database().ref(`/samples/${sampleId}`);
    sampleRef.remove();
  }

//here is your render method. Usually the last method.  It returns all of the front end.
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Wastewater Samples </h1>
              <text />

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            //here is the form
            //3 text field inputs with standard type, name, plaaceholder, onChange
            //one button that auto trigers the onSubmit cause it is in the form class at the top.
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="bod" placeholder="What's your Sample BOD reading?" onChange={this.handleChange} value={this.state.bod} />
                  <input type="text" name="tss" placeholder="What's your Sample TSS reading?" onChange={this.handleChange} value={this.state.tss} />
                  <input type="text" name="currentSample" placeholder="What sample number is this?" onChange={this.handleChange} value={this.state.currentSample} />
                  <button>Add sample</button>
                </form>
          </section>
          <section>
            //Chart is a component from the react-google-charts library which was imported at the top.
            //Super easy way to make charts.  Bar is vertical, BarChart is horizontal.
            //see react-google-charts.com for much more info about UI options.

            //this.state.chartData has all of the chart dat ain an array of arrays.  It is made in the component did mount function.
                <Chart

                  width={'500px'}
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}

                  data={ this.state.chartData  }
                  options={{
                    // Material design options
                    chart: {
                      title: 'WWTP Sample Data',
                      subtitle: 'BOD, TSS',
                    },
                  }}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />
            })}</section>
          //here are the samples displayed/mapped.
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.samples.map((sample) => {

                    return (

                      <li key={sample.id}>
                        <h3>{sample.user}</h3>
                        <p>
                          <p>BOD in Sample: {sample.BOD}mg/L</p>
                          <p>TSS in Sample: {sample.tss} mg/L</p>
                          <button onClick={() => this.removesample(sample.id)}>Remove sample</button>
                        </p>

                      </li>
                    )
                  })}
                </ul>
              </div>

          </section>
        </div>
      </div>
    );
  }
}
export default App;
