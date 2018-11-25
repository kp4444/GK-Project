import React, { Component } from 'react';
import { Grid, Row, Button, Col, Tabs, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import './News.css';
import { fire } from '../fire';
import { Link, Route } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';



export default class form2a extends Component {




  constructor() {
      super();

        this.state = {
          contactPerson: '',
          facilityName: '',
          mailingAddress: '',


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
      this.removeAuthListener = fire.auth().onAuthStateChanged(contactPerson=>{
      const samplesRef = fire.database().ref(`form2a/${contactPerson.uid}`);
      samplesRef.set({
        facilityName: this.state.facilityName,
        mailingAddress: this.state.mailingAddress,
        contactPerson: this.state.contactPerson,
        title: this.state.title,
        telephoneNumber: this.state.telephoneNumber,
        facilityAddress: this.state.facilityAddress,
        applicantName: this.state.applicantName,
        mailingAddressA2: this.state.mailingAddressA2,
        contactPersonA2: this.state.contactPersonA2,
        titleA2: this.state.titleA2,
        telephoneNumberA2: this.state.telephoneNumberA2
      })
      this.setState({
        facilityName: this.state.facilityName,
        mailingAddress: this.state.mailingAddress,
        contactPerson: this.state.contactPerson,
        title: this.state.title,
        telephoneNumber: this.state.telephoneNumber,
        facilityAddress: this.state.facilityAddress,
        applicantName: this.state.applicantName,
        mailingAddressA2: this.state.mailingAddressA2,
        contactPersonA2: this.state.contactPersonA2,
        titleA2: this.state.titleA2,
        telephoneNumberA2: this.state.telephoneNumberA2

      })


    });
  }


    //this function is constantly running after the initial render.  Snapshot is used to look into the database.
    //[] indicates an array value
    //.map(Number) changes an array of strings to an array of integers
    //snapshot.foreach(ss => {...}) **this looks in each "Sample" for the child of "contactPerson"**
    //child of contactPerson can be child of facilityName or child of mailingAddress or whatever.  It finds the value that is a child to that label.

    componentDidMount() {
      this.removeAuthListener = fire.auth().onAuthStateChanged(contactPerson=>{
        const samplesRef = fire.database().ref(`form2a/${contactPerson.uid}`);
        samplesRef.on('value', (snapshot) => {
          this.setState({

            facilityName: snapshot.child('facilityName').val(),
            mailingAddress: snapshot.child('mailingAddress').val(),
            contactPerson: snapshot.child('contactPerson').val(),
            title: snapshot.child('title').val(),
            telephoneNumber: snapshot.child('telephoneNumber').val(),
            facilityAddress: snapshot.child('facilityAddress').val(),
            applicantName: snapshot.child('applicantName').val(),
            mailingAddressA2: snapshot.child('mailingAddressA2').val(),
            contactPersonA2: snapshot.child('contactPersonA2').val(),
            titleA2: snapshot.child('titleA2').val(),
            telephoneNumberA2: snapshot.child('telephoneNumberA2').val()
          });
          console.log(this.state.facilityName);



      });

    });


  }

  exportPDF = () => {
    this.resume.save();
}


  render() {
    return (
      <Grid>





    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Section A">


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first">Section A.1</NavItem>
                <NavItem eventKey="second">Section A.2</NavItem>
                <NavItem eventKey="third">Section A.3</NavItem>
                <NavItem eventKey="fourth">Section A.4</NavItem>
                <NavItem eventKey="fith">Section A.5</NavItem>
                <NavItem eventKey="sixth">Section A.6</NavItem>
                <NavItem eventKey="seventh">Section A.7</NavItem>
                <NavItem eventKey="eigth">Section A.8</NavItem>
                <NavItem eventKey="ninth">Section A.9</NavItem>
                <NavItem eventKey="tenth">Section A.10</NavItem>
                <NavItem eventKey="eleventh">Section A.11</NavItem>
                <NavItem eventKey="twelveth">Section A.12</NavItem>
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
                <p>Facility Name</p>
                  <input type="text" name="facilityName" placeholder="What's your Facility name" onChange={this.handleChange} value={this.state.facilityName} />
                  <p>Mailing Address</p>
                <input type="text" name="mailingAddress" placeholder="What's your Address?" onChange={this.handleChange} value={this.state.mailingAddress} />
                <p>Contact Person</p>
                <input type="text" name="contactPerson" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.contactPerson} />
                  <p>Title</p>
                  <input type="text" name="title" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.title} />
                    <p>Telephone Number</p>
                    <input type="text" name="telephoneNumber" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.telephoneNumber} />
                      <p>Facility Address</p>
                      <input type="text" name="facilityAddress" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.facilityAddress} />
              <button>Add sample</button>
                </form>

          </section>
          </Col>
          </Row>
          </Grid>


                </Tab.Pane>
                <Tab.Pane eventKey="second">

                  <section className='add-item'>
                    <Grid>
                      <Row>
                    <Col xs={6} md={6}>

                    <form onSubmit={this.handleSubmit}>
                        <p>Applicant name</p>
                          <input type="text" name="applicantName" placeholder="What's your Facility name" onChange={this.handleChange} value={this.state.applicantName} />
                          <p>Mailing Address</p>
                        <input type="text" name="mailingAddressA2" placeholder="What's your Address?" onChange={this.handleChange} value={this.state.mailingAddressA2} />
                        <p>Contact Person</p>
                        <input type="text" name="contactPersonA2" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.contactPersonA2} />
                          <p>Title</p>
                          <input type="text" name="titleA2" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.titleA2} />
                            <p>Telephone Number</p>
                            <input type="text" name="telephoneNumberA2" placeholder="Who is your contact Person?" onChange={this.handleChange} value={this.state.telephoneNumberA2} />
                                <button>Add sample</button>
                        </form>
                      </Col>
                      </Row>
                      </Grid>

                  </section>


                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </Tab>
      <Tab eventKey={2} title="Section B">
        Tab 2 content
      </Tab>
      <Tab eventKey={3} title="Section C">
        Tab 3 content
      </Tab>
      <Tab eventKey={4} title="Section D">
        Tab 3 content
      </Tab>
      <Tab eventKey={5} title="Section E">
        Tab 3 content
      </Tab>
      <Tab eventKey={6} title="Section F">
        Tab 3 content
      </Tab>
      <Tab eventKey={7} title="Section G">
        Tab 3 content
      </Tab>
      <Tab eventKey={8} title="Full Permit">

        <button onClick={this.exportPDF}>download</button>

        <PDFExport paperSize={'Letter'}
    fileName="_____.pdf"
    title=""
    subject=""
    keywords=""
    ref={(r) => this.resume = r}>
        <div style={{
            height: 792,
            width: 612,
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px black',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'}}>

            <Row>

              <Col xs={6} md={4}>

                <p>FACILITY NAME AND PERMIT NUMBER</p>


              </Col>

              <Col xs={6} md={4}>




              </Col>

              <Col xs={6} md={4}>

                <p>Form Approved 1/14/99 OMB Number 2040-0086 </p>


              </Col>
              </Row>


              <Row>
                <Col xs={12} md={12}>
                  <p>BASIC APPLICATION INFORMATION</p>
                </Col>

                </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <p>PART A. BASIC APPLICATION INFORMATION FOR ALL APPLICANTS: </p>
                  </Col>

                  </Row>

                  <Row>
                    <Col xs={12} md={12}>
                      <p>All treatment works must complete questions A.1 through A.8 of this Basic Application Information packet. </p>
                    </Col>

                    </Row>

                    <Row>
                      <Col xs={12} md={12}>
                        <p>A.1. Facility Information. </p>
                      </Col>
                      </Row>

                      <Row>
                        <Col xs={1} md={1}>

                        </Col>
                        <Col xs={3} md={3}>
                          <p>Facility name</p>
                        </Col>
                        <Col xs={6} md={6}>
                          <p>{this.state.facilityName}</p>
                        </Col>
                        </Row>

                        <Row>
                          <Col xs={1} md={1}>

                          </Col>
                          <Col xs={3} md={3}>
                            <p>Mailing Address</p>
                          </Col>
                          <Col xs={6} md={6}>
                            <p>{this.state.mailingAddress}</p>
                          </Col>
                          </Row>
                          <Row>
                            <Col xs={1} md={1}>

                            </Col>
                            <Col xs={3} md={3}>
                              <p>Contact Person</p>
                            </Col>
                            <Col xs={6} md={6}>
                              <p>{this.state.contactPerson}</p>
                            </Col>
                            </Row>

                            <Row>
                              <Col xs={1} md={1}>

                              </Col>
                              <Col xs={3} md={3}>
                                <p>Title</p>
                              </Col>
                              <Col xs={6} md={6}>
                                <p>{this.state.title}</p>
                              </Col>
                              </Row>

                              <Row>
                                <Col xs={1} md={1}>

                                </Col>
                                <Col xs={3} md={3}>
                                  <p>Telephone Number</p>
                                </Col>
                                <Col xs={6} md={6}>
                                  <p>{this.state.telephoneNumber}</p>
                                </Col>
                                </Row>


                                <Row>
                                  <Col xs={1} md={1}>

                                  </Col>
                                  <Col xs={3} md={3}>
                                    <p>Facility Address</p>
                                  </Col>
                                  <Col xs={6} md={6}>
                                    <p>{this.state.facilityAddress}</p>
                                  </Col>
                                  </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <p>A.2. Applicant Information. If the applicant is different from the above, provide the following:</p>
                  </Col>
                  </Row>

                  <Row>
                    <Col xs={1} md={1}>

                    </Col>
                    <Col xs={3} md={3}>
                      <p>Applicant Name</p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p>{this.state.applicantName}</p>
                    </Col>
                    </Row>

                    <Row>
                      <Col xs={1} md={1}>

                      </Col>
                      <Col xs={3} md={3}>
                        <p>Mailing Address</p>
                      </Col>
                      <Col xs={6} md={6}>
                        <p>{this.state.mailingAddressA2}</p>
                      </Col>
                      </Row>
                      <Row>
                        <Col xs={1} md={1}>

                        </Col>
                        <Col xs={3} md={3}>
                          <p>Contact Person</p>
                        </Col>
                        <Col xs={6} md={6}>
                          <p>{this.state.contactPersonA2}</p>
                        </Col>
                        </Row>

                        <Row>
                          <Col xs={1} md={1}>

                          </Col>
                          <Col xs={3} md={3}>
                            <p>Title</p>
                          </Col>
                          <Col xs={6} md={6}>
                            <p>{this.state.titleA2}</p>
                          </Col>
                          </Row>

                          <Row>
                            <Col xs={1} md={1}>

                            </Col>
                            <Col xs={3} md={3}>
                              <p>Telephone Number</p>
                            </Col>
                            <Col xs={6} md={6}>
                              <p>{this.state.telephoneNumberA2}</p>
                            </Col>
                            </Row>





        </div>
</PDFExport>




      </Tab>
    </Tabs>



      </Grid>
    )
  }
}
