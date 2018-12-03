import React, { Component } from 'react'
import { Grid, Table, DropdownButton, Panel, Row, Button, Col, Tabs, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';
import { fire } from '../fire';

const styles = {
  well: {
  boxShadow: "2px 4px 2px #9E9E9E",
  backgroundColor: "#E39139"
},
  topPad: {
    paddingTop: "15px"
  },
  buttonColor: {

  }

}




export default class maintenance extends Component {

  constructor() {
      super();

        this.state = {
          influentEquipment: '',
          febEquipment: '',
          area: '',
          influentEquipmentID:'',
          influentEquipmentIDPump1Des: '',
          influentEquipmentIDPump2Des: '',
          influentEquipmentIDPump3Des: '',
          influentEquipmentIDPump4Des: ''



        }




      //these are triggered events.  handleChange is for text box changes
      //handlesubmit is for the form being submitted.
      //every event trigger needs to be bound like is below with .bind
      //we might now have to do this anymore with the newest version of react, but i have it to be safe.

    }

    influentDropdown = () => {
      this.setState({
        febEquipment: '',
        area: <h2>Influent Lift Station</h2>,
        influentEquipment: <DropdownButton
            bsStyle={'Default'}
            title="Influent Equipment"
            bsSize="medium"
            style={styles.well}
          >
            <MenuItem onSelect={this.influentEquipmentIDPump1} eventKey="1">Pump #1</MenuItem>
            <MenuItem onSelect={this.influentEquipmentIDPump2} eventKey="2">Pump #2</MenuItem>
            <MenuItem onSelect={this.influentEquipmentIDPump3} eventKey="3">Pump #3</MenuItem>
            <MenuItem onSelect={this.influentEquipmentIDPump4} eventKey="4">Pump #4</MenuItem>
          </DropdownButton>,
      })
  }

  influentEquipmentIDPump1 = () => {
    this.setState({
      influentEquipmentID: 'Pump1',
      influentEquipmentIDPump1Des: <form >
            <h2>Pump #1</h2>
            <input type="textArea" rows="5" cols="33" name="pump1" title="Pump #1" placeholder="Pump 1 Issue"/>
            <h3>Maintenance Date</h3>
          <input type="date" name="currentSample" placeholder="What is the date of this Maintenance?" />
            <button>Add Maintenance Log</button>
          </form>
    })
  }
  influentEquipmentIDPump2 = () => {
    this.setState({
      influentEquipmentID: 'Pump2',
      influentEquipmentIDPump1Des: <form>
            <h2>Pump #2</h2>
            <input type="text" name="pump2" title="Pump #2" placeholder="Pump 2 Issue"/>


            <h3>Maintenance Date</h3>
          <input type="date" name="currentSample" placeholder="What is the date of this Maintenance?" />
            <button>Add Maintenance Log</button>
          </form>
    })
  }
  influentEquipmentIDPump3 = () => {
    this.setState({
      influentEquipmentID: 'Pump3',
      influentEquipmentIDPump1Des: <form>
            <h2>Pump #3</h2>
            <input type="text" name="pump3" title="Pump #3" placeholder="Pump 3 Issue"/>


            <h3>Maintenance Date</h3>
          <input type="date" name="currentSample" placeholder="What is the date of this Maintenance?" />
            <button>Add Maintenance Log</button>
          </form>
    })
  }
  influentEquipmentIDPump4 = () => {
    this.setState({
      influentEquipmentID: 'Pump4',
      influentEquipmentIDPump1Des: <form>
            <h2>Pump #3</h2>
            <input type="text" name="pump4" title="Pump #4" placeholder="Pump 4 Issue"/>


            <h3>Maintenance Date</h3>
          <input type="date" name="currentSample" placeholder="What is the date of this Maintenance?" />
            <button>Add Maintenance Log</button>
          </form>
    })
  }


  febDropdown = () => {
    this.setState({
      influentEquipment: '',
      influentEquipmentID:'',
      influentEquipmentIDPump1Des: '',
      influentEquipmentIDPump2Des: '',
      influentEquipmentIDPump3Des: '',
      influentEquipmentIDPump4Des: '',
      area: <h2>FEB Pump Station</h2>,
      febEquipment: <DropdownButton
          bsStyle={'Default'}
          title="Pump #"

        >
          <MenuItem onClick={this.newDropdown} eventKey="1">Pump #1</MenuItem>
          <MenuItem eventKey="2">Pump #2</MenuItem>

        </DropdownButton>
    })
}




  render() {



    return (



<Grid>

      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title=<div><h3>WWTP</h3></div>>
          <div style={styles.topPad}></div>

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

            <Tab eventKey={1} title=<div><p>Maintenance Logs</p></div>>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                  <Col sm={3}>
                    <Nav bsStyle="pills" stacked>
                      <NavItem eventKey="first">Create Maintenance Log</NavItem>
                      <NavItem eventKey="second">Review Logs</NavItem>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content animation>
                      <Tab.Pane eventKey="first">

                        <Grid>
                          <Row>
                            <Col xs={3} md={3}>
                              <div style={styles.topPad}></div>
                              <DropdownButton
                                  bsStyle={'Default'}
                                  title="Area of WWTP"
                                  bsSize="medium"
                                  style={styles.well}
                                  background-color="#217382"

                                >
                                  <MenuItem onSelect={this.influentDropdown} eventKey="1">Influent Lift Station</MenuItem>
                                  <MenuItem eventKey="2">Headworks</MenuItem>
                                  <MenuItem onSelect={this.febDropdown} eventKey="3">FEB</MenuItem>
                                  <MenuItem eventKey="4">Oxidation Ditches</MenuItem>
                                  <MenuItem eventKey="5">Blower Building</MenuItem>
                                  <MenuItem eventKey="6">Clarifiers</MenuItem>
                                  <MenuItem eventKey="7">RAS WAS</MenuItem>
                                  <MenuItem eventKey="8">Filter/UV</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem eventKey="4">Separated link</MenuItem>
                                </DropdownButton>

                                <div style={styles.topPad}></div>
                                <p>{this.state.influentEquipment}</p>

                              </Col>

                              <Col xs={6} md={4}>
                                <p>{this.state.area}</p>

                                <p>{this.state.febEquipment}</p>
                                <p>{this.state.influentEquipmentID}</p>
                                <p>{this.state.influentEquipmentIDPump1Des}</p>



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
            <Tab eventKey={2} title=<div><p>O&M Report</p></div>>

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row className="clearfix">
                    <Col sm={3}>
                      <Nav bsStyle="pills" stacked>
                        <NavItem eventKey="first">Facility Description</NavItem>
                        <NavItem eventKey="second">Equipment Manuals</NavItem>
                        <NavItem eventKey="third">Equipment Inventory</NavItem>
                        <NavItem eventKey="fourth">Spare Parts Inventory</NavItem>
                        <NavItem eventKey="fifth">Maintenance Plan</NavItem>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="first">
                          <h3>Treatment Plant</h3>
                          <p>The wastewater collected within the District’s Trunk Sewer Line begins the treatment process in the
                              influent pumping plant. There it is passed through a Parshall metering flume to measure the quantity of
                              influent wastewater to the plant. Currently, average annual daily flow at the plant is on the order of 2.88
                              million gallons per day (mgd), with peak day dry weather flow of approximately 3.37 mgd and peak hour
                              wet weather flows of 8.03 mgd.</p>


                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                          <Table striped bordered condensed hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Equipment</th>
                              <th>Manufacturer</th>
                              <th>Manual</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Headworks</td>
                              <td>Huber</td>
                              <td>Link to Manual</td>

                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Aeration Diffusers</td>
                              <td>Aquarius</td>
                              <td>Link to Manual</td>

                            </tr>
                            <tr>
                              <td>3</td>
                              <td>FEB Pumps</td>
                              <td>Flygt</td>
                              <td>Link to Manual</td>

                            </tr>
                          </tbody>
                        </Table>

                        </Tab.Pane>


                        <Tab.Pane eventKey="third">

                          <Table striped bordered condensed hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Equipment</th>
                              <th>Manufacturer</th>
                              <th>Manual</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Headworks</td>
                              <td>Huber</td>
                              <td>Link to Manual</td>

                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Aeration Diffusers</td>
                              <td>Aquarius</td>
                              <td>Link to Manual</td>

                            </tr>
                            <tr>
                              <td>3</td>
                              <td>FEB Pumps</td>
                              <td>Flygt</td>
                              <td>Link to Manual</td>

                            </tr>
                          </tbody>
                        </Table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">

                        <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Equipment</th>
                            <th>Manufacturer</th>
                            <th>Manual</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Headworks</td>
                            <td>Huber</td>
                            <td>Link to Manual</td>

                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Aeration Diffusers</td>
                            <td>Aquarius</td>
                            <td>Link to Manual</td>

                          </tr>
                          <tr>
                            <td>3</td>
                            <td>FEB Pumps</td>
                            <td>Flygt</td>
                            <td>Link to Manual</td>

                          </tr>
                        </tbody>
                      </Table>
                    </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>

            </Tab>
            <Tab eventKey={3} title=<div><p>Contacts</p></div>>
              <div style={{ paddingTop: '15px'}}></div>

              <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>(928)284-1837</td>
                  <td>Huber</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>(928)756-8462</td>
                  <td>Flygt</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>(928)875-8346</td>
                  <td>Aquarius</td>
                </tr>
              </tbody>
            </Table>

            </Tab>

          </Tabs>


        </Tab>
        <Tab eventKey={2} title=<div><h3>Lift Station #1</h3></div>>
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title=<div><h3>Lift Station #2</h3></div>>
          Tab 3 content
        </Tab>
      </Tabs>
</Grid>

    )
  }
}
