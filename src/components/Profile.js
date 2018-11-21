import React, { Component } from 'react';
import { Grid, Row, Button, Col, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import './News.css';
import { fire } from '../fire';
import Chart from 'react-google-charts';
import Chart1 from './chart1';




export default class Profile extends Component {




  constructor() {
      super();

        this.state = {
          user: '',
          bod: '',
          tss: '',


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
      const samplesRef = fire.database().ref(`clientInfo/${user.uid}`);
      samplesRef.set({
        bod: this.state.bod,
        tss: this.state.tss,
        user: this.state.user
      })
      this.setState({
        bod: this.state.bod,
        tss: this.state.tss,
        user: this.state.user
      })


    });
  }


    //this function is constantly running after the initial render.  Snapshot is used to look into the database.
    //[] indicates an array value
    //.map(Number) changes an array of strings to an array of integers
    //snapshot.foreach(ss => {...}) **this looks in each "Sample" for the child of "user"**
    //child of user can be child of BOD or child of tss or whatever.  It finds the value that is a child to that label.

    componentDidMount() {
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
        const samplesRef = fire.database().ref(`clientInfo/${user.uid}`);
        samplesRef.on('value', (snapshot) => {
          this.setState({

            bod: snapshot.child('bod').val(),
            tss: snapshot.child('tss').val(),
            user: snapshot.child('user').val()
          });
          console.log(this.state.bod);



      });

    });


  }

  //totally honest...not sure how this knows exactly the right one to remove.
  //something to do with the SampleID, but I think .remove() is a fire standard function.


    render() {
      return (
        <Grid>

          <h2>{this.state.bod}</h2>
          <h3>{this.state.tss}</h3>
          <p>{this.state.user}</p>



          <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={12}>
      <Nav bsStyle="tabs">
        <NavItem eventKey="first">Profile Information</NavItem>
        <NavItem eventKey="second">Site Information</NavItem>
        <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">
          <MenuItem eventKey="3.1">Action</MenuItem>
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


          <Grid>
            <Row>
              <Col xs={6} md={6}>


          <section className='add-item'>
            <form onSubmit={this.handleSubmit}>
                  <input type="text" name="bod" placeholder="What's the name of your City?" onChange={this.handleChange} value={this.state.bod} />
                  <input type="text" name="tss" placeholder="What's your Address?" onChange={this.handleChange} value={this.state.tss} />
                  <input type="text" name="user" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.user} />
                  <button>Add sample</button>
                </form>
          </section>
          </Col>
          </Row>
          </Grid>

        </Tab.Pane>
        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
        <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>
        <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>
        <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>
        <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>




        </Grid>
      );
    }
  }
