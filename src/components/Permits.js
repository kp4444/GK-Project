import React, { Component } from 'react';
import { Grid, Row, Button, Col, Tabs, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import './News.css';
import { fire } from '../fire';
import form2a from './form2a';
import { Link, Route } from 'react-router-dom';
import './form2a.css';




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

                <Link to="/form2a">
                  <Button bsStyle="primary">Your Permit</Button>
                </Link>
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
        <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n<!--\nspan.cls_002{font-family:Times,serif;font-size:20.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_002{font-family:Times,serif;font-size:20.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_003{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_003{font-family:Times,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_006{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_006{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_007{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:normal;font-style:italic;text-decoration: none}\ndiv.cls_007{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:normal;font-style:italic;text-decoration: none}\nspan.cls_008{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_008{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_010{font-family:Arial,serif;font-size:16.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_010{font-family:Arial,serif;font-size:16.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_011{font-family:Arial,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_011{font-family:Arial,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_009{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_009{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_024{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: underline}\ndiv.cls_024{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_013{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_013{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_005{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_005{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_025{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: underline}\ndiv.cls_025{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_015{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_015{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_016{font-family:Arial,serif;font-size:5.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_016{font-family:Arial,serif;font-size:5.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_026{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: underline}\ndiv.cls_026{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_017{font-family:Arial,serif;font-size:7.5px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_017{font-family:Arial,serif;font-size:7.5px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_018{font-family:Times,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_018{font-family:Times,serif;font-size:10.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_019{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_019{font-family:Arial,serif;font-size:7.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_021{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_021{font-family:Arial,serif;font-size:8.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\n-->\n" }} />
          <div style={{position: 'absolute', left: '75%', marginLeft: '-306px', top: 125, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background02.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.39px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '47.46px', top: '61.56px'}} className="cls_008"><span className="cls_008">FORM</span></div>
          <div style={{position: 'absolute', left: '50.64px', top: '71.52px'}} className="cls_010"><span className="cls_010">2A</span></div>
          <div style={{position: 'absolute', left: '90.90px', top: '70.20px'}} className="cls_010"><span className="cls_010">NPDES FORM 2A APPLICATION OVERVIEW</span></div>
          <div style={{position: 'absolute', left: '45.24px', top: '90.30px'}} className="cls_008"><span className="cls_008">NPDES</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '113.40px'}} className="cls_011"><span className="cls_011">APPLICATION OVERVIEW</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '134.64px'}} className="cls_011"><span className="cls_011">Form 2A has been developed in a modular format and consists of a "Basic Application Information" packet and</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '146.16px'}} className="cls_011"><span className="cls_011">a "Supplemental Application Information" packet.  The Basic Application Information packet is divided into two</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '157.68px'}} className="cls_011"><span className="cls_011">parts.  All applicants must complete Parts A and C.  Applicants with a design flow greater than or equal to 0.1</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '169.14px'}} className="cls_011"><span className="cls_011">mgd must also complete Part B.  Some applicants must also complete the Supplemental Application</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '180.66px'}} className="cls_011"><span className="cls_011">Information packet. The following items explain which parts of Form 2A you must complete.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '201.90px'}} className="cls_011"><span className="cls_011">BASIC APPLICATION INFORMATION:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '219.42px'}} className="cls_008"><span className="cls_008">A.    Basic Application Information for all Applicants.</span><span className="cls_009">  All applicants must complete questions A.1 through A.8.  A treatment</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '229.80px'}} className="cls_009"><span className="cls_009">works that discharges effluent to surface waters of the United States must also answer questions A.9 through A.12.</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '246.11px'}} className="cls_008"><span className="cls_008">B.   Additional Application Information for Applicants with a Design Flow </span><span className="cls_024">&gt;</span><span className="cls_008"> 0.1 mgd.</span><span className="cls_009">  All treatment works that have design</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '256.50px'}} className="cls_009"><span className="cls_009">flows greater than or equal to 0.1 million gallons per day must complete questions B.1 through B.6.</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '272.81px'}} className="cls_008"><span className="cls_008">C.    Certification.</span><span className="cls_009">  All applicants must complete Part C (Certification).</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '292.14px'}} className="cls_011"><span className="cls_011">SUPPLEMENTAL APPLICATION INFORMATION:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '309.66px'}} className="cls_008"><span className="cls_008">D.</span></div>
          <div style={{position: 'absolute', left: '63.02px', top: '309.66px'}} className="cls_008"><span className="cls_008">Expanded Effluent Testing Data.</span><span className="cls_009">  A treatment works that discharges effluent to surface waters of the United States and</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '320.04px'}} className="cls_009"><span className="cls_009">meets one or more of the following criteria must complete Part D (Expanded Effluent Testing Data):</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '336.42px'}} className="cls_009"><span className="cls_009">1.  Has a design flow rate greater than or equal to 1 mgd,</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '352.73px'}} className="cls_009"><span className="cls_009">2.  Is required to have a pretreatment program (or has one in place), or</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '369.11px'}} className="cls_009"><span className="cls_009">3.  Is otherwise required by the permitting authority to provide the information.</span></div>
          <div style={{position: 'absolute', left: '41.41px', top: '388.37px'}} className="cls_008"><span className="cls_008">E.</span></div>
          <div style={{position: 'absolute', left: '63.02px', top: '388.37px'}} className="cls_008"><span className="cls_008">Toxicity Testing Data.</span><span className="cls_009">  A treatment works that meets one or more of the following criteria must complete Part E (Toxicity</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '398.81px'}} className="cls_009"><span className="cls_009">Testing Data):</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '415.13px'}} className="cls_009"><span className="cls_009">1.  Has a design flow rate greater than or equal to 1 mgd,</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '431.51px'}} className="cls_009"><span className="cls_009">2.  Is required to have a pretreatment program (or has one in place), or</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '447.83px'}} className="cls_009"><span className="cls_009">3.  Is otherwise required by the permitting authority to submit results of toxicity testing.</span></div>
          <div style={{position: 'absolute', left: '41.41px', top: '467.15px'}} className="cls_008"><span className="cls_008">F.</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '467.15px'}} className="cls_008"><span className="cls_008">Industrial User Discharges and RCRA/CERCLA Wastes.</span><span className="cls_009">  A treatment works that accepts process wastewater from any</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '477.53px'}} className="cls_009"><span className="cls_009">significant industrial users (SIUs) or receives RCRA or CERCLA wastes must complete Part F (Industrial User Discharges and</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '487.90px'}} className="cls_009"><span className="cls_009">RCRA/CERCLA Wastes).  SIUs are defined as:</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '504.22px'}} className="cls_009"><span className="cls_009">1.  All industrial users subject to Categorical Pretreatment Standards under 40 Code of Federal Regulations (CFR) 403.6 and</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '514.60px'}} className="cls_009"><span className="cls_009">40 CFR Chapter I, Subchapter N (see instructions); and</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '530.92px'}} className="cls_009"><span className="cls_009">2.  Any other industrial user that:</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '547.23px'}} className="cls_009"><span className="cls_009">a.  Discharges an average of 25,000 gallons per day or more of process wastewater to the treatment works (with certain</span></div>
          <div style={{position: 'absolute', left: '91.82px', top: '557.61px'}} className="cls_009"><span className="cls_009">exclusions); or</span></div>
          <div style={{position: 'absolute', left: '77.42px', top: '573.93px'}} className="cls_009"><span className="cls_009">b.  Contributes a process wastestream that makes up 5 percent or more of the average dry weather hydraulic or organic</span></div>
          <div style={{position: 'absolute', left: '91.82px', top: '584.30px'}} className="cls_009"><span className="cls_009">capacity of the treatment plant; or</span></div>
          <div style={{position: 'absolute', left: '77.42px', top: '600.62px'}} className="cls_009"><span className="cls_009">c.  Is designated as an SIU by the control authority.</span></div>
          <div style={{position: 'absolute', left: '41.42px', top: '622.94px'}} className="cls_008"><span className="cls_008">G.</span></div>
          <div style={{position: 'absolute', left: '63.03px', top: '622.94px'}} className="cls_008"><span className="cls_008">Combined Sewer Systems.</span><span className="cls_009">A treatment works that has a combined sewer system must complete Part G (Combined Sewer</span></div>
          <div style={{position: 'absolute', left: '63.02px', top: '633.32px'}} className="cls_009"><span className="cls_009">Systems).</span></div>
          <div style={{position: 'absolute', left: '124.62px', top: '665.52px'}} className="cls_013"><span className="cls_013">ALL APPLICANTS MUST COMPLETE PART C (CERTIFICATION)</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 1 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '75%', marginLeft: '-306px', top: 917, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background03.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.39px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '67.44px'}} className="cls_013"><span className="cls_013">BASIC APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '98.10px'}} className="cls_008"><span className="cls_008">PART A.  BASIC APPLICATION  INFORMATION FOR ALL APPLICANTS:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '115.32px'}} className="cls_006"><span className="cls_006">All treatment works must complete questions A.1 through A.8 of this Basic Application Information packet.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '131.28px'}} className="cls_006"><span className="cls_006">A.1.   Facility Information.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '152.46px'}} className="cls_005"><span className="cls_005">Facility name</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '174.42px'}} className="cls_005"><span className="cls_005">Mailing Address</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '212.34px'}} className="cls_005"><span className="cls_005">Contact person</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '234.30px'}} className="cls_005"><span className="cls_005">Title</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '256.20px'}} className="cls_005"><span className="cls_005">Telephone number</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '278.16px'}} className="cls_005"><span className="cls_005">Facility Address</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '294.12px'}} className="cls_005"><span className="cls_005">(not P.O. Box)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '316.26px'}} className="cls_006"><span className="cls_006">A.2.   Applicant Information.</span><span className="cls_005">  If the applicant is different from the above, provide the following:</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '337.44px'}} className="cls_005"><span className="cls_005">Applicant name</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '359.40px'}} className="cls_005"><span className="cls_005">Mailing Address</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '397.32px'}} className="cls_005"><span className="cls_005">Contact person</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '419.28px'}} className="cls_005"><span className="cls_005">Title</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '441.24px'}} className="cls_005"><span className="cls_005">Telephone number</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '463.14px'}} className="cls_006"><span className="cls_006">Is the applicant the owner or operator (or both) of the treatment works?</span></div>
          <div style={{position: 'absolute', left: '105.19px', top: '478.32px'}} className="cls_005"><span className="cls_005">owner</span></div>
          <div style={{position: 'absolute', left: '203.65px', top: '478.32px'}} className="cls_005"><span className="cls_005">operator</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '494.34px'}} className="cls_005"><span className="cls_005">Indicate whether correspondence regarding this permit should be directed to the facility or the applicant.</span></div>
          <div style={{position: 'absolute', left: '104.10px', top: '509.46px'}} className="cls_005"><span className="cls_005">facility</span></div>
          <div style={{position: 'absolute', left: '203.62px', top: '509.46px'}} className="cls_005"><span className="cls_005">applicant</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '531.60px'}} className="cls_006"><span className="cls_006">A.3.   Existing Environmental Permits.</span><span className="cls_005">  Provide the permit number of any existing environmental permits that have been issued to the treatment</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '540.84px'}} className="cls_005"><span className="cls_005">works (include state-issued permits).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '562.02px'}} className="cls_005"><span className="cls_005">NPDES</span></div>
          <div style={{position: 'absolute', left: '344.94px', top: '562.02px'}} className="cls_005"><span className="cls_005">PSD</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '577.98px'}} className="cls_005"><span className="cls_005">UIC</span></div>
          <div style={{position: 'absolute', left: '344.93px', top: '577.98px'}} className="cls_005"><span className="cls_005">Other</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '593.94px'}} className="cls_005"><span className="cls_005">RCRA</span></div>
          <div style={{position: 'absolute', left: '344.92px', top: '593.94px'}} className="cls_005"><span className="cls_005">Other</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '616.08px'}} className="cls_006"><span className="cls_006">A.4.   Collection System Information.</span><span className="cls_005">  Provide information on municipalities and areas served by the facility.  Provide the name and population of</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '625.26px'}} className="cls_005"><span className="cls_005">each entity and, if known, provide information on the type of collection system (combined vs. separate) and its ownership (municipal, private,</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '634.50px'}} className="cls_005"><span className="cls_005">etc.).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '652.68px'}} className="cls_006"><span className="cls_006">Name</span></div>
          <div style={{position: 'absolute', left: '198.89px', top: '652.68px'}} className="cls_006"><span className="cls_006">Population Served</span></div>
          <div style={{position: 'absolute', left: '311.36px', top: '652.68px'}} className="cls_006"><span className="cls_006">Type of Collection System</span></div>
          <div style={{position: 'absolute', left: '450.88px', top: '652.68px'}} className="cls_006"><span className="cls_006">Ownership</span></div>
          <div style={{position: 'absolute', left: '102.72px', top: '721.92px'}} className="cls_006"><span className="cls_006">Total population served</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 2 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 2406, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background04.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.39px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '61.68px'}} className="cls_006"><span className="cls_006">A.5.</span></div>
          <div style={{position: 'absolute', left: '63.01px', top: '61.68px'}} className="cls_006"><span className="cls_006">Indian Country.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '82.86px'}} className="cls_005"><span className="cls_005">a.   Is the treatment works located in Indian Country?</span></div>
          <div style={{position: 'absolute', left: '113.40px', top: '98.04px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '214.11px', top: '98.04px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '114.00px'}} className="cls_005"><span className="cls_005">b.   Does the treatment works discharge to a receiving water that is either in Indian Country or that is upstream from (and eventually flows</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '123.24px'}} className="cls_005"><span className="cls_005">through) Indian Country?</span></div>
          <div style={{position: 'absolute', left: '113.40px', top: '138.42px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '214.11px', top: '138.42px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '160.56px'}} className="cls_006"><span className="cls_006">A.6.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '160.56px'}} className="cls_006"><span className="cls_006">Flow.</span><span className="cls_005">  Indicate the design flow rate of the treatment plant (i.e., the wastewater flow rate that the plant was built to handle).  Also provide the</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '169.74px'}} className="cls_005"><span className="cls_005">average daily flow rate and maximum daily flow rate for each of the last three years.  Each year's data must be based on a 12-month time</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '178.91px'}} className="cls_005"><span className="cls_005">period with the 12th month of "this year" occurring no more than three months prior to this application submittal.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '200.16px'}} className="cls_005"><span className="cls_005">a.   Design flow rate  _______________ mgd</span></div>
          <div style={{position: 'absolute', left: '233.16px', top: '215.34px'}} className="cls_025"><span className="cls_025">Two Years Ago</span></div>
          <div style={{position: 'absolute', left: '337.50px', top: '215.34px'}} className="cls_025"><span className="cls_025">Last Year</span></div>
          <div style={{position: 'absolute', left: '441.90px', top: '215.34px'}} className="cls_025"><span className="cls_025">This Year</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '230.52px'}} className="cls_005"><span className="cls_005">b.   Annual average daily flow rate</span></div>
          <div style={{position: 'absolute', left: '531.84px', top: '230.52px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '246.54px'}} className="cls_005"><span className="cls_005">c.   Maximum daily flow rate</span></div>
          <div style={{position: 'absolute', left: '531.83px', top: '246.54px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '268.62px'}} className="cls_006"><span className="cls_006">A.7.</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '268.62px'}} className="cls_006"><span className="cls_006">Collection System.</span><span className="cls_005">  Indicate the type(s) of collection system(s) used by the treatment plant.  Check all that apply.  Also estimate the percent</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '277.86px'}} className="cls_005"><span className="cls_005">contribution (by miles) of each.</span></div>
          <div style={{position: 'absolute', left: '97.56px', top: '299.04px'}} className="cls_005"><span className="cls_005">Separate sanitary sewer</span></div>
          <div style={{position: 'absolute', left: '532.14px', top: '299.04px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '97.56px', top: '315.00px'}} className="cls_005"><span className="cls_005">Combined storm and sanitary sewer</span></div>
          <div style={{position: 'absolute', left: '532.08px', top: '315.00px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '337.14px'}} className="cls_006"><span className="cls_006">A.8.</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '337.14px'}} className="cls_006"><span className="cls_006">Discharges and Other Disposal Methods.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '358.32px'}} className="cls_005"><span className="cls_005">a.</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '358.32px'}} className="cls_005"><span className="cls_005">Does the treatment works discharge effluent to waters of the U.S.?</span></div>
          <div style={{position: 'absolute', left: '448.30px', top: '358.32px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '531.13px', top: '358.32px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '374.34px'}} className="cls_005"><span className="cls_005">If yes, list how many of each of the following types of discharge points the treatment works uses:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '389.46px'}} className="cls_005"><span className="cls_005">i.</span></div>
          <div style={{position: 'absolute', left: '91.78px', top: '389.46px'}} className="cls_005"><span className="cls_005">Discharges of treated effluent</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '405.48px'}} className="cls_005"><span className="cls_005">ii.</span></div>
          <div style={{position: 'absolute', left: '91.75px', top: '405.48px'}} className="cls_005"><span className="cls_005">Discharges of untreated or partially treated effluent</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '421.38px'}} className="cls_005"><span className="cls_005">iii.</span></div>
          <div style={{position: 'absolute', left: '91.76px', top: '421.38px'}} className="cls_005"><span className="cls_005">Combined sewer overflow points</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '437.34px'}} className="cls_005"><span className="cls_005">iv.  Constructed emergency overflows (prior to the headworks)</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '453.30px'}} className="cls_005"><span className="cls_005">v.   Other</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '478.44px'}} className="cls_005"><span className="cls_005">b.</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '478.44px'}} className="cls_005"><span className="cls_005">Does the treatment works discharge effluent to basins, ponds, or other surface</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '487.62px'}} className="cls_005"><span className="cls_005">impoundments that do not have outlets for discharge to waters of the U.S.?</span></div>
          <div style={{position: 'absolute', left: '448.31px', top: '487.62px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '531.17px', top: '487.62px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '503.58px'}} className="cls_005"><span className="cls_005">If yes, provide the following </span><span className="cls_025">for each surface impoundment</span><span className="cls_005">:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '518.76px'}} className="cls_005"><span className="cls_005">Location:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '534.78px'}} className="cls_005"><span className="cls_005">Annual average daily volume discharged to surface impoundment(s)</span></div>
          <div style={{position: 'absolute', left: '498.88px', top: '533.76px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '550.68px'}} className="cls_005"><span className="cls_005">Is discharge</span></div>
          <div style={{position: 'absolute', left: '176.66px', top: '550.68px'}} className="cls_005"><span className="cls_005">continuous or</span></div>
          <div style={{position: 'absolute', left: '280.10px', top: '550.68px'}} className="cls_005"><span className="cls_005">intermittent?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '575.82px'}} className="cls_005"><span className="cls_005">c.</span></div>
          <div style={{position: 'absolute', left: '77.38px', top: '575.82px'}} className="cls_005"><span className="cls_005">Does the treatment works land-apply treated wastewater?</span></div>
          <div style={{position: 'absolute', left: '448.30px', top: '575.82px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '531.13px', top: '575.82px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '591.78px'}} className="cls_005"><span className="cls_005">If yes, provide the following </span><span className="cls_025">for each land application site</span><span className="cls_005">:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '606.96px'}} className="cls_005"><span className="cls_005">Location:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '622.92px'}} className="cls_005"><span className="cls_005">Number of acres:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '638.88px'}} className="cls_005"><span className="cls_005">Annual average daily volume applied to site:</span></div>
          <div style={{position: 'absolute', left: '383.54px', top: '637.86px'}} className="cls_005"><span className="cls_005">Mgd</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '654.84px'}} className="cls_005"><span className="cls_005">Is land application</span></div>
          <div style={{position: 'absolute', left: '199.07px', top: '654.84px'}} className="cls_005"><span className="cls_005">continuous or</span></div>
          <div style={{position: 'absolute', left: '302.51px', top: '654.84px'}} className="cls_005"><span className="cls_005">intermittent?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '679.98px'}} className="cls_005"><span className="cls_005">d.</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '679.98px'}} className="cls_005"><span className="cls_005">Does the treatment works discharge or transport treated or untreated wastewater to another</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '689.16px'}} className="cls_005"><span className="cls_005">treatment works?</span></div>
          <div style={{position: 'absolute', left: '448.31px', top: '689.16px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '531.17px', top: '689.16px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 3 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 3208, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background05.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '76.20px'}} className="cls_005"><span className="cls_005">If yes, describe the mean(s) by which the wastewater from the treatment works is discharged or transported to the other treatment</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '85.38px'}} className="cls_005"><span className="cls_005">works (e.g., tank truck, pipe).</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '125.70px'}} className="cls_005"><span className="cls_005">If transport is by a party other than the applicant, provide:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '140.88px'}} className="cls_005"><span className="cls_005">Transporter name:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '156.90px'}} className="cls_005"><span className="cls_005">Mailing Address:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '197.94px'}} className="cls_005"><span className="cls_005">Contact person:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '213.90px'}} className="cls_005"><span className="cls_005">Title:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '229.86px'}} className="cls_005"><span className="cls_005">Telephone number:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '261.00px'}} className="cls_025"><span className="cls_025">For each treatment works that receives this discharge</span><span className="cls_005">, provide the following:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '291.36px'}} className="cls_005"><span className="cls_005">Name:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '307.38px'}} className="cls_005"><span className="cls_005">Mailing Address:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '348.42px'}} className="cls_005"><span className="cls_005">Contact person:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '364.44px'}} className="cls_005"><span className="cls_005">Title:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '380.34px'}} className="cls_005"><span className="cls_005">Telephone number:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '396.30px'}} className="cls_005"><span className="cls_005">If known, provide the NPDES permit number of the treatment works that receives this discharge.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '412.26px'}} className="cls_005"><span className="cls_005">Provide the average daily flow rate from the treatment works into the receiving facility.</span></div>
          <div style={{position: 'absolute', left: '531.80px', top: '412.26px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '437.40px'}} className="cls_005"><span className="cls_005">e.   Does the treatment works discharge or dispose of its wastewater in a manner not included in</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '446.58px'}} className="cls_005"><span className="cls_005">A.8.a through A.8.d above (e.g., underground percolation, well injection)?</span></div>
          <div style={{position: 'absolute', left: '451.01px', top: '446.58px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '531.17px', top: '446.58px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '462.54px'}} className="cls_005"><span className="cls_005">If yes, provide the following </span><span className="cls_025">for each disposal method</span><span className="cls_005">:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '477.72px'}} className="cls_005"><span className="cls_005">Description of method (including location and size of site(s) if applicable):</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '508.92px'}} className="cls_005"><span className="cls_005">Annual daily volume disposed of by this method:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '524.88px'}} className="cls_005"><span className="cls_005">Is disposal through this method</span></div>
          <div style={{position: 'absolute', left: '252.90px', top: '524.88px'}} className="cls_005"><span className="cls_005">continuous or</span></div>
          <div style={{position: 'absolute', left: '356.37px', top: '524.88px'}} className="cls_005"><span className="cls_005">intermittent?</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 4 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 4010, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background06.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.28px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.28px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.28px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '55.68px', top: '82.32px'}} className="cls_006"><span className="cls_006">WASTEWATER DISCHARGES:</span></div>
          <div style={{position: 'absolute', left: '55.68px', top: '97.56px'}} className="cls_006"><span className="cls_006">If you answered "yes" to question A.8.a</span><span className="cls_005">, complete questions A.9 through A.12 </span><span className="cls_006">once for each outfall</span><span className="cls_005"> (including bypass points) through</span></div>
          <div style={{position: 'absolute', left: '55.68px', top: '106.74px'}} className="cls_005"><span className="cls_005">which effluent is discharged.  Do not include information on combined sewer overflows in this section.</span><span className="cls_006">If you answered "no" to question</span></div>
          <div style={{position: 'absolute', left: '55.68px', top: '115.92px'}} className="cls_006"><span className="cls_006">A.8.a</span><span className="cls_005">, go to Part B, “Additional Application Information for Applicants with a Design Flow Greater than or Equal to 0.1 mgd.”</span></div>
          <div style={{position: 'absolute', left: '41.28px', top: '147.12px'}} className="cls_006"><span className="cls_006">A.9.</span></div>
          <div style={{position: 'absolute', left: '62.89px', top: '147.12px'}} className="cls_006"><span className="cls_006">Description of Outfall.</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '162.30px'}} className="cls_005"><span className="cls_005">a.   Outfall number</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '181.44px'}} className="cls_005"><span className="cls_005">b.   Location</span></div>
          <div style={{position: 'absolute', left: '167.28px', top: '191.46px'}} className="cls_015"><span className="cls_015">(City or town, if applicable)</span></div>
          <div style={{position: 'absolute', left: '405.79px', top: '191.46px'}} className="cls_015"><span className="cls_015">(Zip Code)</span></div>
          <div style={{position: 'absolute', left: '167.28px', top: '209.46px'}} className="cls_015"><span className="cls_015">(County)</span></div>
          <div style={{position: 'absolute', left: '405.81px', top: '209.46px'}} className="cls_015"><span className="cls_015">(State)</span></div>
          <div style={{position: 'absolute', left: '167.28px', top: '227.46px'}} className="cls_015"><span className="cls_015">(Latitude)</span></div>
          <div style={{position: 'absolute', left: '405.79px', top: '227.46px'}} className="cls_015"><span className="cls_015">(Longitude)</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '244.62px'}} className="cls_005"><span className="cls_005">c.   Distance from shore (if applicable)</span></div>
          <div style={{position: 'absolute', left: '368.83px', top: '244.62px'}} className="cls_005"><span className="cls_005">ft.</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '263.76px'}} className="cls_005"><span className="cls_005">d.   Depth below surface (if applicable)</span></div>
          <div style={{position: 'absolute', left: '368.83px', top: '263.76px'}} className="cls_005"><span className="cls_005">ft.</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '282.96px'}} className="cls_005"><span className="cls_005">e.   Average daily flow rate</span></div>
          <div style={{position: 'absolute', left: '368.85px', top: '282.96px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '308.10px'}} className="cls_005"><span className="cls_005">f.</span></div>
          <div style={{position: 'absolute', left: '77.29px', top: '308.10px'}} className="cls_005"><span className="cls_005">Does this outfall have either an intermittent or a</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '317.28px'}} className="cls_005"><span className="cls_005">periodic discharge?</span></div>
          <div style={{position: 'absolute', left: '329.28px', top: '323.28px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '425.28px', top: '323.28px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '447.17px', top: '323.28px'}} className="cls_005"><span className="cls_005">(go to A.9.g.)</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '339.24px'}} className="cls_005"><span className="cls_005">If yes, provide the following information:</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '363.60px'}} className="cls_005"><span className="cls_005">Number of times per year discharge occurs:</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '379.62px'}} className="cls_005"><span className="cls_005">Average duration of each discharge:</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '395.58px'}} className="cls_005"><span className="cls_005">Average flow per discharge:</span></div>
          <div style={{position: 'absolute', left: '426.75px', top: '395.58px'}} className="cls_005"><span className="cls_005">mgd</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '411.48px'}} className="cls_005"><span className="cls_005">Months in which discharge occurs:</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '436.62px'}} className="cls_005"><span className="cls_005">g.   Is outfall equipped with a diffuser?</span></div>
          <div style={{position: 'absolute', left: '329.28px', top: '436.62px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '425.25px', top: '436.62px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '41.28px', top: '468.00px'}} className="cls_006"><span className="cls_006">A.10. Description of Receiving Waters.</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '492.36px'}} className="cls_005"><span className="cls_005">a.   Name of receiving water</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '517.50px'}} className="cls_005"><span className="cls_005">b.   Name of watershed (if known)</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '542.64px'}} className="cls_005"><span className="cls_005">United States Soil Conservation Service 14-digit watershed code (if known):</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '567.84px'}} className="cls_005"><span className="cls_005">c.   Name of State Management/River Basin (if known):</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '592.98px'}} className="cls_005"><span className="cls_005">United States Geological Survey 8-digit hydrologic cataloging unit code (if known):</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '618.12px'}} className="cls_005"><span className="cls_005">d.   Critical low flow of receiving stream (if applicable):</span></div>
          <div style={{position: 'absolute', left: '77.28px', top: '630.30px'}} className="cls_005"><span className="cls_005">acute</span></div>
          <div style={{position: 'absolute', left: '199.69px', top: '630.30px'}} className="cls_005"><span className="cls_005">cfs</span></div>
          <div style={{position: 'absolute', left: '299.09px', top: '630.30px'}} className="cls_005"><span className="cls_005">chronic  ______________  cfs</span></div>
          <div style={{position: 'absolute', left: '62.88px', top: '646.26px'}} className="cls_005"><span className="cls_005">e.   Total hardness of receiving stream at critical low flow (if applicable):</span></div>
          <div style={{position: 'absolute', left: '320.79px', top: '646.26px'}} className="cls_005"><span className="cls_005">_______________  mg/l of CaCO</span></div>
          <div style={{position: 'absolute', left: '440.46px', top: '646.26px'}} className="cls_005"><span className="cls_005">3</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 5 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 4812, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background07.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '73.20px'}} className="cls_006"><span className="cls_006">A.11. Description of Treatment.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '94.32px'}} className="cls_005"><span className="cls_005">a.   What levels of treatment are provided? Check all that apply.</span></div>
          <div style={{position: 'absolute', left: '120.60px', top: '109.56px'}} className="cls_005"><span className="cls_005">Primary</span></div>
          <div style={{position: 'absolute', left: '251.88px', top: '109.56px'}} className="cls_005"><span className="cls_005">Secondary</span></div>
          <div style={{position: 'absolute', left: '120.60px', top: '125.52px'}} className="cls_005"><span className="cls_005">Advanced</span></div>
          <div style={{position: 'absolute', left: '251.84px', top: '125.52px'}} className="cls_005"><span className="cls_005">Other.    Describe:</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '144.66px'}} className="cls_005"><span className="cls_005">b.   Indicate the following removal rates (as applicable):</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '163.02px'}} className="cls_005"><span className="cls_005">Design BOD</span></div>
          <div style={{position: 'absolute', left: '126.84px', top: '163.02px'}} className="cls_005"><span className="cls_005">removal </span><span className="cls_025">or</span><span className="cls_005"> Design CBOD  removal</span></div>
          <div style={{position: 'absolute', left: '463.96px', top: '163.02px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '121.80px', top: '170.04px'}} className="cls_016"><span className="cls_016">5</span></div>
          <div style={{position: 'absolute', left: '217.08px', top: '170.04px'}} className="cls_016"><span className="cls_016">5</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '182.22px'}} className="cls_005"><span className="cls_005">Design SS removal</span></div>
          <div style={{position: 'absolute', left: '463.98px', top: '182.22px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '201.36px'}} className="cls_005"><span className="cls_005">Design P removal</span></div>
          <div style={{position: 'absolute', left: '463.97px', top: '201.36px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '220.50px'}} className="cls_005"><span className="cls_005">Design N removal</span></div>
          <div style={{position: 'absolute', left: '463.95px', top: '220.50px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '239.64px'}} className="cls_005"><span className="cls_005">Other</span></div>
          <div style={{position: 'absolute', left: '463.97px', top: '239.64px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '258.78px'}} className="cls_005"><span className="cls_005">c.   What type of disinfection is used for the effluent from this outfall? If disinfection varies by season, please describe.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '295.80px'}} className="cls_005"><span className="cls_005">If disinfection is by chlorination, is dechlorination used for this outfall?</span></div>
          <div style={{position: 'absolute', left: '418.22px', top: '295.80px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '506.82px', top: '295.80px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '314.94px'}} className="cls_005"><span className="cls_005">d.   Does the treatment plant have post aeration?</span></div>
          <div style={{position: 'absolute', left: '418.27px', top: '314.94px'}} className="cls_005"><span className="cls_005">Yes</span></div>
          <div style={{position: 'absolute', left: '506.87px', top: '314.94px'}} className="cls_005"><span className="cls_005">No</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '337.86px'}} className="cls_006"><span className="cls_006">A.12. Effluent Testing Information.  All Applicants that discharge to waters of the US must provide effluent testing data for the following</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '347.04px'}} className="cls_006"><span className="cls_006">parameters. Provide the indicated effluent testing required by the permitting authority </span><span className="cls_026">for each outfall through which effluent is</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '356.28px'}} className="cls_026"><span className="cls_026">discharged</span><span className="cls_006">.  Do not include information on combined sewer overflows in this section. All information reported must be based on data</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '365.46px'}} className="cls_006"><span className="cls_006">collected through analysis conducted using 40 CFR Part 136 methods.  In addition, this data must comply with QA/QC requirements</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '374.63px'}} className="cls_006"><span className="cls_006">of 40 CFR Part 136 and other appropriate QA/QC requirements for standard methods for analytes not addressed by 40 CFR Part 136.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '383.87px'}} className="cls_006"><span className="cls_006">At a minimum, effluent testing data must be based on at least three samples and must be no more than four and one-half  years apart.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '405.00px'}} className="cls_005"><span className="cls_005">Outfall number:</span></div>
          <div style={{position: 'absolute', left: '91.92px', top: '424.98px'}} className="cls_005"><span className="cls_005">PARAMETER</span></div>
          <div style={{position: 'absolute', left: '219.24px', top: '424.98px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY VALUE</span></div>
          <div style={{position: 'absolute', left: '408.42px', top: '424.98px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY VALUE</span></div>
          <div style={{position: 'absolute', left: '219.18px', top: '443.10px'}} className="cls_005"><span className="cls_005">Value</span></div>
          <div style={{position: 'absolute', left: '287.88px', top: '443.10px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '360.66px', top: '443.10px'}} className="cls_005"><span className="cls_005">Value</span></div>
          <div style={{position: 'absolute', left: '433.26px', top: '443.10px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '490.68px', top: '443.10px'}} className="cls_005"><span className="cls_005">Number of Samples</span></div>
          <div style={{position: 'absolute', left: '41.82px', top: '467.28px'}} className="cls_005"><span className="cls_005">pH (Minimum)</span></div>
          <div style={{position: 'absolute', left: '290.50px', top: '467.28px'}} className="cls_005"><span className="cls_005">s.u.</span></div>
          <div style={{position: 'absolute', left: '41.82px', top: '483.18px'}} className="cls_005"><span className="cls_005">pH (Maximum)</span></div>
          <div style={{position: 'absolute', left: '290.52px', top: '483.18px'}} className="cls_005"><span className="cls_005">s.u.</span></div>
          <div style={{position: 'absolute', left: '41.82px', top: '499.14px'}} className="cls_005"><span className="cls_005">Flow Rate</span></div>
          <div style={{position: 'absolute', left: '41.82px', top: '515.10px'}} className="cls_005"><span className="cls_005">Temperature (Winter)</span></div>
          <div style={{position: 'absolute', left: '41.82px', top: '531.06px'}} className="cls_005"><span className="cls_005">Temperature (Summer)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '541.02px'}} className="cls_005"><span className="cls_005">* For pH please report a minimum and a maximum daily value</span></div>
          <div style={{position: 'absolute', left: '190.14px', top: '553.92px'}} className="cls_006"><span className="cls_006">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '79.32px', top: '556.92px'}} className="cls_006"><span className="cls_006">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '293.22px', top: '556.92px'}} className="cls_006"><span className="cls_006">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '433.92px', top: '556.92px'}} className="cls_006"><span className="cls_006">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '515.94px', top: '556.92px'}} className="cls_006"><span className="cls_006">ML / MDL</span></div>
          <div style={{position: 'absolute', left: '198.84px', top: '563.16px'}} className="cls_006"><span className="cls_006">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '442.14px', top: '566.16px'}} className="cls_006"><span className="cls_006">METHOD</span></div>
          <div style={{position: 'absolute', left: '186.90px', top: '582.12px'}} className="cls_006"><span className="cls_006">Conc.</span></div>
          <div style={{position: 'absolute', left: '239.88px', top: '582.12px'}} className="cls_006"><span className="cls_006">Units</span></div>
          <div style={{position: 'absolute', left: '293.34px', top: '582.12px'}} className="cls_006"><span className="cls_006">Conc.</span></div>
          <div style={{position: 'absolute', left: '348.06px', top: '582.12px'}} className="cls_006"><span className="cls_006">Units</span></div>
          <div style={{position: 'absolute', left: '384.78px', top: '582.12px'}} className="cls_006"><span className="cls_006">Number of</span></div>
          <div style={{position: 'absolute', left: '388.32px', top: '591.30px'}} className="cls_006"><span className="cls_006">Samples</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '613.26px'}} className="cls_006"><span className="cls_006">CONVENTIONAL AND NONCONVENTIONAL COMPOUNDS.</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '629.28px'}} className="cls_017"><span className="cls_017">BIOCHEMICAL OXYGEN   BOD-5</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '645.18px'}} className="cls_017"><span className="cls_017">DEMAND (Report one)</span></div>
          <div style={{position: 'absolute', left: '133.19px', top: '645.12px'}} className="cls_017"><span className="cls_017">CBOD-5</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '661.14px'}} className="cls_017"><span className="cls_017">FECAL COLIFORM</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '677.04px'}} className="cls_017"><span className="cls_017">TOTAL SUSPENDED SOLIDS (TSS)</span></div>
          <div style={{position: 'absolute', left: '257.82px', top: '692.76px'}} className="cls_013"><span className="cls_013">END OF PART A.</span></div>
          <div style={{position: 'absolute', left: '42.78px', top: '706.56px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '230.10px', top: '720.36px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 6 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 5614, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background08.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '45.90px', top: '36.96px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '37.08px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '45.12px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '73.62px'}} className="cls_013"><span className="cls_013">BASIC APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '45.00px', top: '101.28px'}} className="cls_008"><span className="cls_008">PART B.      ADDITIONAL APPLICATION INFORMATION FOR APPLICANTS WITH A DESIGN FLOW GREATER THAN OR</span></div>
          <div style={{position: 'absolute', left: '94.50px', top: '111.60px'}} className="cls_008"><span className="cls_008">EQUAL TO 0.1 MGD (100,000 gallons per day).</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '128.82px'}} className="cls_005"><span className="cls_005">All applicants with a design flow rate &gt; 0.1 mgd must answer questions B.1 through B.6.  All others go to Part C (Certification).</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '147.78px'}} className="cls_006"><span className="cls_006">B.1.   Inflow and Infiltration.</span><span className="cls_005">  Estimate the average number of gallons per day that flow into the treatment works from inflow and/or infiltration.</span></div>
          <div style={{position: 'absolute', left: '68.17px', top: '162.96px'}} className="cls_005"><span className="cls_005">___________________gpd</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '181.32px'}} className="cls_005"><span className="cls_005">Briefly explain any steps underway or planned to minimize inflow and infiltration.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '196.56px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '208.74px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '236.16px'}} className="cls_006"><span className="cls_006">B.2.   Topographic Map.</span><span className="cls_005">  Attach to this application a topographic map of the area extending at least one mile beyond facility property boundaries.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '245.34px'}} className="cls_005"><span className="cls_005">This map must show the outline of the facility and the following information.  (You may submit more than one map if one map does not show</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '254.51px'}} className="cls_005"><span className="cls_005">the entire area.)</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '269.76px'}} className="cls_005"><span className="cls_005">a.   The area surrounding the treatment plant, including all unit processes.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '284.94px'}} className="cls_005"><span className="cls_005">b.   The major pipes or other structures through which wastewater enters the treatment works and the pipes or other structures through which</span></div>
          <div style={{position: 'absolute', left: '81.90px', top: '294.12px'}} className="cls_005"><span className="cls_005">treated wastewater is discharged from the treatment plant.  Include outfalls from bypass piping, if applicable.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '309.36px'}} className="cls_005"><span className="cls_005">c.   Each well where wastewater from the treatment plant is injected underground.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '324.54px'}} className="cls_005"><span className="cls_005">d.   Wells, springs, other surface water bodies, and drinking water wells that are: 1) within 1/4 mile of the property boundaries of the treatment</span></div>
          <div style={{position: 'absolute', left: '81.90px', top: '333.72px'}} className="cls_005"><span className="cls_005">works, and 2) listed in public record or otherwise known to the applicant.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '348.96px'}} className="cls_005"><span className="cls_005">e.   Any areas where the sewage sludge produced by the treatment works is stored, treated, or disposed.</span></div>
          <div style={{position: 'absolute', left: '67.50px', top: '364.14px'}} className="cls_005"><span className="cls_005">f.</span></div>
          <div style={{position: 'absolute', left: '81.91px', top: '364.14px'}} className="cls_005"><span className="cls_005">If the treatment works receives waste that is classified as hazardous under the Resource Conservation and Recovery Act (RCRA) by</span></div>
          <div style={{position: 'absolute', left: '81.90px', top: '373.32px'}} className="cls_005"><span className="cls_005">truck, rail, or special pipe, show on the map where that hazardous waste enters the treatment works and where it is treated, stored, and/or</span></div>
          <div style={{position: 'absolute', left: '81.90px', top: '382.49px'}} className="cls_005"><span className="cls_005">disposed.</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '406.92px'}} className="cls_006"><span className="cls_006">B.3. Process Flow Diagram or Schematic.</span><span className="cls_005">  Provide a diagram showing the processes of the treatment plant, including all bypass piping and all</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '416.10px'}} className="cls_005"><span className="cls_005">backup power sources or redundancy in the system.  Also provide a water balance showing all treatment units, including disinfection (e.g,</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '425.34px'}} className="cls_005"><span className="cls_005">chlorination and dechlorination).  The water balance must show daily average flow rates at influent and discharge points and approximate daily</span></div>
          <div style={{position: 'absolute', left: '63.89px', top: '434.51px'}} className="cls_005"><span className="cls_005">flow rates between treatment units.  Include a brief narrative description of the diagram.</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '458.94px'}} className="cls_006"><span className="cls_006">B.4. Operation/Maintenance Performed by Contractor(s).</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '474.12px'}} className="cls_005"><span className="cls_005">Are any operational or maintenance aspects (related to wastewater treatment and effluent quality) of the treatment works the responsibility of a</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '483.30px'}} className="cls_005"><span className="cls_005">contractor?</span></div>
          <div style={{position: 'absolute', left: '117.91px', top: '483.30px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '498.54px'}} className="cls_005"><span className="cls_005">If yes, list the name, address, telephone number, and status of each contractor and describe the contractor's responsibilities (attach additional</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '507.72px'}} className="cls_005"><span className="cls_005">pages if necessary).</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '526.14px'}} className="cls_005"><span className="cls_005">Name:</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '545.28px'}} className="cls_005"><span className="cls_005">Mailing Address:</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '580.74px'}} className="cls_005"><span className="cls_005">Telephone Number:</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '599.94px'}} className="cls_005"><span className="cls_005">Responsibilities of Contractor:</span></div>
          <div style={{position: 'absolute', left: '45.90px', top: '625.08px'}} className="cls_006"><span className="cls_006">B.5. Scheduled Improvements and Schedules of  Implementation.</span><span className="cls_005">  Provide information on any uncompleted implementation schedule or</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '634.26px'}} className="cls_005"><span className="cls_005">uncompleted plans for improvements that will affect the wastewater treatment, effluent quality, or design capacity of the treatment works.  If the</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '643.43px'}} className="cls_005"><span className="cls_005">treatment works has several different implementation schedules or is planning several improvements, submit separate responses to question</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '652.67px'}} className="cls_005"><span className="cls_005">B.5 for each.  (If none, go to question B.6.)</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '667.86px'}} className="cls_005"><span className="cls_005">a.    List the outfall number (assigned in question A.9) for each outfall that is covered by this implementation schedule.</span></div>
          <div style={{position: 'absolute', left: '81.67px', top: '683.04px'}} className="cls_005"><span className="cls_005">__________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.90px', top: '697.68px'}} className="cls_005"><span className="cls_005">b.    Indicate whether the planned improvements or implementation schedule are required by local, State, or Federal agencies.</span></div>
          <div style={{position: 'absolute', left: '81.90px', top: '712.92px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 7 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 6416, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background09.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '59.40px', top: '76.20px'}} className="cls_005"><span className="cls_005">c</span></div>
          <div style={{position: 'absolute', left: '77.38px', top: '76.20px'}} className="cls_005"><span className="cls_005">If the answer to B.5.b is “Yes,” briefly describe, including new maximum daily inflow rate (if applicable).</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '91.32px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '58.50px', top: '115.74px'}} className="cls_005"><span className="cls_005">d.    Provide dates imposed by any compliance schedule or any actual dates of completion for the implementation steps listed below, as</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '124.92px'}} className="cls_005"><span className="cls_005">applicable.  For improvements planned independently of local, State, or Federal agencies, indicate planned or actual completion dates, as</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '134.16px'}} className="cls_005"><span className="cls_005">applicable.  Indicate dates as accurately as possible.</span></div>
          <div style={{position: 'absolute', left: '221.41px', top: '149.34px'}} className="cls_005"><span className="cls_005">Schedule</span></div>
          <div style={{position: 'absolute', left: '311.18px', top: '149.34px'}} className="cls_005"><span className="cls_005">Actual Completion</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '164.52px'}} className="cls_005"><span className="cls_005">Implementation Stage</span></div>
          <div style={{position: 'absolute', left: '221.38px', top: '164.52px'}} className="cls_005"><span className="cls_005">MM / DD / YYYY</span></div>
          <div style={{position: 'absolute', left: '309.81px', top: '164.52px'}} className="cls_005"><span className="cls_005">MM / DD / YYYY</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '179.76px'}} className="cls_005"><span className="cls_005">– Begin construction</span></div>
          <div style={{position: 'absolute', left: '221.30px', top: '179.76px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '311.32px', top: '179.76px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '194.94px'}} className="cls_005"><span className="cls_005">– End construction</span></div>
          <div style={{position: 'absolute', left: '221.32px', top: '194.94px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '311.32px', top: '194.94px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '210.12px'}} className="cls_005"><span className="cls_005">– Begin discharge</span></div>
          <div style={{position: 'absolute', left: '221.31px', top: '210.12px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '311.32px', top: '210.12px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '225.36px'}} className="cls_005"><span className="cls_005">– Attain operational level</span></div>
          <div style={{position: 'absolute', left: '221.31px', top: '225.36px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '311.31px', top: '225.36px'}} className="cls_005"><span className="cls_005">___/ ___/ _____</span></div>
          <div style={{position: 'absolute', left: '59.40px', top: '249.72px'}} className="cls_005"><span className="cls_005">e.    Have appropriate permits/clearances concerning other Federal/State requirements been obtained?</span></div>
          <div style={{position: 'absolute', left: '441.97px', top: '249.72px'}} className="cls_005"><span className="cls_005">____Yes</span></div>
          <div style={{position: 'absolute', left: '491.39px', top: '249.72px'}} className="cls_005"><span className="cls_005">____No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '264.96px'}} className="cls_005"><span className="cls_005">Describe briefly:</span></div>
          <div style={{position: 'absolute', left: '141.35px', top: '264.96px'}} className="cls_005"><span className="cls_005">________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '142.54px', top: '276.14px'}} className="cls_005"><span className="cls_005">________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '305.34px'}} className="cls_006"><span className="cls_006">B.6. EFFLUENT TESTING DATA (GREATER THAN O.1 MGD ONLY).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '320.46px'}} className="cls_005"><span className="cls_005">Applicants that discharge to waters of the US must provide effluent testing data for the following parameters.  Provide the indicated effluent</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '329.70px'}} className="cls_005"><span className="cls_005">testing required by the permitting authority </span><span className="cls_025">for each outfall through which effluent is discharged.</span><span className="cls_005">  Do not include information on combined sewer</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '338.88px'}} className="cls_005"><span className="cls_005">overflows in this section.  All information reported must be based on data collected through analysis conducted using 40 CFR Part 136</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '348.05px'}} className="cls_005"><span className="cls_005">methods.  In addition, this data must comply with QA/QC requirements of 40 CFR Part 136 and other appropriate QA/QC requirements for</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '357.29px'}} className="cls_005"><span className="cls_005">standard methods for analytes not addressed by 40 CFR Part 136.  At a minimum, effluent testing data must be based on at least three</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '366.47px'}} className="cls_005"><span className="cls_005">pollutant scans and must be no more than four and one-half years old.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '381.66px'}} className="cls_005"><span className="cls_005">Outfall Number:________________</span></div>
          <div style={{position: 'absolute', left: '67.02px', top: '397.68px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '171.00px', top: '397.68px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '287.40px', top: '397.68px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '179.22px', top: '406.86px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '163.32px', top: '416.82px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '222.66px', top: '416.82px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '279.84px', top: '416.82px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '339.66px', top: '416.82px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '384.12px', top: '416.82px'}} className="cls_005"><span className="cls_005">Number of</span></div>
          <div style={{position: 'absolute', left: '441.36px', top: '416.82px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '522.72px', top: '416.82px'}} className="cls_005"><span className="cls_005">ML / MDL</span></div>
          <div style={{position: 'absolute', left: '387.18px', top: '426.00px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '448.44px', top: '426.00px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '443.34px'}} className="cls_006"><span className="cls_006">CONVENTIONAL AND NONCONVENTIONAL COMPOUNDS.</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '460.02px'}} className="cls_005"><span className="cls_005">AMMONIA (as N)</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '476.64px'}} className="cls_005"><span className="cls_005">CHLORINE (TOTAL</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '485.88px'}} className="cls_005"><span className="cls_005">RESIDUAL, TRC)</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '503.22px'}} className="cls_005"><span className="cls_005">DISSOLVED OXYGEN</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '519.84px'}} className="cls_005"><span className="cls_005">TOTAL KJELDAHL</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '529.08px'}} className="cls_005"><span className="cls_005">NITROGEN (TKN)</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '538.98px'}} className="cls_005"><span className="cls_005">NITRATE PLUS NITRITE</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '548.22px'}} className="cls_005"><span className="cls_005">NITROGEN</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '558.18px'}} className="cls_005"><span className="cls_005">OIL and GREASE</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '574.80px'}} className="cls_005"><span className="cls_005">PHOSPHORUS (Total)</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '591.48px'}} className="cls_005"><span className="cls_005">TOTAL DISSOLVED</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '600.66px'}} className="cls_005"><span className="cls_005">SOLIDS (TDS)</span></div>
          <div style={{position: 'absolute', left: '38.70px', top: '618.00px'}} className="cls_005"><span className="cls_005">OTHER</span></div>
          <div style={{position: 'absolute', left: '257.70px', top: '640.74px'}} className="cls_013"><span className="cls_013">END OF PART B.</span></div>
          <div style={{position: 'absolute', left: '42.66px', top: '654.54px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '230.04px', top: '668.34px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 8 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 7218, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background10.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '36.96px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '37.08px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '45.12px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '67.62px'}} className="cls_013"><span className="cls_013">BASIC APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '92.28px'}} className="cls_008"><span className="cls_008">PART C. CERTIFICATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '109.50px'}} className="cls_005"><span className="cls_005">All applicants must complete the Certification Section.  Refer to instructions to determine who is an officer for the purposes of this certification.  All</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '118.68px'}} className="cls_005"><span className="cls_005">applicants must complete all applicable sections of Form 2A, as explained in the Application Overview.  Indicate below which parts of Form 2A you</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '127.86px'}} className="cls_005"><span className="cls_005">have completed and are submitting.  By signing this certification statement, applicants confirm that they have reviewed Form 2A and have completed</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '137.10px'}} className="cls_005"><span className="cls_005">all sections that apply to the facility for which this application is submitted.</span></div>
          <div style={{position: 'absolute', left: '41.46px', top: '153.00px'}} className="cls_006"><span className="cls_006">Indicate which parts of Form 2A you have completed and are submitting:</span></div>
          <div style={{position: 'absolute', left: '59.40px', top: '168.18px'}} className="cls_005"><span className="cls_005">_____  Basic Application Information packet</span></div>
          <div style={{position: 'absolute', left: '239.40px', top: '168.18px'}} className="cls_005"><span className="cls_005">Supplemental Application Information packet:</span></div>
          <div style={{position: 'absolute', left: '239.16px', top: '183.36px'}} className="cls_005"><span className="cls_005">______  Part D (Expanded Effluent Testing Data)</span></div>
          <div style={{position: 'absolute', left: '239.16px', top: '198.60px'}} className="cls_005"><span className="cls_005">______  Part E (Toxicity Testing:  Biomonitoring Data)</span></div>
          <div style={{position: 'absolute', left: '239.16px', top: '213.78px'}} className="cls_005"><span className="cls_005">______  Part F (Industrial User Discharges and RCRA/CERCLA Wastes)</span></div>
          <div style={{position: 'absolute', left: '239.16px', top: '228.96px'}} className="cls_005"><span className="cls_005">______  Part G (Combined Sewer Systems)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '254.16px'}} className="cls_006"><span className="cls_006">ALL APPLICANTS MUST COMPLETE THE FOLLOWING CERTIFICATION.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '270.12px'}} className="cls_005"><span className="cls_005">I certify under penalty of law that this document and all attachments were prepared under my direction or supervision in accordance with a system</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '279.30px'}} className="cls_005"><span className="cls_005">designed to assure that qualified personnel properly gather and evaluate the information submitted.  Based on my inquiry of the person or persons</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '288.54px'}} className="cls_005"><span className="cls_005">who manage the system or those persons directly responsible for gathering the information, the information is, to the best of my knowledge and</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '297.71px'}} className="cls_005"><span className="cls_005">belief, true, accurate, and complete.  I am aware that there are significant penalties for submitting false information, including the possibility of fine</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '306.89px'}} className="cls_005"><span className="cls_005">and imprisonment for knowing violations.</span></div>
          <div style={{position: 'absolute', left: '41.46px', top: '331.26px'}} className="cls_005"><span className="cls_005">Name and official title</span></div>
          <div style={{position: 'absolute', left: '131.25px', top: '331.26px'}} className="cls_005"><span className="cls_005">_____________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.46px', top: '352.50px'}} className="cls_005"><span className="cls_005">Signature</span></div>
          <div style={{position: 'absolute', left: '131.37px', top: '352.50px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.46px', top: '373.68px'}} className="cls_005"><span className="cls_005">Telephone number</span></div>
          <div style={{position: 'absolute', left: '133.37px', top: '373.68px'}} className="cls_005"><span className="cls_005">_____________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.46px', top: '394.86px'}} className="cls_005"><span className="cls_005">Date signed</span></div>
          <div style={{position: 'absolute', left: '133.58px', top: '394.86px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '419.28px'}} className="cls_005"><span className="cls_005">Upon request of the permitting authority, you must submit any other information necessary to assess wastewater treatment practices at the treatment</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '428.46px'}} className="cls_005"><span className="cls_005">works or identify appropriate permitting requirements.</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '466.44px'}} className="cls_018"><span className="cls_018">SEND COMPLETED FORMS TO:</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '530.58px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 9 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 8020, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background11.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '36.96px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '37.08px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '45.12px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '73.62px'}} className="cls_013"><span className="cls_013">SUPPLEMENTAL APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '104.28px'}} className="cls_008"><span className="cls_008">PART D.  EXPANDED EFFLUENT TESTING DATA</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '121.50px'}} className="cls_006"><span className="cls_006">Refer to the directions on the cover page to determine whether this section applies to the treatment works.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '137.40px'}} className="cls_006"><span className="cls_006">Effluent Testing:  1.0 mgd and Pretreatment Treatment Works.</span><span className="cls_005">  If the treatment works has a design flow greater than or equal to 1.0 mgd or it has</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '146.64px'}} className="cls_005"><span className="cls_005">(or is required to have) a pretreatment program, or is otherwise required by the permitting authority to provide the data, then provide effluent testing</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '155.82px'}} className="cls_005"><span className="cls_005">data for the following pollutants.  Provide the indicated effluent testing information and any other information required by the permitting authority </span><span className="cls_025">for</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '165.00px'}} className="cls_025"><span className="cls_025">each outfall through which effluent is discharged</span><span className="cls_005">.  Do not include information on combined sewer overflows in this section.  All information reported</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '174.24px'}} className="cls_005"><span className="cls_005">must be based on data collected through analyses conducted using 40 CFR Part 136 methods.  In addition, these data must comply with QA/QC</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '183.42px'}} className="cls_005"><span className="cls_005">requirements of 40 CFR Part 136 and other appropriate QA/QC requirements for standard methods for analytes not addressed by 40 CFR Part 136.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '192.59px'}} className="cls_005"><span className="cls_005">Indicate in the blank rows provided below any data you may have on pollutants not specifically listed in this form.  At a minimum, effluent testing data</span></div>
          <div style={{position: 'absolute', left: '41.39px', top: '201.84px'}} className="cls_005"><span className="cls_005">must be based on at least three pollutant scans and must be no more than four and one-half years old.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '223.20px'}} className="cls_005"><span className="cls_005">Outfall number: _________________ (Complete once for each outfall discharging effluent to waters of the United States.)</span></div>
          <div style={{position: 'absolute', left: '75.48px', top: '236.16px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '188.52px', top: '236.16px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '301.08px', top: '236.16px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '196.74px', top: '245.34px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '166.92px', top: '255.30px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '196.86px', top: '255.30px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '224.76px', top: '255.30px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '255.18px', top: '255.30px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '284.16px', top: '255.30px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '314.70px', top: '255.30px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '342.84px', top: '255.30px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '371.52px', top: '255.30px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '401.28px', top: '255.30px'}} className="cls_005"><span className="cls_005">Number</span></div>
          <div style={{position: 'absolute', left: '447.54px', top: '255.30px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '525.48px', top: '255.30px'}} className="cls_005"><span className="cls_005">ML/ MDL</span></div>
          <div style={{position: 'absolute', left: '412.14px', top: '264.54px'}} className="cls_005"><span className="cls_005">of</span></div>
          <div style={{position: 'absolute', left: '454.62px', top: '264.54px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '399.90px', top: '273.72px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '283.74px'}} className="cls_019"><span className="cls_019">METALS (TOTAL RECOVERABLE), CYANIDE, PHENOLS, AND HARDNESS.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '306.90px'}} className="cls_015"><span className="cls_015">ANTIMONY</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '332.28px'}} className="cls_015"><span className="cls_015">ARSENIC</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '357.60px'}} className="cls_015"><span className="cls_015">BERYLLIUM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '382.98px'}} className="cls_015"><span className="cls_015">CADMIUM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '408.30px'}} className="cls_015"><span className="cls_015">CHROMIUM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '433.68px'}} className="cls_015"><span className="cls_015">COPPER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '459.00px'}} className="cls_015"><span className="cls_015">LEAD</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '484.38px'}} className="cls_015"><span className="cls_015">MERCURY</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '509.70px'}} className="cls_015"><span className="cls_015">NICKEL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '535.08px'}} className="cls_015"><span className="cls_015">SELENIUM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '560.40px'}} className="cls_015"><span className="cls_015">SILVER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '585.78px'}} className="cls_015"><span className="cls_015">THALLIUM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '611.10px'}} className="cls_015"><span className="cls_015">ZINC</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '636.48px'}} className="cls_015"><span className="cls_015">CYANIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '661.80px'}} className="cls_015"><span className="cls_015">TOTAL PHENOLIC COMPOUNDS</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '686.70px'}} className="cls_015"><span className="cls_015">HARDNESS (AS CaCO</span></div>
          <div style={{position: 'absolute', left: '113.52px', top: '686.70px'}} className="cls_015"><span className="cls_015">3)</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '703.56px'}} className="cls_015"><span className="cls_015">Use this space (or a separate sheet) to provide information on other metals requested by the permit writer.</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 10 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 8822, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background12.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '61.68px'}} className="cls_005"><span className="cls_005">Outfall number: _______________ (Complete once for each outfall discharging effluent to waters of the United States.)</span></div>
          <div style={{position: 'absolute', left: '75.48px', top: '74.64px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '188.52px', top: '74.64px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '301.08px', top: '74.64px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '196.74px', top: '83.82px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '166.92px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '196.86px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '224.76px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '255.18px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '284.16px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '314.70px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '342.84px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '371.52px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '401.28px', top: '93.78px'}} className="cls_005"><span className="cls_005">Number</span></div>
          <div style={{position: 'absolute', left: '447.54px', top: '93.78px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '525.48px', top: '93.78px'}} className="cls_005"><span className="cls_005">ML/ MDL</span></div>
          <div style={{position: 'absolute', left: '412.14px', top: '102.96px'}} className="cls_005"><span className="cls_005">of</span></div>
          <div style={{position: 'absolute', left: '454.62px', top: '102.96px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '399.90px', top: '112.20px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '122.16px'}} className="cls_019"><span className="cls_019">VOLATILE ORGANIC COMPOUNDS.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '145.38px'}} className="cls_015"><span className="cls_015">ACROLEIN</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '170.76px'}} className="cls_015"><span className="cls_015">ACRYLONITRILE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '196.08px'}} className="cls_015"><span className="cls_015">BENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '221.46px'}} className="cls_015"><span className="cls_015">BROMOFORM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '246.78px'}} className="cls_015"><span className="cls_015">CARBON TETRACHLORIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '272.16px'}} className="cls_015"><span className="cls_015">CLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '297.48px'}} className="cls_015"><span className="cls_015">CHLORODIBROMO-METHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '322.86px'}} className="cls_015"><span className="cls_015">CHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '348.18px'}} className="cls_015"><span className="cls_015">2-CHLORO-ETHYLVINYL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '356.22px'}} className="cls_015"><span className="cls_015">ETHER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '373.56px'}} className="cls_015"><span className="cls_015">CHLOROFORM</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '398.88px'}} className="cls_015"><span className="cls_015">DICHLOROBROMO-METHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '424.26px'}} className="cls_015"><span className="cls_015">1,1-DICHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '449.58px'}} className="cls_015"><span className="cls_015">1,2-DICHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '474.96px'}} className="cls_015"><span className="cls_015">TRANS-1,2-DICHLORO-ETHYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '500.28px'}} className="cls_015"><span className="cls_015">1,1-DICHLOROETHYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '525.66px'}} className="cls_015"><span className="cls_015">1,2-DICHLOROPROPANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '550.98px'}} className="cls_015"><span className="cls_015">1,3-DICHLORO-PROPYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '576.36px'}} className="cls_015"><span className="cls_015">ETHYLBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '601.68px'}} className="cls_015"><span className="cls_015">METHYL BROMIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '627.06px'}} className="cls_015"><span className="cls_015">METHYL CHLORIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '652.38px'}} className="cls_015"><span className="cls_015">METHYLENE CHLORIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '677.76px'}} className="cls_015"><span className="cls_015">1,1,2,2-TETRACHLORO-ETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '703.08px'}} className="cls_015"><span className="cls_015">TETRACHLORO-ETHYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '728.46px'}} className="cls_015"><span className="cls_015">TOLUENE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 11 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 9624, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background13.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '61.68px'}} className="cls_005"><span className="cls_005">Outfall number: _______________ (Complete once for each outfall discharging effluent to waters of the United States.)</span></div>
          <div style={{position: 'absolute', left: '75.48px', top: '74.64px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '188.52px', top: '74.64px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '301.08px', top: '74.64px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '196.74px', top: '83.82px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '166.92px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '196.86px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '224.76px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '255.18px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '284.16px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '314.70px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '342.84px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '371.52px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '401.28px', top: '93.78px'}} className="cls_005"><span className="cls_005">Number</span></div>
          <div style={{position: 'absolute', left: '447.54px', top: '93.78px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '525.48px', top: '93.78px'}} className="cls_005"><span className="cls_005">ML/ MDL</span></div>
          <div style={{position: 'absolute', left: '412.14px', top: '102.96px'}} className="cls_005"><span className="cls_005">of</span></div>
          <div style={{position: 'absolute', left: '454.62px', top: '102.96px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '399.90px', top: '112.20px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '130.26px'}} className="cls_015"><span className="cls_015">1,1,1-TRICHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '155.58px'}} className="cls_015"><span className="cls_015">1,1,2-TRICHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '180.96px'}} className="cls_015"><span className="cls_015">TRICHLORETHYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '206.28px'}} className="cls_015"><span className="cls_015">VINYL CHLORIDE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '223.56px'}} className="cls_015"><span className="cls_015">Use this space (or a separate sheet) to provide information on other volatile organic compounds requested by the permit writer.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '259.56px'}} className="cls_019"><span className="cls_019">ACID-EXTRACTABLE COMPOUNDS</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '282.78px'}} className="cls_015"><span className="cls_015">P-CHLORO-M-CRESOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '308.16px'}} className="cls_015"><span className="cls_015">2-CHLOROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '333.48px'}} className="cls_015"><span className="cls_015">2,4-DICHLOROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '358.86px'}} className="cls_015"><span className="cls_015">2,4-DIMETHYLPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '384.18px'}} className="cls_015"><span className="cls_015">4,6-DINITRO-O-CRESOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '409.56px'}} className="cls_015"><span className="cls_015">2,4-DINITROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '434.88px'}} className="cls_015"><span className="cls_015">2-NITROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '460.26px'}} className="cls_015"><span className="cls_015">4-NITROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '485.58px'}} className="cls_015"><span className="cls_015">PENTACHLOROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '510.96px'}} className="cls_015"><span className="cls_015">PHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '536.28px'}} className="cls_015"><span className="cls_015">2,4,6-TRICHLOROPHENOL</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '553.56px'}} className="cls_015"><span className="cls_015">Use this space (or a separate sheet) to provide information on other acid-extractable compounds requested by the permit writer.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '589.56px'}} className="cls_019"><span className="cls_019">BASE-NEUTRAL COMPOUNDS.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '612.78px'}} className="cls_015"><span className="cls_015">ACENAPHTHENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '638.16px'}} className="cls_015"><span className="cls_015">ACENAPHTHYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '663.48px'}} className="cls_015"><span className="cls_015">ANTHRACENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '688.86px'}} className="cls_015"><span className="cls_015">BENZIDINE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '714.18px'}} className="cls_015"><span className="cls_015">BENZO(A)ANTHRACENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '739.56px'}} className="cls_015"><span className="cls_015">BENZO(A)PYRENE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 12 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 10426, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background14.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '61.68px'}} className="cls_005"><span className="cls_005">Outfall number: _______________ (Complete once for each outfall discharging effluent to waters of the United States.)</span></div>
          <div style={{position: 'absolute', left: '75.48px', top: '74.64px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '188.52px', top: '74.64px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '301.08px', top: '74.64px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '196.74px', top: '83.82px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '166.92px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '196.86px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '224.76px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '255.18px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '284.16px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '314.70px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '342.84px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '371.52px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '401.28px', top: '93.78px'}} className="cls_005"><span className="cls_005">Number</span></div>
          <div style={{position: 'absolute', left: '447.54px', top: '93.78px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '525.48px', top: '93.78px'}} className="cls_005"><span className="cls_005">ML/ MDL</span></div>
          <div style={{position: 'absolute', left: '412.14px', top: '102.96px'}} className="cls_005"><span className="cls_005">of</span></div>
          <div style={{position: 'absolute', left: '454.62px', top: '102.96px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '399.90px', top: '112.20px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '130.26px'}} className="cls_015"><span className="cls_015">3,4 BENZO-FLUORANTHENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '155.58px'}} className="cls_015"><span className="cls_015">BENZO(GHI)PERYLENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '180.96px'}} className="cls_015"><span className="cls_015">BENZO(K)FLUORANTHENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '206.28px'}} className="cls_015"><span className="cls_015">BIS (2-CHLOROETHOXY)</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '214.32px'}} className="cls_015"><span className="cls_015">METHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '239.16px'}} className="cls_015"><span className="cls_015">BIS (2-CHLOROETHYL)-ETHER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '264.48px'}} className="cls_015"><span className="cls_015">BIS (2-CHLOROISO-PROPYL)</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '272.52px'}} className="cls_015"><span className="cls_015">ETHER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '295.08px'}} className="cls_015"><span className="cls_015">BIS (2-ETHYLHEXYL) PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '320.46px'}} className="cls_015"><span className="cls_015">4-BROMOPHENYL PHENYL  ETHER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '351.78px'}} className="cls_015"><span className="cls_015">BUTYL BENZYL PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '377.16px'}} className="cls_015"><span className="cls_015">2-CHLORONAPHTHALENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '402.48px'}} className="cls_015"><span className="cls_015">4-CHLORPHENYL PHENYL ETHER</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '427.86px'}} className="cls_015"><span className="cls_015">CHRYSENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '453.18px'}} className="cls_015"><span className="cls_015">DI-N-BUTYL PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '478.56px'}} className="cls_015"><span className="cls_015">DI-N-OCTYL PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '503.88px'}} className="cls_015"><span className="cls_015">DIBENZO(A,H) ANTHRACENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '529.26px'}} className="cls_015"><span className="cls_015">1,2-DICHLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '554.58px'}} className="cls_015"><span className="cls_015">1,3-DICHLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '579.96px'}} className="cls_015"><span className="cls_015">1,4-DICHLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '605.28px'}} className="cls_015"><span className="cls_015">3,3-DICHLOROBENZIDINE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '630.66px'}} className="cls_015"><span className="cls_015">DIETHYL PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '655.98px'}} className="cls_015"><span className="cls_015">DIMETHYL PHTHALATE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '681.36px'}} className="cls_015"><span className="cls_015">2,4-DINITROTOLUENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '706.68px'}} className="cls_015"><span className="cls_015">2,6-DINITROTOLUENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '732.06px'}} className="cls_015"><span className="cls_015">1,2-DIPHENYLHYDRAZINE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 13 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 11228, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background15.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '61.68px'}} className="cls_005"><span className="cls_005">Outfall number: _______________ (Complete once for each outfall discharging effluent to waters of the United States.)</span></div>
          <div style={{position: 'absolute', left: '75.48px', top: '74.64px'}} className="cls_005"><span className="cls_005">POLLUTANT</span></div>
          <div style={{position: 'absolute', left: '188.52px', top: '74.64px'}} className="cls_005"><span className="cls_005">MAXIMUM DAILY</span></div>
          <div style={{position: 'absolute', left: '301.08px', top: '74.64px'}} className="cls_005"><span className="cls_005">AVERAGE DAILY DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '196.74px', top: '83.82px'}} className="cls_005"><span className="cls_005">DISCHARGE</span></div>
          <div style={{position: 'absolute', left: '166.92px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '196.86px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '224.76px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '255.18px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '284.16px', top: '93.78px'}} className="cls_005"><span className="cls_005">Conc.</span></div>
          <div style={{position: 'absolute', left: '314.70px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '342.84px', top: '93.78px'}} className="cls_005"><span className="cls_005">Mass</span></div>
          <div style={{position: 'absolute', left: '371.52px', top: '93.78px'}} className="cls_005"><span className="cls_005">Units</span></div>
          <div style={{position: 'absolute', left: '401.28px', top: '93.78px'}} className="cls_005"><span className="cls_005">Number</span></div>
          <div style={{position: 'absolute', left: '447.54px', top: '93.78px'}} className="cls_005"><span className="cls_005">ANALYTICAL</span></div>
          <div style={{position: 'absolute', left: '525.48px', top: '93.78px'}} className="cls_005"><span className="cls_005">ML/ MDL</span></div>
          <div style={{position: 'absolute', left: '412.14px', top: '102.96px'}} className="cls_005"><span className="cls_005">of</span></div>
          <div style={{position: 'absolute', left: '454.62px', top: '102.96px'}} className="cls_005"><span className="cls_005">METHOD</span></div>
          <div style={{position: 'absolute', left: '399.90px', top: '112.20px'}} className="cls_005"><span className="cls_005">Samples</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '130.26px'}} className="cls_015"><span className="cls_015">FLUORANTHENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '155.58px'}} className="cls_015"><span className="cls_015">FLUORENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '180.96px'}} className="cls_015"><span className="cls_015">HEXACHLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '206.28px'}} className="cls_015"><span className="cls_015">HEXACHLOROBUTADIENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '231.66px'}} className="cls_015"><span className="cls_015">HEXACHLOROCYCLO-</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '239.70px'}} className="cls_015"><span className="cls_015">PENTADIENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '256.98px'}} className="cls_015"><span className="cls_015">HEXACHLOROETHANE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '282.36px'}} className="cls_015"><span className="cls_015">INDENO(1,2,3-CD)PYRENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '307.68px'}} className="cls_015"><span className="cls_015">ISOPHORONE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '333.06px'}} className="cls_015"><span className="cls_015">NAPHTHALENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '358.38px'}} className="cls_015"><span className="cls_015">NITROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '383.76px'}} className="cls_015"><span className="cls_015">N-NITROSODI-N-PROPYLAMINE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '409.08px'}} className="cls_015"><span className="cls_015">N-NITROSODI- METHYLAMINE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '434.46px'}} className="cls_015"><span className="cls_015">N-NITROSODI-PHENYLAMINE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '459.78px'}} className="cls_015"><span className="cls_015">PHENANTHRENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '485.16px'}} className="cls_015"><span className="cls_015">PYRENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '510.48px'}} className="cls_015"><span className="cls_015">1,2,4-TRICHLOROBENZENE</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '527.76px'}} className="cls_015"><span className="cls_015">Use this space (or a separate sheet) to provide information on other base-neutral compounds requested by the permit writer.</span></div>
          <div style={{position: 'absolute', left: '39.60px', top: '558.06px'}} className="cls_015"><span className="cls_015">Use this space (or a separate sheet) to provide information on other pollutants (e.g., pesticides) requested by the permit writer.</span></div>
          <div style={{position: 'absolute', left: '257.88px', top: '594.06px'}} className="cls_013"><span className="cls_013">END OF PART D.</span></div>
          <div style={{position: 'absolute', left: '42.84px', top: '607.86px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '230.22px', top: '621.66px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 14 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 12030, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background16.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '64.44px'}} className="cls_013"><span className="cls_013">SUPPLEMENTAL APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '96.12px'}} className="cls_011"><span className="cls_011">PART E.  TOXICITY TESTING DATA</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '114.48px'}} className="cls_005"><span className="cls_005">POTWs meeting one or more of the following criteria must provide the results of whole effluent toxicity tests for acute or chronic toxicity for each of</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '123.66px'}} className="cls_005"><span className="cls_005">the facility’s discharge points:</span></div>
          <div style={{position: 'absolute', left: '149.78px', top: '123.66px'}} className="cls_005"><span className="cls_005">1) POTWs with a design flow rate greater than or equal to 1.0 mgd;  2) POTWs with a pretreatment program (or those</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '132.90px'}} className="cls_005"><span className="cls_005">that are required to have one under 40 CFR Part 403); or 3) POTWs required by the permitting authority to submit data for these parameters.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '142.56px'}} className="cls_021"><span className="cls_021">•</span></div>
          <div style={{position: 'absolute', left: '81.01px', top: '142.56px'}} className="cls_005"><span className="cls_005">At a minimum, these results must include quarterly testing for a 12-month period within the past 1 year using multiple species (minimum of</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '151.80px'}} className="cls_005"><span className="cls_005">two species), or the results from four tests performed at least annually in the four and one-half years prior to the application, provided the</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '161.04px'}} className="cls_005"><span className="cls_005">results show no appreciable toxicity, and testing for acute and/or chronic toxicity, depending on the range of receiving water dilution.  Do</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '170.22px'}} className="cls_005"><span className="cls_005">not include information on combined sewer overflows in this section.  All information reported must be based on data collected through</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '179.40px'}} className="cls_005"><span className="cls_005">analysis conducted using 40 CFR Part 136 methods.  In addition, this data must comply with QA/QC requirements of 40 CFR Part 136</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '188.64px'}} className="cls_005"><span className="cls_005">and other appropriate QA/QC requirements for standard methods for analytes not addressed by 40 CFR Part 136.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '198.36px'}} className="cls_021"><span className="cls_021">•</span></div>
          <div style={{position: 'absolute', left: '81.01px', top: '198.36px'}} className="cls_005"><span className="cls_005">In addition, submit the results of any other whole effluent toxicity tests from the past four and one-half years.  If a whole effluent toxicity</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '207.60px'}} className="cls_005"><span className="cls_005">test conducted during the past four and one-half years revealed toxicity, provide any information on the cause of the toxicity or any results</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '216.78px'}} className="cls_005"><span className="cls_005">of a toxicity reduction evaluation, if one was conducted.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '226.50px'}} className="cls_021"><span className="cls_021">•</span></div>
          <div style={{position: 'absolute', left: '81.01px', top: '226.50px'}} className="cls_005"><span className="cls_005">If you have already submitted any of the information requested in Part E, you need not submit it again.  Rather, provide the information</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '235.74px'}} className="cls_005"><span className="cls_005">requested in question E.4 for previously submitted information.  If EPA methods were not used, report the reasons for using alternate</span></div>
          <div style={{position: 'absolute', left: '81.00px', top: '244.98px'}} className="cls_005"><span className="cls_005">methods.  If test summaries are available that contain all of the information requested below, they may be submitted in place of Part E.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '254.16px'}} className="cls_005"><span className="cls_005">If no biomonitoring data is required, do not complete Part E.  Refer to the Application Overview for directions on which other sections of the form to</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '263.34px'}} className="cls_005"><span className="cls_005">complete.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '279.36px'}} className="cls_006"><span className="cls_006">E.1. Required Tests.</span></div>
          <div style={{position: 'absolute', left: '59.41px', top: '303.72px'}} className="cls_005"><span className="cls_005">Indicate the number of whole effluent toxicity tests conducted in the past four and one-half years.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '318.90px'}} className="cls_005"><span className="cls_005">____chronic</span></div>
          <div style={{position: 'absolute', left: '149.39px', top: '318.90px'}} className="cls_005"><span className="cls_005">____acute</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '334.08px'}} className="cls_006"><span className="cls_006">E.2. Individual Test Data.</span><span className="cls_005">  Complete the following chart </span><span className="cls_025">for each whole effluent toxicity test conducted in the last four and one-half years.</span><span className="cls_005">  Allow one</span></div>
          <div style={{position: 'absolute', left: '59.40px', top: '343.32px'}} className="cls_005"><span className="cls_005">column per test (where each species constitutes a test).  Copy this page if more than three tests are being reported.</span></div>
          <div style={{position: 'absolute', left: '194.40px', top: '358.50px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '322.68px', top: '358.50px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '459.06px', top: '358.50px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '379.38px'}} className="cls_005"><span className="cls_005">a. Test information.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '400.26px'}} className="cls_005"><span className="cls_005">Test species &amp; test method number</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '421.08px'}} className="cls_005"><span className="cls_005">Age at initiation of test</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '441.96px'}} className="cls_005"><span className="cls_005">Outfall number</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '462.78px'}} className="cls_005"><span className="cls_005">Dates sample collected</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '483.66px'}} className="cls_005"><span className="cls_005">Date test started</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '504.48px'}} className="cls_005"><span className="cls_005">Duration</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '525.36px'}} className="cls_005"><span className="cls_005">b. Give toxicity test methods followed.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '546.18px'}} className="cls_005"><span className="cls_005">Manual title</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '567.06px'}} className="cls_005"><span className="cls_005">Edition number and year of publication</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '587.88px'}} className="cls_005"><span className="cls_005">Page number(s)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '608.76px'}} className="cls_005"><span className="cls_005">c. Give the sample collection method(s) used.  For multiple grab samples, indicate the number of grab samples used.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '629.58px'}} className="cls_005"><span className="cls_005">24-Hour composite</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '650.46px'}} className="cls_005"><span className="cls_005">Grab</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '671.28px'}} className="cls_005"><span className="cls_005">d. Indicate where the sample was taken in relation to disinfection. (Check all that apply for each)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '692.16px'}} className="cls_005"><span className="cls_005">Before disinfection</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '712.98px'}} className="cls_005"><span className="cls_005">After disinfection</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '733.86px'}} className="cls_005"><span className="cls_005">After dechlorination</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 15 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 12832, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background17.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '210.66px', top: '64.68px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '341.15px', top: '64.68px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '472.73px', top: '64.68px'}} className="cls_005"><span className="cls_005">Test number:________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '85.50px'}} className="cls_005"><span className="cls_005">e. Describe the point in the treatment process at which the sample was collected.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '106.38px'}} className="cls_005"><span className="cls_005">Sample was collected:</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '127.20px'}} className="cls_005"><span className="cls_005">f. For each test, include whether the test was intended to assess chronic toxicity, acute toxicity, or both.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '148.08px'}} className="cls_005"><span className="cls_005">Chronic toxicity</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '168.90px'}} className="cls_005"><span className="cls_005">Acute toxicity</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '189.78px'}} className="cls_005"><span className="cls_005">g. Provide the type of test performed.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '210.60px'}} className="cls_005"><span className="cls_005">Static</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '231.48px'}} className="cls_005"><span className="cls_005">Static-renewal</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '252.30px'}} className="cls_005"><span className="cls_005">Flow-through</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '273.18px'}} className="cls_005"><span className="cls_005">h. Source of dilution water.  If laboratory water, specify type; if receiving water, specify source.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '294.00px'}} className="cls_005"><span className="cls_005">Laboratory water</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '314.88px'}} className="cls_005"><span className="cls_005">Receiving water</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '335.70px'}} className="cls_005"><span className="cls_005">i. Type of dilution water.  It salt water, specify “natural” or type of artificial sea salts or brine used.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '356.58px'}} className="cls_005"><span className="cls_005">Fresh water</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '377.40px'}} className="cls_005"><span className="cls_005">Salt water</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '398.28px'}} className="cls_005"><span className="cls_005">j. Give the percentage effluent used for all concentrations in the test series.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '481.68px'}} className="cls_005"><span className="cls_005">k. Parameters measured during the test. (State whether parameter meets test method specifications)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '502.56px'}} className="cls_005"><span className="cls_005">pH</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '523.38px'}} className="cls_005"><span className="cls_005">Salinity</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '544.26px'}} className="cls_005"><span className="cls_005">Temperature</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '565.08px'}} className="cls_005"><span className="cls_005">Ammonia</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '585.96px'}} className="cls_005"><span className="cls_005">Dissolved oxygen</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '606.78px'}} className="cls_005"><span className="cls_005">l. Test Results.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '627.66px'}} className="cls_005"><span className="cls_005">Acute:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '648.48px'}} className="cls_005"><span className="cls_005">Percent survival in 100%</span></div>
          <div style={{position: 'absolute', left: '304.74px', top: '648.48px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '439.02px', top: '648.48px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.52px', top: '648.48px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '657.66px'}} className="cls_005"><span className="cls_005">effluent</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '680.28px'}} className="cls_005"><span className="cls_005">LC</span><span className="cls_016"><sub>50</sub></span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '702.90px'}} className="cls_005"><span className="cls_005">95% C.I.</span></div>
          <div style={{position: 'absolute', left: '304.70px', top: '702.90px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '439.00px', top: '702.90px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.51px', top: '702.90px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '723.72px'}} className="cls_005"><span className="cls_005">Control percent survival</span></div>
          <div style={{position: 'absolute', left: '304.63px', top: '723.72px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '438.93px', top: '723.72px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.45px', top: '723.72px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '744.60px'}} className="cls_005"><span className="cls_005">Other (describe)</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 16 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 13634, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background18.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '27.78px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '27.90px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '35.94px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '64.68px'}} className="cls_005"><span className="cls_005">Chronic:</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '85.50px'}} className="cls_005"><span className="cls_005">NOEC</span></div>
          <div style={{position: 'absolute', left: '304.71px', top: '85.50px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '439.00px', top: '85.50px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.50px', top: '85.50px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '106.38px'}} className="cls_005"><span className="cls_005">IC</span><span className="cls_016"><sub>25</sub></span></div>
          <div style={{position: 'absolute', left: '304.74px', top: '106.38px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '439.02px', top: '106.38px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.52px', top: '106.38px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '131.58px'}} className="cls_005"><span className="cls_005">Control percent survival</span></div>
          <div style={{position: 'absolute', left: '304.63px', top: '131.58px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '438.93px', top: '131.58px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '563.45px', top: '131.58px'}} className="cls_005"><span className="cls_005">%</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '152.40px'}} className="cls_005"><span className="cls_005">Other (describe)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '173.28px'}} className="cls_005"><span className="cls_005">m.  Quality Control/Quality Assurance.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '194.10px'}} className="cls_005"><span className="cls_005">Is reference toxicant data available?</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '214.98px'}} className="cls_005"><span className="cls_005">Was reference toxicant test within</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '224.16px'}} className="cls_005"><span className="cls_005">acceptable bounds?</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '240.12px'}} className="cls_005"><span className="cls_005">What date was reference toxicant test</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '249.30px'}} className="cls_005"><span className="cls_005">run (MM/DD/YYYY)?</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '265.26px'}} className="cls_005"><span className="cls_005">Other (describe)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '286.14px'}} className="cls_006"><span className="cls_006">E.3. Toxicity Reduction Evaluation.</span><span className="cls_005">  Is the treatment works involved in a Toxicity Reduction Evaluation?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '316.50px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '167.37px', top: '316.50px'}} className="cls_005"><span className="cls_005">If yes, describe:</span></div>
          <div style={{position: 'absolute', left: '241.52px', top: '316.50px'}} className="cls_005"><span className="cls_005">____________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '331.68px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '343.92px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '362.10px'}} className="cls_006"><span className="cls_006">E.4. Summary of Submitted Biomonitoring Test Information.</span><span className="cls_005">   If you have submitted biomonitoring test information, or information regarding the</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '371.28px'}} className="cls_005"><span className="cls_005">cause of toxicity, within the past four and one-half years, provide the dates the information was submitted to the permitting authority and a</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '380.52px'}} className="cls_005"><span className="cls_005">summary of the results.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '410.88px'}} className="cls_005"><span className="cls_005">Date submitted:</span></div>
          <div style={{position: 'absolute', left: '131.36px', top: '410.88px'}} className="cls_005"><span className="cls_005">________________ (MM/DD/YYYY)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '441.30px'}} className="cls_005"><span className="cls_005">Summary of results:  (see instructions)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '456.48px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '467.89px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '258.00px', top: '502.62px'}} className="cls_013"><span className="cls_013">END OF PART E.</span></div>
          <div style={{position: 'absolute', left: '42.66px', top: '516.42px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '228.30px', top: '530.22px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE.</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 17 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 14436, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background19.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '36.96px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '37.08px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '45.12px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '73.62px'}} className="cls_013"><span className="cls_013">SUPPLEMENTAL APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '104.28px'}} className="cls_011"><span className="cls_011">PART F.    INDUSTRIAL USER DISCHARGES AND RCRA/CERCLA WASTES</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '121.86px'}} className="cls_006"><span className="cls_006">All treatment works receiving discharges from significant industrial users or which receive RCRA, CERCLA, or other remedial wastes must</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '131.04px'}} className="cls_006"><span className="cls_006">complete Part F.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '148.62px'}} className="cls_011"><span className="cls_011">GENERAL INFORMATION:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '166.98px'}} className="cls_006"><span className="cls_006">F.1.  Pretreatment Program.</span><span className="cls_005">  Does the treatment works have, or is it subject to, an approved pretreatment program?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '182.16px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '206.52px'}} className="cls_006"><span className="cls_006">F.2.   Number of Significant Industrial Users (SIUs) and Categorical Industrial Users (CIUs).</span><span className="cls_005">  Provide the number of each of the following types</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '215.76px'}} className="cls_005"><span className="cls_005">of industrial users that discharge to the treatment works.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '240.12px'}} className="cls_005"><span className="cls_005">a.   Number of non-categorical SIUs.</span></div>
          <div style={{position: 'absolute', left: '221.36px', top: '240.12px'}} className="cls_005"><span className="cls_005">____________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '255.36px'}} className="cls_005"><span className="cls_005">b.   Number of CIUs.</span></div>
          <div style={{position: 'absolute', left: '221.43px', top: '255.36px'}} className="cls_005"><span className="cls_005">____________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '280.38px'}} className="cls_011"><span className="cls_011">SIGNIFICANT INDUSTRIAL USER INFORMATION:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '298.74px'}} className="cls_006"><span className="cls_006">Supply the following information for each SIU.  If more than one SIU discharges to the treatment works, copy questions F.3 through F.8</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '307.98px'}} className="cls_006"><span className="cls_006">and provide the information requested for each SIU.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '323.94px'}} className="cls_006"><span className="cls_006">F.3.  Significant Industrial User Information.</span><span className="cls_005">  Provide the name and address of each SIU discharging to the treatment works.  Submit additional</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '333.12px'}} className="cls_005"><span className="cls_005">pages as necessary.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '348.30px'}} className="cls_005"><span className="cls_005">Name:</span></div>
          <div style={{position: 'absolute', left: '149.40px', top: '348.30px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '372.66px'}} className="cls_005"><span className="cls_005">Mailing Address:</span></div>
          <div style={{position: 'absolute', left: '149.27px', top: '372.66px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '149.41px', top: '385.90px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '412.26px'}} className="cls_006"><span className="cls_006">F.4.   Industrial Processes.</span><span className="cls_005">  Describe all of the industrial processes that affect or contribute to the SIU's discharge.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '427.50px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '451.86px'}} className="cls_006"><span className="cls_006">F.5.   Principal Product(s) and Raw Material(s).</span><span className="cls_005">  Describe all of the principal processes and raw materials that affect or contribute to the SIU's</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '461.10px'}} className="cls_005"><span className="cls_005">discharge.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '476.28px'}} className="cls_005"><span className="cls_005">Principal product(s):</span></div>
          <div style={{position: 'absolute', left: '149.30px', top: '476.28px'}} className="cls_005"><span className="cls_005">________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '500.70px'}} className="cls_005"><span className="cls_005">Raw material(s):</span></div>
          <div style={{position: 'absolute', left: '148.47px', top: '500.70px'}} className="cls_005"><span className="cls_005">________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '525.06px'}} className="cls_006"><span className="cls_006">F.6.   Flow Rate.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '549.48px'}} className="cls_005"><span className="cls_005">a.   Process wastewater flow rate.  Indicate the average daily volume of process wastewater discharged into the collection system in gallons</span></div>
          <div style={{position: 'absolute', left: '76.51px', top: '558.66px'}} className="cls_005"><span className="cls_005">per day (gpd) and whether the discharge is continuous or intermittent.</span></div>
          <div style={{position: 'absolute', left: '76.50px', top: '573.84px'}} className="cls_005"><span className="cls_005">_____________  gpd</span></div>
          <div style={{position: 'absolute', left: '167.40px', top: '573.84px'}} className="cls_005"><span className="cls_005">(_____continuous or ______intermittent)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '598.26px'}} className="cls_005"><span className="cls_005">b.   Non-process wastewater flow rate.  Indicate the average daily volume of non-process wastewater flow discharged into the collection</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '607.44px'}} className="cls_005"><span className="cls_005">system in gallons per day (gpd) and whether the discharge is continuous or intermittent.</span></div>
          <div style={{position: 'absolute', left: '76.50px', top: '622.68px'}} className="cls_005"><span className="cls_005">_____________  gpd</span></div>
          <div style={{position: 'absolute', left: '167.40px', top: '622.68px'}} className="cls_005"><span className="cls_005">(_____continuous or ______intermittent)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '653.04px'}} className="cls_006"><span className="cls_006">F.7.  Pretreatment Standards.</span><span className="cls_005">  Indicate whether the SIU is subject to the following:</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '668.28px'}} className="cls_005"><span className="cls_005">a.   Local limits</span></div>
          <div style={{position: 'absolute', left: '210.03px', top: '668.28px'}} className="cls_005"><span className="cls_005">____Yes</span></div>
          <div style={{position: 'absolute', left: '257.36px', top: '668.28px'}} className="cls_005"><span className="cls_005">____No</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '683.46px'}} className="cls_005"><span className="cls_005">b.   Categorical pretreatment standards</span></div>
          <div style={{position: 'absolute', left: '210.05px', top: '683.46px'}} className="cls_005"><span className="cls_005">____Yes</span></div>
          <div style={{position: 'absolute', left: '257.37px', top: '683.46px'}} className="cls_005"><span className="cls_005">____No</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '698.64px'}} className="cls_005"><span className="cls_005">If subject to categorical pretreatment standards, which category and subcategory?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '713.88px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 18 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 15238, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background20.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '76.20px'}} className="cls_006"><span className="cls_006">F.8.  Problems at the Treatment Works Attributed to Waste Discharged by the SIU.</span><span className="cls_005">  Has the SIU caused or contributed to any problems (e.g.,</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '85.38px'}} className="cls_005"><span className="cls_005">upsets, interference) at the treatment works in the past three years?</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '98.34px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '167.42px', top: '98.34px'}} className="cls_005"><span className="cls_005">If yes, describe each episode.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '113.52px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '126.70px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '149.52px'}} className="cls_008"><span className="cls_008">RCRA HAZARDOUS WASTE RECEIVED BY TRUCK, RAIL, OR DEDICATED PIPELINE:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '168.90px'}} className="cls_006"><span className="cls_006">F.9.  RCRA Waste.</span><span className="cls_005">  Does the treatment works receive or has it in the past three years received RCRA hazardous waste by truck, rail, or dedicated</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '178.14px'}} className="cls_005"><span className="cls_005">pipe?</span></div>
          <div style={{position: 'absolute', left: '95.37px', top: '178.14px'}} className="cls_005"><span className="cls_005">____Yes ___No (go to F.12.)</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '202.50px'}} className="cls_006"><span className="cls_006">F.10.  Waste Transport.</span><span className="cls_005">  Method by which RCRA waste is received (check all that apply):</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '217.68px'}} className="cls_005"><span className="cls_005">______Truck</span></div>
          <div style={{position: 'absolute', left: '149.39px', top: '217.68px'}} className="cls_005"><span className="cls_005">______Rail</span></div>
          <div style={{position: 'absolute', left: '221.39px', top: '217.68px'}} className="cls_005"><span className="cls_005">______Dedicated Pipe</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '242.10px'}} className="cls_006"><span className="cls_006">F.11.  Waste Description.</span><span className="cls_005">  Give EPA hazardous waste number and amount (volume or mass, specify units).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '254.28px'}} className="cls_025"><span className="cls_025">EPA Hazardous Waste Number</span></div>
          <div style={{position: 'absolute', left: '257.41px', top: '254.28px'}} className="cls_025"><span className="cls_025">Amount</span></div>
          <div style={{position: 'absolute', left: '401.40px', top: '254.28px'}} className="cls_025"><span className="cls_025">Units</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '269.46px'}} className="cls_005"><span className="cls_005">_________________________</span></div>
          <div style={{position: 'absolute', left: '239.38px', top: '269.46px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '376.50px', top: '269.46px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '284.70px'}} className="cls_005"><span className="cls_005">_________________________</span></div>
          <div style={{position: 'absolute', left: '239.38px', top: '284.70px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '376.50px', top: '284.70px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '299.88px'}} className="cls_005"><span className="cls_005">_________________________</span></div>
          <div style={{position: 'absolute', left: '239.38px', top: '299.88px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '376.50px', top: '299.88px'}} className="cls_005"><span className="cls_005">_______________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '321.72px'}} className="cls_008"><span className="cls_008">CERCLA (SUPERFUND) WASTEWATER, RCRA REMEDIATION/CORRECTIVE</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '331.08px'}} className="cls_008"><span className="cls_008">ACTION WASTEWATER, AND OTHER REMEDIAL ACTIVITY WASTEWATER:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '349.32px'}} className="cls_006"><span className="cls_006">F.12.  Remediation Waste.</span><span className="cls_005">  Does the treatment works currently (or has it been notified that it will) receive waste from remedial activities?</span></div>
          <div style={{position: 'absolute', left: '65.22px', top: '364.50px'}} className="cls_005"><span className="cls_005">____Yes  (complete F.13 through F.15.)</span></div>
          <div style={{position: 'absolute', left: '293.40px', top: '364.50px'}} className="cls_005"><span className="cls_005">____No</span></div>
          <div style={{position: 'absolute', left: '65.22px', top: '379.68px'}} className="cls_005"><span className="cls_005">Provide a list of sites and the requested information (F.13 - F.15.) for each current and future site.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '404.10px'}} className="cls_006"><span className="cls_006">F.13.  Waste Origin.</span><span className="cls_005">  Describe the site and type of facility at which the CERCLA/RCRA/or other remedial waste originates (or is expected to originate</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '413.28px'}} className="cls_005"><span className="cls_005">in the next five years).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '428.46px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '440.70px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '451.88px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '483.30px'}} className="cls_006"><span className="cls_006">F.14.  Pollutants.</span><span className="cls_005">  List the hazardous constituents that are received (or are expected to be received).  Include data on volume and concentration, if</span></div>
          <div style={{position: 'absolute', left: '62.99px', top: '492.48px'}} className="cls_005"><span className="cls_005">known.  (Attach additional sheets if necessary).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '507.66px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.75px', top: '519.88px'}} className="cls_005"><span className="cls_005">_______________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '547.26px'}} className="cls_006"><span className="cls_006">F.15.  Waste Treatment.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '562.44px'}} className="cls_005"><span className="cls_005">a.   Is this waste treated (or will it be treated) prior to entering the treatment works?</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '577.68px'}} className="cls_005"><span className="cls_005">____Yes ____No</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '592.86px'}} className="cls_005"><span className="cls_005">If yes, describe the treatment (provide information about the removal efficiency):</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '608.04px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '619.13px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '647.64px'}} className="cls_005"><span className="cls_005">b.   Is the discharge (or will the discharge be) continuous or intermittent?</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '662.88px'}} className="cls_005"><span className="cls_005">____Continuous</span></div>
          <div style={{position: 'absolute', left: '185.40px', top: '662.88px'}} className="cls_005"><span className="cls_005">____Intermittent</span></div>
          <div style={{position: 'absolute', left: '275.40px', top: '662.88px'}} className="cls_005"><span className="cls_005">If intermittent, describe discharge schedule.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '678.06px'}} className="cls_005"><span className="cls_005">____________________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '258.36px', top: '698.40px'}} className="cls_013"><span className="cls_013">END OF PART F.</span></div>
          <div style={{position: 'absolute', left: '42.66px', top: '712.20px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '229.98px', top: '726.00px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 19 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 16040, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background21.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '75.96px'}} className="cls_013"><span className="cls_013">SUPPLEMENTAL APPLICATION INFORMATION</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '106.56px'}} className="cls_011"><span className="cls_011">PART G.  COMBINED SEWER SYSTEMS</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '124.92px'}} className="cls_006"><span className="cls_006">If the treatment works has a combined sewer system, complete Part G.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '140.88px'}} className="cls_006"><span className="cls_006">G.1.  System Map.</span><span className="cls_005">  Provide a map indicating the following: (may be included with Basic Application Information)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '165.24px'}} className="cls_005"><span className="cls_005">a.   All CSO discharge points.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '180.42px'}} className="cls_005"><span className="cls_005">b.   Sensitive use areas potentially affected by CSOs (e.g., beaches, drinking water supplies, shellfish beds, sensitive aquatic ecosystems, and</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '189.66px'}} className="cls_005"><span className="cls_005">outstanding natural resource waters).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '204.84px'}} className="cls_005"><span className="cls_005">c.   Waters that support threatened and endangered species potentially affected by CSOs.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '229.26px'}} className="cls_006"><span className="cls_006">G.2.  System Diagram.</span><span className="cls_005">  Provide a diagram, either in the map provided in G.1. or on a separate drawing, of the combined sewer collection system</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '238.44px'}} className="cls_005"><span className="cls_005">that includes the following information:</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '262.86px'}} className="cls_005"><span className="cls_005">a.   Locations of major sewer trunk lines, both combined and separate sanitary.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '278.04px'}} className="cls_005"><span className="cls_005">b.   Locations of points where separate sanitary sewers feed into the combined sewer system.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '293.22px'}} className="cls_005"><span className="cls_005">c.   Locations of in-line and off-line storage structures.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '308.46px'}} className="cls_005"><span className="cls_005">d.   Locations of flow-regulating devices.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '323.64px'}} className="cls_005"><span className="cls_005">e.   Locations of pump stations.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '347.70px'}} className="cls_008"><span className="cls_008">CSO OUTFALLS:</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '367.08px'}} className="cls_006"><span className="cls_006">Complete questions G.3 through G.6 once for each CSO discharge point.</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '382.98px'}} className="cls_006"><span className="cls_006">G.3. Description of Outfall.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '407.40px'}} className="cls_005"><span className="cls_005">a.   Outfall number</span></div>
          <div style={{position: 'absolute', left: '167.39px', top: '407.40px'}} className="cls_005"><span className="cls_005">________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '431.76px'}} className="cls_005"><span className="cls_005">b.   Location</span></div>
          <div style={{position: 'absolute', left: '167.35px', top: '431.76px'}} className="cls_005"><span className="cls_005">________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '167.41px', top: '441.06px'}} className="cls_015"><span className="cls_015">(City or town, if applicable)</span></div>
          <div style={{position: 'absolute', left: '401.41px', top: '441.06px'}} className="cls_015"><span className="cls_015">(Zip Code)</span></div>
          <div style={{position: 'absolute', left: '167.41px', top: '461.04px'}} className="cls_005"><span className="cls_005">________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '167.41px', top: '470.28px'}} className="cls_015"><span className="cls_015">(County)</span></div>
          <div style={{position: 'absolute', left: '401.46px', top: '470.28px'}} className="cls_015"><span className="cls_015">(State)</span></div>
          <div style={{position: 'absolute', left: '167.41px', top: '490.26px'}} className="cls_005"><span className="cls_005">________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '167.41px', top: '499.56px'}} className="cls_015"><span className="cls_015">(Latitude)</span></div>
          <div style={{position: 'absolute', left: '401.42px', top: '499.56px'}} className="cls_015"><span className="cls_015">(Longitude)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '528.72px'}} className="cls_005"><span className="cls_005">c.   Distance from shore (if applicable)</span></div>
          <div style={{position: 'absolute', left: '328.94px', top: '528.72px'}} className="cls_005"><span className="cls_005">____________ft.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '543.90px'}} className="cls_005"><span className="cls_005">d.   Depth below surface (if applicable)</span></div>
          <div style={{position: 'absolute', left: '328.83px', top: '543.90px'}} className="cls_005"><span className="cls_005">____________ft.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '559.14px'}} className="cls_005"><span className="cls_005">e.   Which of the following were monitored during the last year for this CSO?</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '583.50px'}} className="cls_005"><span className="cls_005">____Rainfall</span></div>
          <div style={{position: 'absolute', left: '185.38px', top: '583.50px'}} className="cls_005"><span className="cls_005">____CSO pollutant concentrations</span></div>
          <div style={{position: 'absolute', left: '329.36px', top: '583.50px'}} className="cls_005"><span className="cls_005">____CSO frequency</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '598.74px'}} className="cls_005"><span className="cls_005">____CSO flow volume</span></div>
          <div style={{position: 'absolute', left: '185.12px', top: '598.74px'}} className="cls_005"><span className="cls_005">____Receiving water quality</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '623.10px'}} className="cls_005"><span className="cls_005">f.</span></div>
          <div style={{position: 'absolute', left: '77.41px', top: '623.10px'}} className="cls_005"><span className="cls_005">How many storm events were monitored during the last year?</span></div>
          <div style={{position: 'absolute', left: '329.16px', top: '623.10px'}} className="cls_005"><span className="cls_005">_____________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '647.52px'}} className="cls_006"><span className="cls_006">G.4. CSO Events.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '671.94px'}} className="cls_005"><span className="cls_005">a.   Give the number of CSO events in the last year.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '687.12px'}} className="cls_005"><span className="cls_005">__________ events (___ actual or ___ approx.)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '702.30px'}} className="cls_005"><span className="cls_005">b.   Give the average duration per CSO event.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '717.48px'}} className="cls_005"><span className="cls_005">__________ hours (____ actual or ____ approx.)</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 20 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 16842, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background22.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '41.40px', top: '39.30px'}} className="cls_006"><span className="cls_006">FACILITY NAME AND PERMIT NUMBER:</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '39.42px'}} className="cls_007"><span className="cls_007">Form Approved 1/14/99</span></div>
          <div style={{position: 'absolute', left: '473.40px', top: '47.46px'}} className="cls_007"><span className="cls_007">OMB Number  2040-0086</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '76.20px'}} className="cls_005"><span className="cls_005">c.   Give the average volume per CSO event.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '91.32px'}} className="cls_005"><span className="cls_005">__________ million gallons (_____ actual or _____ approx.)</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '106.56px'}} className="cls_005"><span className="cls_005">d.   Give the minimum rainfall that caused a CSO event in the last year.</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '121.74px'}} className="cls_005"><span className="cls_005">__________ inches of rainfall</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '146.16px'}} className="cls_006"><span className="cls_006">G.5. Description of Receiving Waters.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '170.52px'}} className="cls_005"><span className="cls_005">a.   Name of receiving water:</span></div>
          <div style={{position: 'absolute', left: '171.78px', top: '170.52px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '185.76px'}} className="cls_005"><span className="cls_005">b.   Name of watershed/river/stream system:_______________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '210.12px'}} className="cls_005"><span className="cls_005">United States Soil Conservation Service 14-digit watershed code (if known): _______________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '234.54px'}} className="cls_005"><span className="cls_005">c.   Name of State Management/River Basin:</span></div>
          <div style={{position: 'absolute', left: '239.25px', top: '234.54px'}} className="cls_005"><span className="cls_005">_______________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '77.40px', top: '258.96px'}} className="cls_005"><span className="cls_005">United States Geological Survey 8-digit hydrologic cataloging unit code (if known):</span></div>
          <div style={{position: 'absolute', left: '385.51px', top: '258.96px'}} className="cls_005"><span className="cls_005">______________________________</span></div>
          <div style={{position: 'absolute', left: '41.40px', top: '283.32px'}} className="cls_006"><span className="cls_006">G.6. CSO Operations.</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '307.74px'}} className="cls_005"><span className="cls_005">Describe any known water quality impacts on the receiving water caused by this CSO (e.g., permanent or intermittent beach closings,</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '316.92px'}} className="cls_005"><span className="cls_005">permanent or intermittent shell fish bed closings, fish kills, fish advisories, other recreational loss, or violation of any applicable State water</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '326.16px'}} className="cls_005"><span className="cls_005">quality standard).</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '341.34px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '63.00px', top: '354.52px'}} className="cls_005"><span className="cls_005">______________________________________________________________________________________________</span></div>
          <div style={{position: 'absolute', left: '257.34px', top: '381.48px'}} className="cls_013"><span className="cls_013">END OF PART G.</span></div>
          <div style={{position: 'absolute', left: '42.66px', top: '395.28px'}} className="cls_013"><span className="cls_013">REFER TO THE APPLICATION OVERVIEW TO DETERMINE WHICH OTHER PARTS OF FORM</span></div>
          <div style={{position: 'absolute', left: '228.30px', top: '409.08px'}} className="cls_013"><span className="cls_013">2A YOU MUST COMPLETE.</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">EPA Form 3510-2A (Rev. 1-99).  Replaces EPA forms 7550-6 &amp; 7550-22.</span></div>
          <div style={{position: 'absolute', left: '526.14px', top: '760.68px'}} className="cls_005"><span className="cls_005">Page 21 of 21</span></div>
        </div>
        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: 17644, width: 612, height: 792, borderStyle: 'outset', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <img src="backgroundPhotos/background23.jpg" width={612} height={792} /></div>
          <div style={{position: 'absolute', left: '36.00px', top: '21.00px'}} className="cls_005"><span className="cls_005">Additional information, if provided, will appear on the following pages.</span></div>
          <div style={{position: 'absolute', left: '36.00px', top: '760.62px'}} className="cls_005"><span className="cls_005">NPDES FORM 2A Additional Information</span></div>
        </div>
      </div>
      </Tab>
      <Tab eventKey={3} title="Documnets">
        Tab 3 content
      </Tab>
    </Tabs>



      </Grid>
    )
  }
}
