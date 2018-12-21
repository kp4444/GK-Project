import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button, ButtonToolbar, Form, Grid, Row, FormGroup, Tab, Tabs, Col, Table, Popover, ControlLabel, MenuItem, DropdownButton, FormControl, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import firebase from 'firebase';
import Chart from 'react-google-charts';
import { PDFExport } from '@progress/kendo-react-pdf';
import { fire } from '../fire';
import ReactDataGrid from 'react-data-grid';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { TiArrowSortedDown, TiPencil, TiTrash } from "react-icons/ti";








const buttonTest = () => (
  console.log("testing")
);

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



export default class dailySamples extends Component {


    constructor() {
        super();
        this.state = {
          sampleDate: '',
          sampleTime: '',
          operator: '',
          sampleLocation: '',
          temperatureResult: '',
          conductivityResult: '',
          pHResult: '',
          DOResult: '',
          nitrateResult: '',
          nitriteResult: '',
          ammoniaResult: '',
          totalInorganicNitrogen: '',
          turbidityResult: '',
          TSSResult: '',

          id: '',
          key: 1,
          idKey: '',
          page: '',
          area: '',
          areaData: [],
          responsibility: '',
          responsibilityData: [],
          startDate: '',
          startDateData: [],
          endDate: '',
          endDateData: [],
          description: '',
          descriptionData: [],
          checkbox: '',
          checkboxData: [],
          samples: [],
          orders: [],



        }
        //these are triggered events.  handleChange is for text box changes
        //handlesubmit is for the form being submitted.
        //every event trigger needs to be bound like is below with .bind
        //we might now have to do this anymore with the newest version of react, but i have it to be safe.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.writeData = this.writeData.bind(this);




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
        const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
        const orderID = fire.database().ref(`/dailySamples/${user.uid}/${orderID}`);
        const newCheckboxKey = firebase.database().ref().child('checkbox').push().key;

        let id = newCheckboxKey;
        let box = id;


        console.log(box);
        const sample = {

          sampleDate: this.state.sampleDate,
          sampleTime: this.state.sampleTime,
          operator: this.state.operator,
          sampleLocation: this.state.sampleLocation,
          temperatureResult: this.state.temperatureResult,
          conductivityResult: this.state.conductivityResult,
          pHResult: this.state.pHResult,
          DOResult: this.state.DOResult,
          nitrateResult: this.state.nitrateResult,
          nitriteResult: this.state.nitriteResult,
          ammoniaResult: this.state.ammoniaResult,
          totalInorganicNitrogen: this.state.totalInorganicNitrogen,
          turbidityResult: this.state.turbidityResult,
          TSSResult: this.state.TSSResult,

          area: this.state.area,
          responsibility: this.state.responsibility,
          description: this.state.description,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          checkbox: '<button id="buttonTest" onClick={buttonTest}>Test<button>',
        }




        samplesRef.push(sample);
        //this.setState is used to clear the text boxes after the form has been submitted.
        this.setState({
          startDate: '',
          endDate: '',
          area: '',
          responsibility: '',
          description: '',

          sampleDate: '',
          sampleTime: '',
          operator: '',
          sampleLocation: '',
          temperatureResult: '',
          conductivityResult: '',
          pHResult: '',
          DOResult: '',
          nitrateResult: '',
          nitriteResult: '',
          ammoniaResult: '',
          totalInorganicNitrogen: '',
          turbidityResult: '',
          TSSResult: '',

        });
      });
    }


    sampleInfluent = () => {
      this.setState({
        sampleLocation: 'Influent',

      })
    }

    sampleEffluent = () => {
      this.setState({
        sampleLocation: 'Effluent',

      })
    }



    areaChangeInfluent = () => {
      this.setState({
        area: 'Influent Lift Station',

      })
    }

    areaChangeHeadworks = () => {
      this.setState({
        area: 'Headworks',

      })
    }

    responsibilityChangeRamon = () => {
      this.setState({
        responsibility: 'Ramon',
      })
    }
    responsibilityChangeRamonChangeAnthony = () => {
      this.setState({
        responsibility: 'Anthony',
      })
    }
    responsibilityChangeRamonChangeTim = () => {
      this.setState({
        responsibility: 'Tim',
      })
    }
    responsibilityChangeRamonChangeAllen = () => {
      this.setState({
        responsibility: 'Allen',
      })
    }


      //this function is constantly running after the initial render.  Snapshot is used to look into the database.
      //[] indicates an array value
      //.map(Number) changes an array of strings to an array of integers
      //snapshot.foreach(ss => {...}) **this looks in each "Sample" for the child of "user"**
      //child of user can be child of BOD or child of tss or whatever.  It finds the value that is a child to that label.

      componentDidMount() {
        this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
          const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
          samplesRef.on('value', (snapshot) => {

            let startDateData = [];
            let endDateData = [];
            let descriptionData = [];
            let responsibilityData = [];
            let areaData = [];
            let checkboxData = [];
            let idData = [];
            let sampleDateData = [];
            let ammoniaResultData = [];



            snapshot.forEach(ss => {
            idData.push(ss.child('id').val());
            this.setState({
              idData: (idData),
            })
          });

            snapshot.forEach(ss => {
            checkboxData.push(ss.child('checkbox').val());
            this.setState({
              checkboxData: (checkboxData),
            })
          });

            snapshot.forEach(ss => {
            startDateData.push(ss.child('startDate').val());
            this.setState({
              startDateData: (startDateData),
            })
          });
          snapshot.forEach(ss => {
          endDateData.push(ss.child('endDate').val());
          this.setState({
            endDateData: (endDateData),
          })
        });

        snapshot.forEach(ss => {
        descriptionData.push(ss.child('description').val());
        this.setState({
          descriptionData: (descriptionData),
        })
      });

      snapshot.forEach(ss => {
      areaData.push(ss.child('area').val());
      this.setState({
        areaData: (areaData),
      })
    });

    snapshot.forEach(ss => {
    responsibilityData.push(ss.child('responsibility').val());
    this.setState({
      responsibilityData: (responsibilityData),
    })
  });

  snapshot.forEach(ss => {
  sampleDateData.push(ss.child('sampleDate').val());
  this.setState({
    sampleDateData: (sampleDateData),
  })
});

snapshot.forEach(ss => {
ammoniaResultData.push(ss.child('ammoniaResult').val());
this.setState({
  ammoniaResultData: parseInt(ammoniaResultData),
})
});







            //Pulls an array for all of the tss data values






          //chart labels first
          let chartData = [['Date', 'Concentration']];
          let tssGraph = [['Date', 'TSS Concentration']];
          let bodGraph = [['Date', 'BOD Concentration']];
          let nitrateGraph = [['Date', 'Nitrate Concentration']];
          let nitriteGraph = [['Date', 'Nitrite Concentration']];
          let ammoniaGraph = [['Date', 'Ammonia Concentration']];
          console.log(chartData);
          console.log(parseInt(ammoniaResultData));


          //loop to scan firebase data
          for (let i=0; i < sampleDateData.length; i++) {
            //push send this data to the back of the chartData variable above.
            chartData.push([new Date(Date.parse(sampleDateData[i])), parseInt(ammoniaResultData[i])]);

            this.setState({
              chartData: chartData,



            })



          }
          console.log(chartData);








          let orders = snapshot.val();
          console.log(orders);
          let newState = [];
          for (let order in orders) {
            newState.push({
              id: order,
              startDate: orders[order].startDate,
              endDate: orders[order].endDate,
              description: orders[order].description,
              responsibility: orders[order].responsibility,
              area: orders[order].area,

              sampleDate: orders[order].sampleDate,
              sampleTime: orders[order].sampleTime,
              operator: orders[order].operator,
              sampleLocation: orders[order].sampleLocation,
              temperatureResult: orders[order].temperatureResult,
              conductivityResult: orders[order].conductivityResult,
              pHResult: orders[order].pHResult,
              DOResult: orders[order].DOResult,
              nitrateResult: orders[order].nitrateResult,
              nitriteResult: orders[order].nitriteResult,
              ammoniaResult: orders[order].ammoniaResult,
              totalInorganicNitrogen: orders[order].totalInorganicNitrogen,
              turbidityResult: orders[order].turbidityResult,
              TSSResult: orders[order].TSSResult,

            });
          }
          this.setState({
            orders: newState,
          });


        });

      });


    }





    //totally honest...not sure how this knows exactly the right one to remove.
    //something to do with the SampleID, but I think .remove() is a fire standard function.

    fillStates(itemId) {
      let area = '';
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/dailySamples/${user.uid}/${itemId}`);
      console.log("Fill em in");
      console.log(this.state.id);
      sampleRef.on('value', (snapshot) => {

        this.setState({
          startDate: '',
          endDate: '',
          area: '',
          responsibility: '',
          description: '',
          sampleDate: '',
          sampleTime: '',
          operator: '',
          sampleLocation: '',
          temperatureResult: '',
          conductivityResult: '',
          pHResult: '',
          DOResult: '',
          nitrateResult: '',
          nitriteResult: '',
          ammoniaResult: '',
          totalInorganicNitrogen: '',
          turbidityResult: '',
          TSSResult: '',

        });

      let orders = snapshot.val();
      let id = fire.database().ref().child(`/dailySamples/${user.uid}/${itemId}`).key;
      console.log(orders);
      console.log(id);
      console.log(snapshot.child('area').val());
      let newState = [];
      for (let order in orders) {
        newState.push({
          id: order,

          area: orders[order].area,
          startDate: orders[order].startDate,
          endDate: orders[order].endDate,
          description: orders[order].description,
          responsibility: orders[order].responsibility,

          sampleDate: orders[order].sampleDate,
          sampleTime: orders[order].sampleTime,
          operator: orders[order].operator,
          sampleLocation: orders[order].sampleLocation,
          temperatureResult: orders[order].temperatureResult,
          conductivityResult: orders[order].conductivityResult,
          pHResult: orders[order].pHResult,
          DOResult: orders[order].DOResult,
          nitrateResult: orders[order].nitrateResult,
          nitriteResult: orders[order].nitriteResult,
          ammoniaResult: orders[order].ammoniaResult,
          totalInorganicNitrogen: orders[order].totalInorganicNitrogen,
          turbidityResult: orders[order].turbidityResult,
          TSSResult: orders[order].TSSResult,

        });
      }
      this.setState({
        area: snapshot.child('area').val(),
        responsibility: snapshot.child('responsibility').val(),
        startDate: snapshot.child('startDate').val(),
        endDate: snapshot.child('endDate').val(),
        description: snapshot.child('description').val(),
        id: id,
        key: 3,

        sampleDate: snapshot.child('sampleDate').val(),
        sampleTime: snapshot.child('sampleTime').val(),
        operator: snapshot.child('operator').val(),
        sampleLocation: snapshot.child('sampleLocation').val(),
        temperatureResult: snapshot.child('temperatureResult').val(),
        conductivityResult: snapshot.child('conductivityResult').val(),
        pHResult: snapshot.child('pHResult').val(),
        DOResult: snapshot.child('DOResult').val(),
        nitrateResult: snapshot.child('nitrateResult').val(),
        nitriteResult: snapshot.child('nitriteResult').val(),
        ammoniaResult: snapshot.child('ammoniaResult').val(),
        totalInorganicNitrogen: snapshot.child('totalInorganicNitrogen').val(),
        turbidityResult: snapshot.child('turbidityResult').val(),
        TSSResult: snapshot.child('TSSResult').val(),




      })
      console.log(this.state.id);


});

    });
  }


  writeStates = (itemId) => {

    this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
    const sampleRef = fire.database().ref(`/dailySamples/${user.uid}/${this.state.id}`);
    console.log("Fill em in");
    sampleRef.child("startDate").set(this.state.startDate);
    sampleRef.child("endDate").set(this.state.endDate);
    sampleRef.child("area").set(this.state.area);
    sampleRef.child("description").set(this.state.description);
    sampleRef.child("responsibility").set(this.state.responsibility);
    sampleRef.child("id").set(this.state.id);


    sampleRef.child("sampleDate").set(this.state.sampleDate);
    sampleRef.child("sampleTime").set(this.state.sampleTime);
    sampleRef.child("operator").set(this.state.operator);
    sampleRef.child("sampleLocation").set(this.state.sampleLocation);
    sampleRef.child("temperatureResult").set(this.state.temperatureResult);
    sampleRef.child("conductivityResult").set(this.state.conductivityResult);
    sampleRef.child("pHResult").set(this.state.pHResult);
    sampleRef.child("DOResult").set(this.state.DOResult);
    sampleRef.child("nitrateResult").set(this.state.nitrateResult);
    sampleRef.child("nitriteResult").set(this.state.nitriteResult);
    sampleRef.child("ammoniaResult").set(this.state.ammoniaResult);
    sampleRef.child("totalInorganicNitrogen").set(this.state.totalInorganicNitrogen);
    sampleRef.child("turbidityResult").set(this.state.turbidityResult);
    sampleRef.child("TSSResult").set(this.state.TSSResult);


  });


  }








  fillEmpty(itemId) {
    let area = '';
    this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
    const sampleRef = fire.database().ref(`/dailySamples/${user.uid}/${itemId}`);
    console.log("Fill em in");
    sampleRef.on('value', (snapshot) => {

    let orders = snapshot.val();
    console.log(orders);
    console.log(snapshot.child('area').val());
    let newState = [];
    for (let order in orders) {
      newState.push({
        id: order,

        area: orders[order].area,
        startDate: orders[order].startDate,
        endDate: orders[order].endDate,
        description: orders[order].description,
        responsibility: orders[order].responsibility,

        sampleDate: orders[order].sampleDate,
        sampleTime: orders[order].sampleTime,
        operator: orders[order].operator,
        sampleLocation: orders[order].sampleLocation,
        temperatureResult: orders[order].temperatureResult,
        conductivityResult: orders[order].conductivityResult,
        pHResult: orders[order].pHResult,
        DOResult: orders[order].DOResult,
        nitrateResult: orders[order].nitrateResult,
        nitriteResult: orders[order].nitriteResult,
        ammoniaResult: orders[order].ammoniaResult,
        totalInorganicNitrogen: orders[order].totalInorganicNitrogen,
        turbidityResult: orders[order].turbidityResult,
        TSSResult: orders[order].TSSResult,

      });
    }
    this.setState({
      area: '',
      responsibility: '',
      startDate: '',
      endDate: '',
      description: '',
      id: '',
      key: 3,
      sampleDate: '',
      sampleTime: '',
      operator: '',
      sampleLocation: '',
      temperatureResult: '',
      conductivityResult: '',
      pHResult: '',
      DOResult: '',
      nitrateResult: '',
      nitriteResult: '',
      ammoniaResult: '',
      totalInorganicNitrogen: '',
      turbidityResult: '',
      TSSResult: '',



    })


});
  });
}

  createNewWorkOrder (itemId) {

      let area = '';
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/dailySamples/${user.uid}/${itemId}`);
      console.log("Fill em in");
      sampleRef.on('value', (snapshot) => {

      let orders = snapshot.val();
      console.log(orders);
      console.log(snapshot.child('area').val());
      let newState = [];
      for (let order in orders) {
        newState.push({
          id: order,

          area: orders[order].area,
          startDate: orders[order].startDate,
          endDate: orders[order].endDate,
          description: orders[order].description,
          responsibility: orders[order].responsibility,
          sampleDate: orders[order].sampleDate,
          sampleTime: orders[order].sampleTime,
          operator: orders[order].operator,
          sampleLocation: orders[order].sampleLocation,
          temperatureResult: orders[order].temperatureResult,
          conductivityResult: orders[order].conductivityResult,
          pHResult: orders[order].pHResult,
          DOResult: orders[order].DOResult,
          nitrateResult: orders[order].nitrateResult,
          nitriteResult: orders[order].nitriteResult,
          ammoniaResult: orders[order].ammoniaResult,
          totalInorganicNitrogen: orders[order].totalInorganicNitrogen,
          turbidityResult: orders[order].turbidityResult,
          TSSResult: orders[order].TSSResult,

        });
      }
      this.setState({
        area: snapshot.child('area').val(),
        responsibility: snapshot.child('responsibility').val(),
        startDate: snapshot.child('startDate').val(),
        endDate: snapshot.child('endDate').val(),
        description: snapshot.child('description').val(),
        id: snapshot.child('id').val(),
        key: 3,

        sampleDate: snapshot.child('sampleDate').val(),
        sampleTime: snapshot.child('sampleTime').val(),
        operator: snapshot.child('operator').val(),
        sampleLocation: snapshot.child('sampleLocation').val(),
        temperatureResult: snapshot.child('temperatureResult').val(),
        conductivityResult: snapshot.child('conductivityResult').val(),
        pHResult: snapshot.child('pHResult').val(),
        DOResult: snapshot.child('DOResult').val(),
        nitrateResult: snapshot.child('nitrateResult').val(),
        nitriteResult: snapshot.child('nitriteResult').val(),
        ammoniaResult: snapshot.child('ammoniaResult').val(),
        totalInorganicNitrogen: snapshot.child('totalInorganicNitrogen').val(),
        turbidityResult: snapshot.child('turbidityResult').val(),
        TSSResult: snapshot.child('TSSResult').val(),



      })


});
    });




  }

    removesample(itemId) {
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/dailySamples/${user.uid}/${itemId}`);
      sampleRef.remove();
    });
    }

    handleSelect(key) {

  this.setState({key});
}


writeData (e) {
  e.preventDefault();
  //fire.database().ref('samples') refers to the main title of the fire database.
  this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
  const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
  const orderID = fire.database().ref(`/dailySamples/${user.uid}/${this.state.id}`);
  const newCheckboxKey = firebase.database().ref().child('checkbox').push().key;

  let id = newCheckboxKey;
  let box = id;

  console.log(box);
  const sample = {

    id: this.state.id,
    area: this.state.area,
    responsibility: this.state.responsibility,
    description: this.state.description,
    startDate: this.state.startDate,
    endDate: this.state.endDate,
    checkbox: '<button id="buttonTest" onClick={buttonTest}>Test<button>',

    sampleDate: this.state.sampleDate,
    sampleTime: this.state.sampleTime,
    operator: this.state.operator,
    sampleLocation: this.state.sampleLocation,
    temperatureResult: this.state.temperatureResult,
    conductivityResult: this.state.conductivityResult,
    pHResult: this.state.pHResult,
    DOResult: this.state.DOResult,
    nitrateResult: this.state.nitrateResult,
    nitriteResult: this.state.nitriteResult,
    ammoniaResult: this.state.ammoniaResult,
    totalInorganicNitrogen: this.state.totalInorganicNitrogen,
    turbidityResult: this.state.turbidityResult,
    TSSResult: this.state.TSSResult,
  }

  samplesRef.child(this.state.id).set(sample);






  //this.setState is used to clear the text boxes after the form has been submitted.

});
}



handleBtnClick = () => {

  let order = 'desc';
  if (order === 'desc') {
    this.refs.table.handleSort('asc', 'name');
    order = 'asc';
  } else {
    this.refs.table.handleSort('desc', 'name');
    order = 'desc';
  }
}

sortSampleDate = (itemId) => {
  console.log(this.state.orders);

  let orders = this.state.orders;

  orders.sort(function(a, b) {

    if (a.sampleDate === b.sampleDate) {
      return 0;
    }
    return a.sampleDate > b.sampleDate ? 1 : -1;
});

this.setState({
  orders: orders,

})
}
sortSampleDateBack = (itemId) => {
  console.log(this.state.orders);

  let orders = this.state.orders;

  orders.sort(function(a, b) {

    if (b.sampleDate === a.sampleDate) {
      return 0;
    }
    return b.sampleDate > a.sampleDate ? 1 : -1;
});

this.setState({
  orders: orders,

})
}

sortDescription = (itemId) => {
  console.log(this.state.orders);
  let orders = this.state.orders;
  orders.sort(function(a, b) {
    if (a.description === b.description) {
      return 0;
    }
    return a.description > b.description ? 1 : -1;
});
this.setState({
  orders: orders,
})
}

sortDescriptionBack = (itemId) => {
  console.log(this.state.orders);
  let orders = this.state.orders;
  orders.sort(function(a, b) {
    if (b.description === a.description) {
      return 0;
    }
    return b.description > a.description ? 1 : -1;
});
this.setState({
  orders: orders,
})
}


filterArea = () => {
  let orders = this.state.orders;
  console.log(orders);
  let newArray = orders.filter(function (el) {
  return el.area == 'Headworks' &&
  console.log(newArray);

});
}







      render() {
        return (
    <div>

      <Grid>
        <Row>
          <Row>
            <Col xs={6} md={6}>
          <h3>Daily Sample Logs</h3>
          </Col>
          <Col xs={6} md={6}>
            <ButtonToolbar style={styles.topPad}>
          <Button  onClick={() => this.fillEmpty()} eventKey={3} bsSize="large">+ Create New Sample Log</Button>
        </ButtonToolbar>
          </Col>
          </Row>
          <Col xs={12} md={8}>

      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} defaultActiveKey={1} id="uncontrolled-tab-example">


        <Tab eventKey={1} title="+ Daily Samples">
          <Grid>

          <Row style={styles.topPad}>


            <Col xs={10} md={10}>


              <Table striped bordered condensed hover>
              <thead>
                <tr>

                  <th>Sample Date<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>Operator<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>pH<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>DO<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>Nitrate<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>Nitrite<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>Ammonia<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>Turbidity<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>
                  <th>TSS<TiArrowSortedDown onClick={this.sortSampleDateBack} /></th>

                </tr>


                {this.state.orders.map((order) => {


                  return (
                    <tr>
                        <td>{order.sampleDate}</td>
                        <td>{order.operator}</td>
                        <td>{order.pHResult}</td>
                        <td>{order.DOResult}</td>
                        <td>{order.nitrateResult}</td>
                        <td>{order.nitriteResult}</td>
                        <td>{order.ammoniaResult}</td>
                        <td>{order.turbidityResult}</td>
                        <td>{order.TSSResult}</td>
                        <td><TiPencil onClick={() => this.fillStates(order.id)}>Edit Sample</TiPencil></td>
                        <td><TiTrash onClick={() => this.removesample(order.id)}>Remove sample</TiTrash></td>
                        </tr>



                  )
                })}


              </thead>
            </Table>





            </Col>
          </Row>
        </Grid>
          </Tab>

          <Tab eventKey={2} title="+ Graphs">

            <Chart
  width={'100%'}
  height={'600px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={this.state.chartData}
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
        filterColumnIndex: 0,
        ui: {
          chartType: "Bar",
          chartOptions: {
            chartArea: { width: '90%', height: '50%' },
            hAxis: { baselineColor: 'none' },
          },
        },
      },
      controlPosition: 'bottom',

    },
  ]}
/>

          </Tab>




      <Tab eventKey={3} >
        <Grid>
          <Row>
            <Col xs={10} md={10}>
        <section className='add-item'>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={4} sm={4} md={4}>
                <h2>Daily Sample Log</h2>
                </Col>
                <Col xs={6} sm={6} md={6}>
                <input  type="text" name="operator" placeholder="Operator Name?" onChange={this.handleChange} value={this.state.operator} />
                </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col xs={8} sm={8} md={8}>

                    <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                    <th>Sample Date</th>
                    <th>Sample Time</th>
                    <th>Sample Location</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                    <td><input type="date" name="sampleDate" placeholder="Date of Sample" onChange={this.handleChange} value={this.state.sampleDate} />
                    </td>
                    <td><input type="time" name="sampleTime" placeholder="Time of Sample" onChange={this.handleChange} value={this.state.sampleTime} /></td>
                    <td><ButtonToolbar>
                      <DropdownButton title={this.state.sampleLocation} id="dropdown-size-medium">
                        <MenuItem eventKey="1" onSelect={this.sampleInfluent}>Influent</MenuItem>
                        <MenuItem eventKey="2" onSelect={this.sampleEffluent}>Effluent</MenuItem>
                      </DropdownButton>
                    </ButtonToolbar></td>
                    </tr>

                    </tbody>
                    </Table>



                </Col>




                  </Row>
                  <hr></hr>
                    <Row>
                      <Col xs={5} md={5}>
                        <strong>Temperature (C)</strong>
                        <Table striped bordered condensed hover>
                      <thead>
                        <tr>


                          <th>Results (C)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>


                          <td><input type="number" name="temperatureResult" placeholder="Result" onChange={this.handleChange} value={this.state.temperatureResult} /></td>
                        </tr>


                      </tbody>
                    </Table>
                    </Col>
                    <Col xs={5} md={5} xsOffset={1} smOffset={1} mdOffset={1}>
                      <strong>Conductivity (M/CM)</strong>
                      <Table striped bordered condensed hover>
                    <thead>
                      <tr>


                        <th>Results (M/CM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>


                        <td><input type="number" name="conductivityResult" placeholder="Result" onChange={this.handleChange} value={this.state.conductivityResult} /></td>
                      </tr>


                    </tbody>
                  </Table>
                  </Col>

                      </Row>

                      <hr></hr>
                        <Row>
                          <Col xs={5} md={5}>
                            <strong>pH</strong>
                            <Table striped bordered condensed hover>
                          <thead>
                            <tr>


                              <th>Results</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>


                              <td><input type="number" name="pHResult" placeholder="Result" onChange={this.handleChange} value={this.state.pHResult} /></td>
                            </tr>


                          </tbody>
                        </Table>
                        </Col>
                        <Col xs={5} md={5} xsOffset={1} smOffset={1} mdOffset={1}>
                          <strong>DO (mg/L)</strong>
                          <Table striped bordered condensed hover>
                        <thead>
                          <tr>


                            <th>Results (mg/L)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>


                            <td><input type="number" name="DOResult" placeholder="Result" onChange={this.handleChange} value={this.state.DOResult} /></td>
                          </tr>


                        </tbody>
                      </Table>
                      </Col>

                          </Row>
                          <hr></hr>
                            <Row>
                              <Col xs={5} md={5}><h3>Nitrogen Samples</h3></Col>
                            </Row>
                              <Row>

                              <Col xs={5} md={5}>

                                <strong>Nitrate (mg/L)</strong>
                                <Table striped bordered condensed hover>
                              <thead>
                                <tr>


                                  <th>Results (mg/L)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>


                                  <td><input type="number" name="nitrateResult" placeholder="Result" onChange={this.handleChange} value={this.state.nitrateResult} /></td>
                                </tr>


                              </tbody>
                            </Table>
                            </Col>
                            <Col xs={5} md={5} xsOffset={1} smOffset={1} mdOffset={1}>
                              <strong>Nitrite (mg/L)</strong>
                              <Table striped bordered condensed hover>
                            <thead>
                              <tr>


                                <th>Results (mg/L)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>


                                <td><input type="number" name="nitriteResult" placeholder="Result" onChange={this.handleChange} value={this.state.nitriteResult} /></td>
                              </tr>


                            </tbody>
                          </Table>
                          </Col>

                              </Row>
                              <Row>
                                <Col xs={5} md={5}>
                                  <strong>Ammonia (mg/L)</strong>
                                  <Table striped bordered condensed hover>
                                <thead>
                                  <tr>


                                    <th>Results (mg/L)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>


                                    <td><input type="number" name="ammoniaResult" placeholder="Result" onChange={this.handleChange} value={this.state.ammoniaResult} /></td>
                                  </tr>


                                </tbody>
                              </Table>
                              </Col>
                              <Col xs={5} md={5} xsOffset={1} smOffset={1} mdOffset={1}>
                                <strong>Total Inorganic Nitrogen (mg/L)</strong>
                                <Table striped bordered condensed hover>
                              <thead>
                                <tr>


                                  <th>Results (mg/L)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>


                                  <td> {this.state.totalInorganicNitrogen}</td>
                                </tr>


                              </tbody>
                            </Table>
                            </Col>

                                </Row>




                      <hr></hr>


                        <Row>
                          <Col xs={5} md={5}>
                            <strong>Turbidity (NTU)</strong>
                            <Table striped bordered condensed hover>
                          <thead>
                            <tr>


                              <th>Results (NTU)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>


                              <td><input type="number" name="turbidityResult" placeholder="Result" onChange={this.handleChange} value={this.state.turbidityResult} /></td>
                            </tr>


                          </tbody>
                        </Table>
                        </Col>
                        <Col xs={5} md={5} xsOffset={1} smOffset={1} mdOffset={1}>
                          <strong>TSSResult (mg/L)</strong>
                          <Table striped bordered condensed hover>
                        <thead>
                          <tr>


                            <th>Results (mg/L)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>


                            <td><input type="number" name="TSSResult" placeholder="Result" onChange={this.handleChange} value={this.state.TSSResult} /></td>
                          </tr>


                        </tbody>
                      </Table>
                      </Col>

                          </Row>







                <button>Add sample</button>
              </form>
        </section>
        <button onClick={this.writeData}>Overwrite Data</button>
        </Col>
        </Row>

        </Grid>
      </Tab>



    </Tabs>


    </Col>
    </Row>
    </Grid>

    </div>
        )
            }
          }
