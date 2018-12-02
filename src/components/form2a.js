import { PDFExport } from '@progress/kendo-react-pdf';
import React, { Component } from 'react';
import { Col, Grid, Nav, NavItem, Row, Tab, Tabs } from 'react-bootstrap';
import { fire } from '../fire';
import backgroundPhoto1 from './background01.jpg';
import backgroundPhoto2 from './background02.jpg';
import './form2a.css';
import './News.css';

function FlexRow(props) {
return (
  <div style={{ display: "flex", flexFlow: "row nowrap", flex: "1 1 auto" }}>
              {props.children}
  </div>
      );
  }

  function FlexColumn(props) {
      return (
  <div style={{ display: "flex", flexFlow: "column nowrap", flex: "1 1 auto" }}>
              {props.children}
  </div>
      );
  }


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

rawMarkup(){
    var rawMarkup = this.props.content
    return { __html: rawMarkup };
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

         <FlexRow>  <Grid>
            <Row>
              <Col xs={400} md={1000}>
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
             <FlexRow> <button style={{ width: "125px"}}>Add sample</button>
              <button style={{ marginLeft: "200px", width: "125px"}} className="k-button" onClick={() => { this.pdfExportComponent.save(); }}>

                        Export PDF
                    </button> </FlexRow>
                </form>

          </section>
          </Col>
          </Row>
          </Grid>
          <div
                    style={{ position: "relative"}}>
                    <div
                    style={{ position: "absolute", left: 0, top: 0}}>

<PDFExport
                    forcePageBreak=".page-break"
                    ref={(component) => this.pdfExportComponent = component}
                >


                    {/* For details see:
                    http://www.telerik.com/kendo-react-ui/components/drawing/drawing-dom/#toc-dimensions-and-css-units */}
                          <div style={{  width: "612px", height: "792px" }}>
                            <div style={{ position: "absolute", left: 0, top: 0 }}>
                              <img
                                style={{boxShadow: '5px 5px 5px black'}}
                                src={backgroundPhoto2}
                                width={612}
                                height={792}
                              />
                            </div>
                              <div
                                style={{ position: "absolute", left: "41.39px", top: "27.78px" }}
                                className="cls_006"
                              >
                                <span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.39px", top: "40.78px" }}
                                className="cls_006"
                              >
                                <span className="cls_006">{this.state.facilityName}</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "473.40px", top: "27.90px" }}
                                className="cls_007"
                              >
                                <span className="cls_007">Form Approved 1/14/99</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "473.40px", top: "35.94px" }}
                                className="cls_007"
                              >
                                <span className="cls_007">OMB Number 2040-0086</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "47.46px", top: "61.56px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">FORM</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "50.64px", top: "71.52px" }}
                                className="cls_010"
                              >
                                <span className="cls_010">2A</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "90.90px", top: "70.20px" }}
                                className="cls_010"
                              >
                                <span className="cls_010">
                                  NPDES FORM 2A APPLICATION OVERVIEW
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "45.24px", top: "90.30px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">NPDES</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "113.40px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">APPLICATION OVERVIEW</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "134.64px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  Form 2A has been developed in a modular format and consists of a
                                  "Basic Application Information" packet
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "146.16px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  and a "Supplemental Application Information" packet. The Basic
                                  Application Information packet is divided
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "157.68px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  into two parts. All applicants must complete Parts A and C. Applicants
                                  with a design flow greater than or
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "169.14px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  equal to 0.1 mgd must also complete Part B. Some applicants must also
                                  complete the Supplemental
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "180.66px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  Application Information packet. The following items explain which parts of
                                  Form 2A you must complete.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "201.90px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">BASIC APPLICATION INFORMATION:</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "219.42px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">
                                  A. Basic Application Information for all Applicants.
                                </span>
                                <span className="cls_009">
                                  {" "}
                                  All applicants must complete questions A.1 through A.8. A
                                  treatment
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "62.99px", top: "229.80px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  works that discharges effluent to surface waters of the United
                                  States must also answer questions A.9 through A.12.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.39px", top: "246.11px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">
                                  B. Additional Application Information for Applicants with a
                                  Design Flow{" "}
                                </span>
                                <span className="cls_024">&gt;</span>
                                <span className="cls_008"> 0.1 mgd.</span>
                                <span className="cls_009">
                                  {" "}
                                  All treatment works that have design
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "62.99px", top: "256.50px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  flows greater than or equal to 0.1 million gallons per day must
                                  complete questions B.1 through B.6.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.39px", top: "272.81px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">C. Certification.</span>
                                <span className="cls_009">
                                  {" "}
                                  All applicants must complete Part C (Certification).
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "292.14px" }}
                                className="cls_011"
                              >
                                <span className="cls_011">
                                  SUPPLEMENTAL APPLICATION INFORMATION:
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.40px", top: "309.66px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">D.</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.02px", top: "309.66px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">Expanded Effluent Testing Data.</span>
                                <span className="cls_009">
                                  {" "}
                                  A treatment works that discharges effluent to surface waters of
                                  the United States and
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "320.04px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  meets one or more of the following criteria must complete Part D
                                  (Expanded Effluent Testing Data):
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "336.42px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  1. Has a design flow rate greater than or equal to 1 mgd,
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "352.73px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  2. Is required to have a pretreatment program (or has one in
                                  place), or
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "369.11px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  3. Is otherwise required by the permitting authority to provide
                                  the information.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.41px", top: "388.37px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">E.</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.02px", top: "388.37px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">Toxicity Testing Data.</span>
                                <span className="cls_009">
                                  {" "}
                                  A treatment works that meets one or more of the following
                                  criteria must complete Part E (Toxicity
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "398.81px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">Testing Data):</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "415.13px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  1. Has a design flow rate greater than or equal to 1 mgd,
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "431.51px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  2. Is required to have a pretreatment program (or has one in
                                  place), or
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "447.83px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  3. Is otherwise required by the permitting authority to submit
                                  results of toxicity testing.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.41px", top: "467.15px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">F.</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "62.99px", top: "467.15px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">
                                  Industrial User Discharges and RCRA/CERCLA Wastes.
                                </span>
                                <span className="cls_009">
                                  {" "}
                                  A treatment works that accepts process wastewater from any
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "477.53px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  significant industrial users (SIUs) or receives RCRA or CERCLA
                                  wastes must complete Part F (Industrial User Discharges and
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "487.90px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  RCRA/CERCLA Wastes). SIUs are defined as:
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "504.22px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  1. All industrial users subject to Categorical Pretreatment
                                  Standards under 40 Code of Federal Regulations (CFR) 403.6 and
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "77.41px", top: "514.60px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  40 CFR Chapter I, Subchapter N (see instructions); and
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.01px", top: "530.92px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  2. Any other industrial user that:
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "77.41px", top: "547.23px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  a. Discharges an average of 25,000 gallons per day or more of
                                  process wastewater to the treatment works (with certain
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "91.82px", top: "557.61px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">exclusions); or</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "77.42px", top: "573.93px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  b. Contributes a process wastestream that makes up 5 percent or
                                  more of the average dry weather hydraulic or organic
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "91.82px", top: "584.30px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  capacity of the treatment plant; or
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "77.42px", top: "600.62px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">
                                  c. Is designated as an SIU by the control authority.
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "41.42px", top: "622.94px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">G.</span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.03px", top: "622.94px" }}
                                className="cls_008"
                              >
                                <span className="cls_008">Combined Sewer Systems.</span>
                                <span className="cls_009">
                                  A treatment works that has a combined sewer system must complete
                                  Part G (Combined Sewer
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "63.02px", top: "633.32px" }}
                                className="cls_009"
                              >
                                <span className="cls_009">Systems).</span>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "324.62px",
                                  top: "1457.52px"
                                }}
                                className="cls_013"
                              >
                                <span className="cls_013">
                                  ALL APPLICANTS MUST COMPLETE PART C (CERTIFICATION)
                                </span>
                              </div>
                              <div
                                style={{ position: "absolute", left: "36.00px", top: "665.62px" }}
                                className="cls_005"
                              >
                                <span className="cls_005">
                                  EPA Form 3510-2A (Rev. 1-99). Replaces EPA forms 7550-6 &amp;
                                  7550-22.
                                </span>
                              </div>
                              <div
                                style={{
                                  position: "absolute",
                                  left: "530.58px",
                                  top: "760.68px"
                                }}
                                className="cls_005"
                              >
                                <span className="cls_005">Page 1 of 21</span>
                              </div>


                            </div>



                </PDFExport>
                </div>
              </div></FlexRow>




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

                <Tab.Pane eventKey="third">

                  content

                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>


      </Tab>
      <Tab eventKey={2} title="Section B">
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

        <button className="k-button" onClick={() => { this.pdfExportComponent.save(); }}>
                        Export PDF
                    </button>
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

              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-306px",
                  top: 0,
                  width: 612,
                  height: 792,
                  borderStyle: "outset",
                  overflow: "hidden",

                }}
              >
                <div style={{ position: "absolute", left: 0, top: 0 }}>
                  <img
                    src={backgroundPhoto1}
                    width={612}
                    height={792}
                  />
                </div>
                <div
                  style={{ position: "absolute", left: "259.92px", top: "70.68px" }}
                  className="cls_002"
                >
                  <span className="cls_002">Disclaimer</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "115.62px",
                    top: "134.64px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">
                    This is an updated PDF document that allows you to type your
                    information
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "115.62px",
                    top: "148.44px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">
                    directly into the form, print it, and save the completed form.
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "115.62px",
                    top: "176.04px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">
                    Note: This form can be viewed and saved only using Adobe Acrobat
                    Reader
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "115.62px",
                    top: "189.84px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">
                    version 7.0 or higher, or if you have the full Adobe
                    Professional version.
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "115.62px",
                    top: "217.44px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">Instructions:</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "133.62px",
                    top: "231.24px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">1. Type in your information</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "133.62px",
                    top: "245.04px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">2. Save file (if desired)</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "133.62px",
                    top: "258.84px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">3. Print the completed form</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "133.62px",
                    top: "272.64px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">4. Sign and date the printed copy</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "133.62px",
                    top: "286.44px"
                  }}
                  className="cls_003"
                >
                  <span className="cls_003">
                    5. Mail it to the directed contact.
                  </span>
                </div>
              </div>







          </div>
  </PDFExport>






      </Tab>
    </Tabs>



      </Grid>
    )
  }
}
