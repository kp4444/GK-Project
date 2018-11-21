import React, { Component } from 'react';
import { Grid, Row, Button, Col, Tabs, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import './News.css';
import { fire } from '../fire';



export default class Permits extends Component {




  constructor() {
      super();

        this.state = {
          facilityName: '',




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
      const samplesRef = fire.database().ref(`form2A/${user.uid}`);
      samplesRef.set({

        facilityName: this.state.facilityName
      })
      this.setState({

        facilityName: this.state.facilityName
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
        const samplesRef = fire.database().ref(`form2A/${user.uid}`);
        samplesRef.on('value', (snapshot) => {
          this.setState({


            facilityName: snapshot.child('facilityName').val(),
          });
          console.log(this.state.bod);



      });

    });


  }


  render() {
    return (
      <Grid>

    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Your Permits">


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Form 2A</NavItem>
                <NavItem eventKey="second">Tab 2</NavItem>
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
              <h2>Form 2A Permit</h2>
              <p>Facility Name</p>
                  <input type="text" name="Facility Name" placeholder="Facility Name" onChange={this.handleChange} value={this.state.facilityName} />

                    <button>Print Permit</button>
                </form>
          </section>
          </Col>
          </Row>
          </Grid>


                </Tab.Pane>
                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </Tab>
      <Tab eventKey={2} title="Permits FAQ">
        Tab 2 content
      </Tab>
      <Tab eventKey={3} title="Documnets">
        Tab 3 content
      </Tab>
    </Tabs>



      </Grid>
    )
  }
}
