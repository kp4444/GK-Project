import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/Home">G & K Project</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>

            <NavItem eventKey={1} componentClass={Link} href="/home" to="/home">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/maintenance" to="/maintenance">
              Maintenance
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/data" to="/data">
              Data
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/profile" to="/profile">
              Profile
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/permits" to="/permits">
              Permits
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/files" to="/files">
              Files
            </NavItem>

            <Button bsStyle="info" onClick={() => firebase.auth().signOut()}>Sign Out

          </Button>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
