import React, { Component } from 'react';
import { Grid, Row, Button, Col, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import './News.css';
import { fire } from '../fire';
import Chart from 'react-google-charts';
import Chart1 from './chart1';




export default class Data extends Component {


  constructor() {
      super();
      this.state = {
        currentSample: '',
        bod: '',
        tss: '',
        nitrate: '',
        nitrite: '',
        ammonia: '',
        user: '',
        samples: [],
        tssData: [],
        nitrateData: [],
        nitriteData: [],
        ammoniaData: [],
        userData: [],
        bodData: [],
        chartData: [],
        tssGraph: [],
        bodGraph: [],
        nitrateGraph: [],
        nitriteGraph: [],
        ammoniaGraph: []

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
      //fire.database().ref('samples') refers to the main title of the fire database.
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const samplesRef = fire.database().ref(`items/${user.uid}`);
      const sample = {
        BOD: this.state.bod,
        tss: this.state.tss,
        user: this.state.currentSample,
        nitrate: this.state.nitrate,
        nitrite: this.state.nitrite,
        ammonia: this.state.ammonia
      }

      samplesRef.push(sample);
      //this.setState is used to clear the text boxes after the form has been submitted.
      this.setState({
        currentSample: '',
        bod: '',
        tss: '',
        nitrate: '',
        nitrite: '',
        ammonia: ''
      });
    });
  }


    //this function is constantly running after the initial render.  Snapshot is used to look into the database.
    //[] indicates an array value
    //.map(Number) changes an array of strings to an array of integers
    //snapshot.foreach(ss => {...}) **this looks in each "Sample" for the child of "user"**
    //child of user can be child of BOD or child of tss or whatever.  It finds the value that is a child to that label.

    componentDidMount() {
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
        const samplesRef = fire.database().ref(`items/${user.uid}`);
        samplesRef.on('value', (snapshot) => {
          let tssDatas = [];
          let userData = [];
          let bodData = [];
          let nitrateData = [];
          let nitriteData = [];
          let ammoniaData = [];




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
        snapshot.forEach(ss => {
          nitrateData.push(ss.child('nitrate').val());
          this.setState({
            nitrateData: nitrateData,
          })
        });
        snapshot.forEach(ss => {
          nitriteData.push(ss.child('nitrite').val());
          this.setState({
            nitriteData: nitriteData,
          })
        });
        snapshot.forEach(ss => {
          ammoniaData.push(ss.child('ammonia').val());
          this.setState({
            ammoniaData: ammoniaData,
          })
        });

        console.log(userData);
        console.log(tssDatas);
        console.log(bodData);
        console.log(nitrateData);
        console.log(nitriteData);
        console.log(ammoniaData);



        //chart labels first
        let chartData = [['Date', 'BOD Concentration', 'TSS Concentration', 'Nitrate Concentration', 'Nitrite Concentration', 'Ammonia Concentration']];
        let tssGraph = [['Date', 'TSS Concentration']];
        let bodGraph = [['Date', 'BOD Concentration']];
        let nitrateGraph = [['Date', 'Nitrate Concentration']];
        let nitriteGraph = [['Date', 'Nitrite Concentration']];
        let ammoniaGraph = [['Date', 'Ammonia Concentration']];


        //loop to scan firebase data
        for (let i=0; i < userData.length; i++) {
          //push send this data to the back of the chartData variable above.
          chartData.push([new Date(Date.parse(userData[i])), parseInt(tssDatas[i]), parseInt(bodData[i]), parseInt(nitrateData[i]), parseInt(nitriteData[i]), parseInt(ammoniaData[i])]);
          tssGraph.push([new Date(Date.parse(userData[i])), parseInt(tssDatas[i])]);
          bodGraph.push([new Date(Date.parse(userData[i])), parseInt(bodData[i])]);
          nitrateGraph.push([new Date(Date.parse(userData[i])), parseInt(nitrateData[i])]);
          nitriteGraph.push([new Date(Date.parse(userData[i])), parseInt(nitriteData[i])]);
          ammoniaGraph.push([new Date(Date.parse(userData[i])), parseInt(ammoniaData[i])]);
          this.setState({
            chartData: chartData,
            tssGraph: tssGraph,
            bodGraph: bodGraph,
            nitrateGraph: nitrateGraph,
            nitriteGraph: nitriteGraph,
            ammoniaGraph: ammoniaGraph,

          })

          console.log(chartData);

        }



        console.log(tssDatas);
        console.log(userData);

        let samples = snapshot.val();
        let newState = [];
        for (let sample in samples) {
          newState.push({
            id: sample,
            BOD: samples[sample].BOD,
            tss: samples[sample].tss,
            user: samples[sample].user,
            nitrate: samples[sample].nitrate,
            nitrite: samples[sample].nitrite,
            ammonia: samples[sample].ammonia
          });
        }
        this.setState({
          samples: newState,
        });


      });

    });


  }

  //totally honest...not sure how this knows exactly the right one to remove.
  //something to do with the SampleID, but I think .remove() is a fire standard function.
  removesample(itemId) {
    this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
    const sampleRef = fire.database().ref(`/items/${user.uid}/${itemId}`);
    sampleRef.remove();
  });
  }

    render() {
      return (
        <Grid>
          <header>
              <div className="wrapper">
                <h1>Wastewater Samples </h1>
                <text />

              </div>

              <Grid>

                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                  <Row className="clearfix">
                    <Col sm={12}>
                      <Nav bsStyle="tabs">
                        <NavItem eventKey="first">Dailys</NavItem>
                        <NavItem eventKey="second">Graphs</NavItem>
                        <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
                          <MenuItem eventKey="3.1">Remove a Sample</MenuItem>
                          <MenuItem eventKey="3.2">Another action</MenuItem>
                          <MenuItem eventKey="3.3">Something else here</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey="3.4">Separated link</MenuItem>
                        </NavDropdown>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="first">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">


                          <Row className="clearfix">
                            <Col sm={2}>
                              <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">Daily Samples</NavItem>
                                <NavItem eventKey="second">Data</NavItem>
                              </Nav>
                            </Col>
                            <Col sm={2}>
                              <Tab.Content animation>
                                <Tab.Pane eventKey="first">

                                <Grid>
                                  <Row>
                                    <Col xs={6} md={6}>
                                <section className='add-item'>
                                  <form onSubmit={this.handleSubmit}>
                                        <h2>Daily Sample Results</h2>
                                        <input type="text" name="bod" placeholder="What's your Sample BOD reading?" onChange={this.handleChange} value={this.state.bod} />
                                        <input type="text" name="tss" placeholder="What's your Sample TSS reading?" onChange={this.handleChange} value={this.state.tss} />
                                        <input type="text" name="nitrate" placeholder="What's your Sample Nitrate reading?" onChange={this.handleChange} value={this.state.nitrate} />
                                        <input type="text" name="nitrite" placeholder="What's your Sample Nitrite reading?" onChange={this.handleChange} value={this.state.nitrite} />
                                        <input type="text" name="ammonia" placeholder="What's your Sample Ammonia reading?" onChange={this.handleChange} value={this.state.ammonia} />
                                        <h3>Sample Date</h3>
                                      <input type="date" name="currentSample" placeholder="What is the date of this Sample?" onChange={this.handleChange} value={this.state.currentSample} />
                                        <button>Add sample</button>
                                      </form>
                                </section>
                                </Col>
                                </Row>
                                </Grid>



                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                <Grid>
                                  <Row>
                                    <Col xs={9} md={9}>
                                <Chart
                                  width={'100%'}
                                  height={'100%'}
                                    chartType="Table"
                                    loader={<div>Loading Chart</div>}
                                  data={ this.state.chartData  }
                                    options={{
                                      // Use the same chart area width as the control for axis alignment.
                                      chartArea: { height: '100%', width: '100%' },
                                      hAxis: { slantedText: false },
                                      vAxis: { viewWindow: { min: 0, max: 2000 } },
                                      legend: { position: 'none' },
                                      colors: ['#b0120a', '#1B1E6C', '#7C38B0', '#FDEC7C', '#902A53'],
                                        hAxis: {
                                          title: 'Date',
                                        },
                                        vAxis: {
                                          title: 'Concentration',
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '3' }}
                                    chartPackages={['corechart', 'controls']}

                                  />
                                  </Col>
                                  </Row>
                                  </Grid>

                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>







                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className="clearfix">
                              <Col sm={2}>
                                <Nav bsStyle="pills" stacked>
                                  <NavItem eventKey="first">Dailys Dashboard</NavItem>
                                  <NavItem eventKey="second">Tab 2</NavItem>
                                </Nav>
                              </Col>
                              <Col sm={2}>
                                <Tab.Content animation>
                                  <Tab.Pane eventKey="first">

                                  <Grid>
                                    <Row>
                                      <Col xs={8} md={8}>
                                      <h2>Here is your Graph</h2>
                                  <Chart
                                    width={'100%'}
                                    height={'100%'}
                                      chartType="Bar"
                                      loader={<div>Loading Chart</div>}
                                    data={ this.state.chartData  }
                                      options={{
                                        // Use the same chart area width as the control for axis alignment.
                                        chartArea: { height: '100%', width: '100%' },
                                        hAxis: { slantedText: false },
                                        vAxis: { viewWindow: { min: 0, max: 2000 } },
                                        legend: { position: 'none' },
                                        colors: ['#b0120a', '#1B1E6C', '#7C38B0', '#FDEC7C', '#902A53'],
                                          hAxis: {
                                            title: 'Date',
                                          },
                                          vAxis: {
                                            title: 'Concentration',
                                          },
                                      }}
                                      rootProps={{ 'data-testid': '3' }}
                                      chartPackages={['corechart', 'controls']}
                                      controls={[
                                        {
                                          controlType: 'ChartRangeFilter',
                                          options: {
                                            title: 'WWTP Sample Data',
                                            subtitle: 'BOD, TSS',
                                            filterColumnIndex: 0,

                                            ui: {
                                              chartType: 'ScatterChart',
                                              chartOptions: {
                                                chartArea: { width: '100%', height: '30%' },
                                                hAxis: { baselineColor: 'none' },
                                              },
                                            },
                                          },
                                          controlPosition: 'bottom',
                                          controlWrapperParams: {
                                            state: {
                                              },
                                          },
                                        },
                                      ]}
                                    />
                                    </Col>







                                    </Row>
                                    <Row>
                                      <Col xs={4} md={4}>
                                      <h2>Here is your Graph</h2>
                                  <Chart
                                    width={'100%'}
                                    height={'100%'}
                                      chartType="Bar"
                                      loader={<div>Loading Chart</div>}
                                    data={ this.state.tssGraph  }
                                      options={{
                                        // Use the same chart area width as the control for axis alignment.
                                        chartArea: { height: '100%', width: '100%' },
                                        hAxis: { slantedText: false },
                                        vAxis: { viewWindow: { min: 0, max: 2000 } },
                                        legend: { position: 'none' },
                                        colors: ['#b0120a', '#ffab91'],
                                          hAxis: {
                                            title: 'Date',
                                          },
                                          vAxis: {
                                            title: 'Concentration',
                                          },
                                      }}
                                      rootProps={{ 'data-testid': '3' }}
                                      chartPackages={['corechart', 'controls']}
                                      controls={[
                                        {
                                          controlType: 'ChartRangeFilter',
                                          options: {
                                            title: 'WWTP Sample Data',
                                            subtitle: 'BOD, TSS',
                                            filterColumnIndex: 0,

                                            ui: {
                                              chartType: 'ScatterChart',
                                              chartOptions: {
                                                chartArea: { width: '70%', height: '30%' },
                                                hAxis: { baselineColor: 'none' },
                                              },
                                            },
                                          },
                                          controlPosition: 'bottom',
                                          controlWrapperParams: {
                                            state: {
                                              },
                                          },
                                        },
                                      ]}
                                    />
                                    </Col>

                                    <Col xs={5} md={5}>
                                    <h2>Here is your Graph</h2>
                                <Chart
                                  width={'100%'}
                                  height={'100%'}
                                    chartType="Bar"
                                    loader={<div>Loading Chart</div>}
                                  data={ this.state.bodGraph  }
                                    options={{
                                      // Use the same chart area width as the control for axis alignment.
                                      chartArea: { height: '100%', width: '100%' },
                                      hAxis: { slantedText: false },
                                      vAxis: { viewWindow: { min: 0, max: 2000 } },
                                      legend: { position: 'none' },
                                      colors: ['#1E5389', '#327A3C'],
                                        hAxis: {
                                          title: 'Date',
                                        },
                                        vAxis: {
                                          title: 'Concentration',
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '3' }}
                                    chartPackages={['corechart', 'controls']}
                                    controls={[
                                      {
                                        controlType: 'ChartRangeFilter',
                                        options: {
                                          title: 'WWTP Sample Data',
                                          subtitle: 'BOD, TSS',
                                          filterColumnIndex: 0,

                                          ui: {
                                            chartType: 'ScatterChart',
                                            chartOptions: {
                                              chartArea: { width: '80%', height: '30%' },
                                              hAxis: { baselineColor: 'none' },
                                            },
                                          },
                                        },
                                        controlPosition: 'bottom',
                                        controlWrapperParams: {
                                          state: {
                                            },
                                        },
                                      },
                                    ]}
                                  />
                                  </Col>





                                    </Row>
                                    </Grid>




                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                                </Tab.Content>
                              </Col>
                            </Row>
                          </Tab.Container>







                        </Tab.Pane>
                        <Tab.Pane eventKey="3.1">

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



                        </Tab.Pane>
                        <Tab.Pane eventKey="3.2">

                          <Grid>
                            <Row>



                                {this.state.bodData[1]}



                            </Row>

                          </Grid>


                        </Tab.Pane>
                        <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
                        <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>









              </Grid>
          </header>

        </Grid>
      );
    }
  }
