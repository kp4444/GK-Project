import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button, ButtonToolbar, Form, Grid, Row, FormGroup, Tab, Tabs, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';

const styles = {
  topPad: {
    paddingTop: "20px"
  },
};

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default class dailyRounds extends Component {
  render() {
    return (

<div>
  <Grid>
    <Row>
      <Row>
        <Col xs={6} md={6}>
      <h3>Daily Maintenance Rounds</h3>
      </Col>
      <Col xs={6} md={6}>
        <ButtonToolbar style={styles.topPad}>
      <Button  eventKey={2} bsSize="large">+ Create New Daily Round</Button>
    </ButtonToolbar>
      </Col>
      </Row>
      <Col xs={12} md={8}>

  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Daily Rounds Reports">

  </Tab>
  <Tab eventKey={2} title="+ Create New Daily Round Report">
    <h2>Daily Rounds Report</h2>
    <ColoredLine color="gray" />
    <strong>Influent Lift Station</strong>
    <ColoredLine color="gray" />
      <Form inline>
        <FormGroup>
          <Row>
          <Col xs={8} md={8}>
            <p>Bar Screen Clear</p>
            </Col>
            <Col xs={3} md={3}>
            <Checkbox></Checkbox>
            </Col>

          </Row>
          </FormGroup>
          <Row>
            <Col xs={12} md={12}>
        <FormGroup controlId="formInlineName">
    <ControlLabel>Pump #1 RTM</ControlLabel>{' '}
    <FormControl type="text" placeholder="Hours" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineName">
<ControlLabel>Pump #2 RTM</ControlLabel>{' '}
<FormControl type="text" placeholder="Hours" />
</FormGroup>{' '}
<FormGroup controlId="formInlineName">
<ControlLabel>Pump #3 RTM</ControlLabel>{' '}
<FormControl type="text" placeholder="Hours" />
</FormGroup>{' '}
<FormGroup controlId="formInlineName">
<ControlLabel>Pump #4 RTM</ControlLabel>{' '}
<FormControl type="text" placeholder="Hours" />
</FormGroup>{' '}
<ColoredLine color="gray" />
</Col>
</Row>
<strong>Headworks</strong>
<ColoredLine color="gray" />
<Row>
<Col xs={8} md={8}>
  <p>Huber Screen Clear</p>
  </Col>
  <Col xs={3} md={3}>
  <Checkbox></Checkbox>
  </Col>

</Row>

<Row>
<Col xs={8} md={8}>
  <p>Heat Tape Working</p>
  </Col>
  <Col xs={3} md={3}>
  <Checkbox></Checkbox>
  </Col>

</Row>
<ColoredLine color="gray" />
<strong>FEB</strong>
<ColoredLine color="gray" />
  <Row>
    <Col xs={12} md={12}>
  <FormGroup controlId="formInlineName">
  <ControlLabel>Pump #1 RTM</ControlLabel>{' '}
  <FormControl type="text" placeholder="Hours" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineName">
  <ControlLabel>Pump #2 RTM</ControlLabel>{' '}
  <FormControl type="text" placeholder="Hours" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineName">
  <ControlLabel>Pump #3 RTM</ControlLabel>{' '}
  <FormControl type="text" placeholder="Hours" />
  </FormGroup>{' '}

  <ColoredLine color="gray" />
  </Col>
  </Row>


  <strong>Oxidation Ditches</strong>
  <ColoredLine color="gray" />
    <Row>
      <Col xs={12} md={12}>
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #1 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #2 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #3 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #4 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #5 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #6 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #7 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineName">
        <ControlLabel>Mixer #8 RTM</ControlLabel>{' '}
        <FormControl type="text" placeholder="Hours" />
        </FormGroup>{' '}

    <ColoredLine color="gray" />
    </Col>
    </Row>

    <strong>Blowers</strong>
    <ColoredLine color="gray" />
      <Row>
        <Col xs={12} md={12}>
      <FormGroup controlId="formInlineName">
      <ControlLabel>Blower #1 RTM</ControlLabel>{' '}
      <FormControl type="text" placeholder="Hours" />
      </FormGroup>{' '}
      <FormGroup controlId="formInlineName">
      <ControlLabel>Blower #2 RTM</ControlLabel>{' '}
      <FormControl type="text" placeholder="Hours" />
      </FormGroup>{' '}
      <FormGroup controlId="formInlineName">
      <ControlLabel>Blower #3 RTM</ControlLabel>{' '}
      <FormControl type="text" placeholder="Hours" />
      </FormGroup>{' '}

      <ColoredLine color="gray" />
      </Col>
      </Row>
      <strong>Clarifiers</strong>
      <ColoredLine color="gray" />
      <Row>
      <Col xs={8} md={8}>
        <p>Clarifier 1 Working</p>
        </Col>
        <Col xs={3} md={3}>
        <Checkbox></Checkbox>
        </Col>

      </Row>

      <Row>
      <Col xs={8} md={8}>
        <p>Clarifier 2 Working</p>
        </Col>
        <Col xs={3} md={3}>
        <Checkbox></Checkbox>
        </Col>

      </Row>
      <ColoredLine color="gray" />




  </Form>

  </Tab>

</Tabs>


</Col>
</Row>
</Grid>
</div>
    )
  }
}
