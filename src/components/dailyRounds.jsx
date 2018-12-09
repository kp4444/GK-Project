import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button, ButtonToolbar, Form, Grid, Row, FormGroup, Tab, Tabs, Col, ControlLabel, MenuItem, DropdownButton, FormControl, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';
import Chart from 'react-google-charts';
import { PDFExport } from '@progress/kendo-react-pdf';

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
            height: .8
        }}
    />
);

export default class dailyRounds extends Component {


  exportPDF = () => {
    this.resume.save();
}

rawMarkup(){
    var rawMarkup = this.props.content
    return { __html: rawMarkup };
}


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
    <Grid>
<h3>Daily Rounds Reports</h3>



  <hr></hr>

<Row>
  <Col xs={4} md={4}>
  <FormGroup>
      <FormControl type="text" placeholder="Search" />
    </FormGroup>
  </Col>

  <Col xs={4} md={4}>
    <ButtonToolbar>
    <DropdownButton title="Default button" id="dropdown-size-medium">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
  </Col>
</Row>
<hr></hr>

<Row>
<Col xs={8} md={8}>

  <Chart
      width={'auto'}
      height={'100%'}
      chartType="Table"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'string', label: 'Role' },
          { type: 'string', label: 'Name' },
          { type: 'string', label: 'Phone Number' },
          { type: 'string', label: 'Email' },
        ],
        ['Public Works Director', 'Tim Westover', '(928)926-2846)','twestover@winslow.com'],
        ['Head Operator', 'Reuben Gallegos', '(928)926-2846)','rgallegos@winslow.com'],
        ['Operator', 'Ramon', '(928)926-2846)','ramon@winslow.com'],
        ['Operator', 'Anthony', '(928)928-816)','anthony@winslow.com'],
        ['Operator', 'Allen', '(928)926-2846)','allen@winslow.com'],
        ['Operator', 'Tim', '(928)926-2846)','tim@winslow.com'],
        ['Operator', 'Bruce', '(928)926-2846)','bruce@winslow.com'],

      ]}
      options={{
        showRowNumber: true,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
</Col>
</Row>
</Grid>
  </Tab>




  <Tab eventKey={2} title="+ Create New Daily Round Report">
    <PDFExport          paperSize={'Letter'}
                        fileName="_____.pdf"
                        title=""
                        subject=""
                        keywords=""
                        forcePageBreak=".page-break"
                        ref={(component) => this.pdfExportComponent = component}
                    >
    <h2>Daily Rounds Report</h2>
      <button className="k-button" onClick={() => { this.pdfExportComponent.save(); }}>
                      Export PDF
                  </button>

    <ColoredLine color="gray" />
    <strong>Influent Lift Station</strong>
    <hr></hr>
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
<hr></hr>
</Col>
</Row>
<strong>Headworks</strong>
<hr></hr>
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

  <h3 className="page-break"></h3>

</Row>
<hr></hr>
<strong>FEB</strong>
<hr></hr>
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

  <hr></hr>
  </Col>
  </Row>


  <strong>Oxidation Ditches</strong>
  <hr></hr>
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

    <hr></hr>
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

      <hr></hr>
      </Col>
      </Row>
      <strong>Clarifiers</strong>
      <hr></hr>
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
</PDFExport>
  </Tab>


</Tabs>


</Col>
</Row>
</Grid>

</div>
    )
  }
}
