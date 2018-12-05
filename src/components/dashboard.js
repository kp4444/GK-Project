import React, { Component } from 'react'
import { Navbar, Nav, Grid, Jumbotron, Row, Col, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';
import Chart from 'react-google-charts';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={10} sm={10} md={10} >
        <Jumbotron>
          <h1>City of Winslow</h1>
          <p>
            Wastewater Treatment Plant
          </p>
        </Jumbotron>
        <ColoredLine color="gray" />

        <h2>WWTP Team</h2>



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
        <ColoredLine color="grey" />
          <h2>Sampling Overview</h2>
          <p>11/20/2018 - 11/27/2018</p>



          <Chart
              width={'auto'}
              height={'100%'}
              chartType="Table"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: 'string', label: 'Day' },
                  { type: 'boolean', label: 'Ammonia' },
                  { type: 'boolean', label: 'Nitrate' },
                  { type: 'boolean', label: 'Nitrite' },
                ],
                ['Monday', true, false,false],
                ['Tuesday', true, false,false],
                ['Wednesday', false, true,true],
                ['Thursday', true, false,false],
                ['Friday', true, false,true],
                ['Saturday', true, false,false],
                ['Sunday', true, true,false],

              ]}
              options={{
                showRowNumber: true,
              }}
              rootProps={{ 'data-testid': '1' }}
            />


        </Col>
        </Row>
      </Grid>

    )
  }
}
