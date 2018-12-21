import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { fire, facebookProvider } from '../fire';
import Navbar from './CustomNavbar';
import './CustomNavbar.css';
import Home from './Home';
import About from './About';
import Data from './Data';
import Permits from './Permits';
import form2a from './form2a';
import Profile from './Profile';
import files from './files';
import maintenance from './maintenance';
import Dashboard from './dashboard';
import dailyRounds from './dailyRounds';
import dailySamples from './dailySamples';
import workOrders from './workOrders';


import { Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import { Col, Popover, Panel, Grid, Collapse, Well, ListGroup, ListGroupItem, Button, Nav, NavItem, OverlayTrigger, Row, Tab, Tabs } from 'react-bootstrap';

import { BrowserRouter, Route } from 'react-router-dom';

const styles = {
  sidenav: {
    height: '100vh',
    width: '180px',/* Set the width of the sidebar */
    position: 'sticky',
    overflowx: 'hidden',
    zindex: 1,
    top: 0, /* Stay at the top */
    left: 0,
    backgroundColor: '#325168' /* Fixed Sidebar (stay in place on scroll) */

},
background: {
  backgroundColor: '#FFFFFF',
  height: '100%'
   /* Fixed Sidebar (stay in place on scroll) */

},

  panelWidth: {
    width: '100%',
    left: '1px',
    paddingleft: '0px',
    center: 'auto',
    opacity: 10,


  },
  topPad: {
    paddingTop: "15px"
  },
  bottomPad: {
    paddingBottom: "15px"
  },


}
// Configure Firebase.

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

const popoverRightSampling = (
  <Popover id="popover-positioned-right" title="Sampling Reports">
    <strong>Sampling Reports</strong>
      <NavItem componentClass={Link} href="/dailySamples" to="/dailySamples">
      Daily Samples
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Monthly Samples
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Semiannual Samples
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Annual Samples
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      DMR Forms
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Ammonia Log
    </NavItem>

  </Popover>
);

const popoverRightAsset = (
  <Popover id="popover-trigger-focus" title="Popover bottom">
    <strong>Operations & Maintenance</strong>
      <NavItem componentClass={Link} href="/dailyRounds" to="/dailyRounds">
      Daily Rounds
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Maintenance Reports
    </NavItem>
    <NavItem componentClass={Link} href="/workOrders" to="/workOrders">
      Maintenance Work Order
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Maintenance Schedule
    </NavItem>
    <strong>Equipment Inventory</strong>
    <NavItem componentClass={Link} href="/data" to="/data">
      Vendor Contacts
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Equipment List
    </NavItem>


  </Popover>
);

const popoverRightDocuments = (
  <Popover id="popover-trigger-focus" title="Popover bottom">
    <strong>Documents</strong>
      <NavItem componentClass={Link} href="/files" to="/files">
      Upload Document
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Equipment Manual
    </NavItem>
    <NavItem componentClass={Link} href="/workOrders" to="/workOrders">
      Permits
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Reports
    </NavItem>
    <strong>Equipment Inventory</strong>
    <NavItem componentClass={Link} href="/data" to="/data">
      Vendor Contacts
    </NavItem>
    <NavItem componentClass={Link} href="/data" to="/data">
      Equipment List
    </NavItem>


  </Popover>
);

class SignInScreen extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      open1: false,
      open2: false,
    };
  }

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    'credentialHelper': firebaseui.auth.CredentialHelper.NONE,
    signInSuccessUrl: '/home',

    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseui.auth.CredentialHelper.NONE
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div style={styles.background} >

        <Row style={styles.background}>

          <Col xs={5} sm={5} md={5}>
            <StickyContainer style={{position: 'fixed'}}>

            <Panel style={styles.sidenav}>
              <Panel.Body>


  <ListGroup style={styles.panelWidth}>
  <ListGroupItem >
    <NavItem componentClass={Link} href="/dashboard" to="/dashboard">
      Dashboard
    </NavItem>


  </ListGroupItem>



  <OverlayTrigger rootClose="true" trigger="click" placement="right" overlay={popoverRightSampling}>
 <ListGroupItem>Sampling</ListGroupItem>
 </OverlayTrigger>

    <OverlayTrigger rootClose="true" trigger="click" placement="right" overlay={popoverRightAsset}>
    <ListGroupItem>Asset Manager</ListGroupItem>
    </OverlayTrigger>

    <OverlayTrigger rootClose="true" trigger="click" placement="right" overlay={popoverRightDocuments}>
   <ListGroupItem>Documents</ListGroupItem>
   </OverlayTrigger>

         <ListGroupItem onClick={() => this.setState({ open1: !this.state.open1 })}>Permits</ListGroupItem>
           <Collapse in={this.state.open1}>
                <div>
                  <ListGroupItem>Form 2A</ListGroupItem>
                 <ListGroupItem>Form 2S</ListGroupItem>

                </div>
              </Collapse>


</ListGroup>
<Button bsStyle="info" onClick={() => firebase.auth().signOut()}>Sign Out

</Button>



              </Panel.Body>
</Panel>
</StickyContainer>



          </Col>
          <Col style={styles.background} mdOffset={2} smOffset={2} xsOffset={2} xs={8} sm={8} md={8}>

            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/data" component={Data} />
            <Route path="/profile" component={Profile}/>
            <Route path="/permits" component={Permits}/>
            <Route path="/form2a" component={form2a} />
            <Route path="/files" component={files} />
            <Route path="/dailyRounds" component={dailyRounds} />
            <Route path="/dailySamples" component={dailySamples} />
            <Route path ="/maintenance" component={maintenance} />
            <Route path ="/workOrders" component={workOrders} />
            

            </Col>
        </Row>








      </div>
    );
  }
}
export default SignInScreen;
