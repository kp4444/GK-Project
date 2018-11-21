import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';
import Chart from 'react-google-charts';

export default class Chart1 extends Component {
  render() {
    return (
      <Chart
          width={'70%'}
          height={'70%'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
        data={ this.state.chartData  }
          options={{
            // Use the same chart area width as the control for axis alignment.
            chartArea: { height: '80%', width: '90%' },
            hAxis: { slantedText: false },
            vAxis: { viewWindow: { min: 0, max: 2000 } },
            legend: { position: 'none' },
          }}
          rootProps={{ 'data-testid': '3' }}
          chartPackages={['corechart', 'controls']}
          controls={[
            {
              controlType: 'ChartRangeFilter',
              options: {
                title: 'WWTP Sample Data',
                subtitle: 'BOD, TSS',
                filterColumnIndex: 0,
                ui: {
                  chartType: 'ScatterChart',
                  chartOptions: {
                    chartArea: { width: '50%', height: '50%' },
                    hAxis: { baselineColor: 'none' },
                  },
                },
              },
              controlPosition: 'bottom',
              controlWrapperParams: {
                state: {
                  },
              },
            },
          ]}
        />
    )
  }
}
