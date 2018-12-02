import React, { Component } from 'react'
import { Grid, Panel, Row, Button, Col, Tabs, Image, Nav, NavDropdown, NavItem, Tab, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';

export default class maintenance extends Component {
  render() {
    return (

<Grid>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title=<div><h3>WWTP</h3></div>>

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title=<div><p>Maintenance Log</p></div>>


            </Tab>
            <Tab eventKey={2} title=<div><p>O&M Report</p></div>>
              Tab 2 content
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
