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
          temperatureSamplingTime: '',
          temperatureAnalysisTime: '',
          temperatureResult: '',
          conductivitySamplingTime: '',
          conductivityAnalysisTime: '',
          conductivityResult: '',
          pHSamplingTime: '',
          pHAnalysisTime: '',
          pHResult: '',
          DOSamplingTime: '',
          DOAnalysisTime: '',
          DOResult: '',
          nitrateSamplingTime: '',
          nitrateAnalysisTime: '',
          nitrateResult: '',
          nitriteSamplingTime: '',
          nitriteAnalysisTime: '',
          nitriteResult: '',
          ammoniaSamplingTime: '',
          ammoniaAnalysisTime: '',
          ammoniaResult: '',
          totalInorganicNitrogen: '',

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
          orders: []


        }
        //these are triggered events.  handleChange is for text box changes
        //handlesubmit is for the form being submitted.
        //every event trigger needs to be bound like is below with .bind
        //we might now have to do this anymore with the newest version of react, but i have it to be safe.







      }

      //event triggered when text boxes of forms, values are changed
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      //event triggered when form is submitted
      handleSubmit = (e) => {
        e.preventDefault();
        //fire.database().ref('samples') refers to the main title of the fire database.
        this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
        const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
        const orderID = fire.database().ref(`/dailySamples/${user.uid}/${orderID}`);
        const newCheckboxKey = firebase.database().ref().child('checkbox').push().key;

        let id = newCheckboxKey;
        let box = id;

        console.log(box);
        const dailySample = {


          id: newCheckboxKey,

          sampleDate: this.state.sampleDate,
          sampleTime: this.state.sampleTime,
          operator: this.state.operator,

          sampleLocation: this.state.sampleLocation,
          temperatureSamplingTime: this.state.temperatureSamplingTime,
          temperatureAnalysisTime: this.state.temperatureAnalysisTime,
          temperatureResult: this.state.temperatureResult,
          conductivitySamplingTime: this.state.conductivitySamplingTime,
          conductivityAnalysisTime: this.state.conductivityAnalysisTime,
          conductivityResult: this.state.conductivityResult,
          pHSamplingTime: this.state.pHSamplingTime,
          pHAnalysisTime: this.state.pHAnalysisTime,
          pHResult: this.state.pHResult,
          DOSamplingTime: this.state.DOSamplingTime,
          DOAnalysisTime: this.state.DOAnalysisTime,
          DOResult: this.state.DOResult,

          nitrateSamplingTime: this.state.nitrateSamplingTime,
          nitrateAnalysisTime: this.state.nitrateAnalysisTime,
          nitrateResult: this.state.nitrateResult,
          nitriteSamplingTime: this.state.nitriteSamplingTime,
          nitriteAnalysisTime: this.state.nitriteAnalysisTime,
          nitriteResult: this.state.nitriteResult,
          ammoniaSamplingTime: this.state.ammoniaSamplingTime,
          ammoniaAnalysisTime: this.state.ammoniaAnalysisTime,
          ammoniaResult: this.state.ammoniaResult,



          checkbox: '<button id="buttonTest" onClick={buttonTest}>Test<button>',
        }




        samplesRef.push(dailySample);
        //this.setState is used to clear the text boxes after the form has been submitted.
        this.setState({

          sampleDate: '',
          sampleTime: '',
          operator: '',

          sampleLocation: '',
          temperatureSamplingTime: '',
          temperatureAnalysisTime: '',
          temperatureResult: '',
          conductivitySamplingTime: '',
          conductivityAnalysisTime: '',
          conductivityResult: '',
          pHSamplingTime: '',
          pHAnalysisTime: '',
          pHResult: '',
          DOSamplingTime: '',
          DOAnalysisTime: '',
          DOResult: '',

          nitrateSamplingTime: '',
          nitrateAnalysisTime: '',
          nitrateResult: '',
          nitriteSamplingTime: '',
          nitriteAnalysisTime: '',
          nitriteResult: '',
          ammoniaSamplingTime: '',
          ammoniaAnalysisTime: '',
          ammoniaResult: '',
          totalInorganicNitrogen: '',




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


    operatorRamon = () => {
      this.setState({
        operator: 'Ramon',
      })
    }
    operatorAnthony = () => {
      this.setState({
        operator: 'Anthony',
      })
    }
    operatorAllen = () => {
      this.setState({
        operator: 'Allen',
      })
    }
    operatorTim = () => {
      this.setState({
        operator: 'Tim',
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


        console.log(startDateData);
        console.log(endDateData);



            //Pulls an array for all of the tss data values






          //chart labels first
          let chartData = [['StartDate', 'EndDate', 'Area', 'Description', 'Responsibility', 'Test']];
          let tssGraph = [['Date', 'TSS Concentration']];
          let bodGraph = [['Date', 'BOD Concentration']];
          let nitrateGraph = [['Date', 'Nitrate Concentration']];
          let nitriteGraph = [['Date', 'Nitrite Concentration']];
          let ammoniaGraph = [['Date', 'Ammonia Concentration']];


          //loop to scan firebase data
          for (let i=0; i < startDateData.length; i++) {
            //push send this data to the back of the chartData variable above.
            chartData.push([new Date(Date.parse(startDateData[i])), new Date(Date.parse(endDateData[i])), (areaData[i]), (descriptionData[i]), (responsibilityData[i]), (checkboxData[i])]);

            this.setState({
              chartData: chartData,
              startDateData: startDateData,


            })



          }
          console.log(chartData);
          console.log(areaData);
          areaData.sort();






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
              temperatureSamplingTime: orders[order].temperatureSamplingTime,
              temperatureAnalysisTime: orders[order].temperatureAnalysisTime,
              temperatureResult: orders[order].temperatureResult,
              conductivitySamplingTime: orders[order].conductivitySamplingTime,
              conductivityAnalysisTime: orders[order].conductivityAnalysisTime,
              conductivityResult: orders[order].conductivityResult,
              pHSamplingTime: orders[order].pHSamplingTime,
              pHAnalysisTime: orders[order].pHAnalysisTime,
              pHResult: orders[order].pHResult,
              DOSamplingTime: orders[order].DOSamplingTime,
              DOAnalysisTime: orders[order].DOAnalysisTime,
              DOResult: orders[order].DOResult,

              nitrateSamplingTime: orders[order].nitrateSamplingTime,
              nitrateAnalysisTime: orders[order].nitrateAnalysisTime,
              nitrateResult: orders[order].nitrateResult,
              nitriteSamplingTime: orders[order].nitriteSamplingTime,
              nitriteAnalysisTime: orders[order].nitriteAnalysisTime,
              nitriteResult: orders[order].nitriteResult,
              ammoniaSamplingTime: orders[order].ammoniaSamplingTime,
              ammoniaAnalysisTime: orders[order].ammoniaAnalysisTime,
              ammoniaResult: orders[order].ammoniaResult,





            });
          }
          this.setState({
            orders: newState,
            totalInorganicNitrogen: this.state.ammoniaResult + this.state.nitriteResult + this.state.nitrateResult,
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
          temperatureSamplingTime: orders[order].temperatureSamplingTime,
          temperatureAnalysisTime: orders[order].temperatureAnalysisTime,
          temperatureResult: orders[order].temperatureResult,
          conductivitySamplingTime: orders[order].conductivitySamplingTime,
          conductivityAnalysisTime: orders[order].conductivityAnalysisTime,
          conductivityResult: orders[order].conductivityResult,

          pHSamplingTime: orders[order].pHSamplingTime,
          pHAnalysisTime: orders[order].pHAnalysisTime,
          pHResult: orders[order].pHResult,
          DOSamplingTime: orders[order].DOSamplingTime,
          DOAnalysisTime: orders[order].DOAnalysisTime,
          DOResult: orders[order].DOResult,

          nitrateSamplingTime: orders[order].nitrateSamplingTime,
          nitrateAnalysisTime: orders[order].nitrateAnalysisTime,
          nitrateResult: orders[order].nitrateResult,
          nitriteSamplingTime: orders[order].nitriteSamplingTime,
          nitriteAnalysisTime: orders[order].nitriteAnalysisTime,
          nitriteResult: orders[order].nitriteResult,
          ammoniaSamplingTime: orders[order].ammoniaSamplingTime,
          ammoniaAnalysisTime: orders[order].ammoniaAnalysisTime,
          ammoniaResult: orders[order].ammoniaResult,



        });
      }
      this.setState({
        area: snapshot.child('area').val(),
        responsibility: snapshot.child('responsibility').val(),
        startDate: snapshot.child('startDate').val(),
        endDate: snapshot.child('endDate').val(),
        description: snapshot.child('description').val(),
        id: snapshot.child('id').val(),
        key: 2,


        sampleDate: snapshot.child('sampleDate').val(),
        sampleTime: snapshot.child('sampleTime').val(),
        operator: snapshot.child('operator').val(),

        sampleLocation: snapshot.child('sampleLocation').val(),
        temperatureSamplingTime: snapshot.child('temperatureSamplingTime').val(),
        temperatureAnalysisTime: snapshot.child('temperatureAnalysisTime').val(),
        temperatureResult: snapshot.child('temperatureResult').val(),
        conductivitySamplingTime: snapshot.child('conductivitySamplingTime').val(),
        conductivityAnalysisTime: snapshot.child('conductivityAnalysisTime').val(),
        conductivityResult: snapshot.child('conductivityResult').val(),

        pHSamplingTime: snapshot.child('pHSamplingTime').val(),
        pHAnalysisTime: snapshot.child('pHAnalysisTime').val(),
        pHResult: snapshot.child('pHResult').val(),
        DOSamplingTime: snapshot.child('DOSamplingTime').val(),
        DOAnalysisTime: snapshot.child('DOAnalysisTime').val(),
        DOResult: snapshot.child('DOResult').val(),

        nitrateSamplingTime: snapshot.child('nitrateSamplingTime').val(),
        nitrateAnalysisTime: snapshot.child('nitrateAnalysisTime').val(),
        nitrateResult: snapshot.child('nitrateResult').val(),
        nitriteSamplingTime: snapshot.child('nitriteSamplingTime').val(),
        nitriteAnalysisTime: snapshot.child('nitriteAnalysisTime').val(),
        nitriteResult: snapshot.child('nitriteResult').val(),
        ammoniaSamplingTime: snapshot.child('ammoniaSamplingTime').val(),
        ammoniaAnalysisTime: snapshot.child('ammoniaAnalysisTime').val(),
        ammoniaResult: snapshot.child('ammoniaResult').val(),




      })


});
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
        temperatureSamplingTime: orders[order].temperatureSamplingTime,
        temperatureAnalysisTime: orders[order].temperatureAnalysisTime,
        temperatureResult: orders[order].temperatureResult,
        conductivitySamplingTime: orders[order].conductivitySamplingTime,
        conductivityAnalysisTime: orders[order].conductivityAnalysisTime,
        conductivityResult: orders[order].conductivityResult,

        pHSamplingTime: orders[order].pHSamplingTime,
        pHAnalysisTime: orders[order].pHAnalysisTime,
        pHResult: orders[order].pHResult,
        DOSamplingTime: orders[order].DOSamplingTime,
        DOAnalysisTime: orders[order].DOAnalysisTime,
        DOResult: orders[order].DOResult,

        nitrateSamplingTime: orders[order].nitrateSamplingTime,
        nitrateAnalysisTime: orders[order].nitrateAnalysisTime,
        nitrateResult: orders[order].nitrateResult,
        nitriteSamplingTime: orders[order].nitriteSamplingTime,
        nitriteAnalysisTime: orders[order].nitriteAnalysisTime,
        nitriteResult: orders[order].nitriteResult,
        ammoniaSamplingTime: orders[order].ammoniaSamplingTime,
        ammoniaAnalysisTime: orders[order].ammoniaAnalysisTime,
        ammoniaResult: orders[order].ammoniaResult,


      });
    }
    this.setState({
      area: '',
      responsibility: '',
      startDate: '',
      endDate: '',
      description: '',
      id: '',
      key: 2,




      sampleDate: '',
      sampleTime: '',
      operator: '',

      sampleLocation: '',
      temperatureSamplingTime: '',
      temperatureAnalysisTime: '',
      temperatureResult: '',
      conductivitySamplingTime: '',
      conductivityAnalysisTime: '',
      conductivityResult: '',

      pHSamplingTime: '',
      pHAnalysisTime: '',
      pHResult: '',
      DOSamplingTime: '',
      DOAnalysisTime: '',
      DOResult: '',

      nitrateSamplingTime: '',
      nitrateAnalysisTime: '',
      nitrateResult: '',
      nitriteSamplingTime: '',
      nitriteAnalysisTime: '',
      nitriteResult: '',
      ammoniaSamplingTime: '',
      ammoniaAnalysisTime: '',
      ammoniaResult: '',




    })

});
  });
}



    removesample = (e) => {
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
        const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
        const orderID = fire.database().ref(`/dailySamples/${user.uid}/${e}`);
      orderID.remove();
    });
    this.setState({

      key: 1,

    })
    }

    handleSelect = (key) => {

  this.setState({key});
}


writeData = (e) => {
  e.preventDefault();
  //fire.database().ref('samples') refers to the main title of the fire database.
  this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
  const samplesRef = fire.database().ref(`dailySamples/${user.uid}`);
  const orderID = fire.database().ref(`/dailySamples/${user.uid}/${this.state.id}`);
  const newCheckboxKey = firebase.database().ref().child('checkbox').push().key;

  let id = newCheckboxKey;
  let box = id;

  console.log(box);
  const dailySample = {


    id: newCheckboxKey,

    sampleDate: this.state.sampleDate,
    sampleTime: this.state.sampleTime,
    operator: this.state.operator,

    sampleLocation: this.state.sampleLocation,
    temperatureSamplingTime: this.state.temperatureSamplingTime,
    temperatureAnalysisTime: this.state.temperatureAnalysisTime,
    temperatureResult: this.state.temperatureResult,
    conductivitySamplingTime: this.state.conductivitySamplingTime,
    conductivityAnalysisTime: this.state.conductivityAnalysisTime,
    conductivityResult: this.state.conductivityResult,

    pHSamplingTime: this.state.pHSamplingTime,
    pHAnalysisTime: this.state.pHAnalysisTime,
    pHResult: this.state.pHResult,
    DOSamplingTime: this.state.DOSamplingTime,
    DOAnalysisTime: this.state.DOAnalysisTime,
    DOResult: this.state.DOResult,

    nitrateSamplingTime: this.state.nitrateSamplingTime,
    nitrateAnalysisTime: this.state.nitrateAnalysisTime,
    nitrateResult: this.state.nitrateResult,
    nitriteSamplingTime: this.state.nitriteSamplingTime,
    nitriteAnalysisTime: this.state.nitriteAnalysisTime,
    nitriteResult: this.state.nitriteResult,
    ammoniaSamplingTime: this.state.ammoniaSamplingTime,
    ammoniaAnalysisTime: this.state.ammoniaAnalysisTime,
    ammoniaResult: this.state.ammoniaResult,



    checkbox: '<button id="buttonTest" onClick={buttonTest}>Test<button>',
  }

  orderID.child("sampleDate").set(this.state.sampleDate);
  orderID.child("sampleTime").set(this.state.sampleTime);
  orderID.child("operator").set(this.state.operator);
  orderID.child("sampleLocation").set(this.state.sampleLocation);
  orderID.child("temperatureSamplingTime").set(this.state.temperatureSamplingTime);
  orderID.child("temperatureAnalysisTime").set(this.state.temperatureAnalysisTime);
  orderID.child("temperatureSamplingTime").set(this.state.temperatureSamplingTime);
  orderID.child("conductivitySamplingTime").set(this.state.conductivitySamplingTime);
  orderID.child("conductivityAnalysisTime").set(this.state.conductivityAnalysisTime);
  orderID.child("conductivityResult").set(this.state.conductivityResult);
  orderID.child("pHSamplingTime").set(this.state.pHSamplingTime);
  orderID.child("pHAnalysisTime").set(this.state.pHAnalysisTime);
  orderID.child("pHResult").set(this.state.pHResult);
  orderID.child("DOSamplingTime").set(this.state.DOSamplingTime);
  orderID.child("DOAnalysisTime").set(this.state.DOAnalysisTime);
  orderID.child("DOResult").set(this.state.DOResult);
  orderID.child("nitrateSamplingTime").set(this.state.nitrateSamplingTime);
  orderID.child("nitrateAnalysisTime").set(this.state.nitrateAnalysisTime);
  orderID.child("nitrateResult").set(this.state.nitrateResult);
  orderID.child("nitriteSamplingTime").set(this.state.nitriteSamplingTime);
  orderID.child("nitriteAnalysisTime").set(this.state.nitriteAnalysisTime);
  orderID.child("nitriteResult").set(this.state.nitriteResult);
  orderID.child("ammoniaSamplingTime").set(this.state.ammoniaSamplingTime);
  orderID.child("ammoniaResult").set(this.state.ammoniaResult);
  orderID.child("ammoniaResult").set(this.state.ammoniaResult);







  //this.setState is used to clear the text boxes after the form has been submitted.

});
}





sortDate = (itemId) => {
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
sortDateBack = (itemId) => {
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
          <Button  onClick={() => this.fillEmpty()} eventKey={2} bsSize="large">+ Create New Sample Log</Button>
        </ButtonToolbar>
          </Col>
          </Row>
          <Col xs={12} md={8}>

      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} defaultActiveKey={1} id="uncontrolled-tab-example">


        <Tab eventKey={1} title="+ Daily Samples">
          <Grid>
            <Row>
            <Button onClick={this.sortDate}>Sort Test</Button>
          <Button onClick={this.sortDateBack}>Sort Test</Button>
        <Button onClick={this.sortDescription}>Sort Test</Button>
      <Button onClick={this.sortDescriptionBack}>Sort Test</Button>
    <Button onClick={this.filterArea}>Filter</Button></Row>
          <Row>


            <Col xs={10} md={10}>


              <Table striped bordered condensed hover>
              <thead>
                <tr>

                  <th>Sample Date</th>
                  <th>Operator</th>
                  <th>pH</th>
                  <th>DO</th>

                </tr>


                {this.state.orders.map((order) => {


                  return (
                    <tr>
                        <td>{order.sampleDate}</td>
                        <td>{order.operator}</td>
                        <td>{order.pHResult}</td>
                        <td>{order.DOResult}</td>
                        <td><button onClick={() => this.fillStates(order.id)}>Edit Sample</button></td>
                        <td><button onClick={() => this.removesample(order.id)}>Remove sample</button></td>
                        </tr>



                  )
                })}


              </thead>
            </Table>





            </Col>
          </Row>
        </Grid>
          </Tab>




      <Tab eventKey={2} >
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
                <input required="true" type="text" name="operator" placeholder="Operator Name?" onChange={this.handleChange} value={this.state.operator} />
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

                    <td><input required="true" type="date" name="sampleDate" placeholder="Date of Sample" onChange={this.handleChange} value={this.state.sampleDate} />
                    </td>
                    <td><input required="true" type="time" name="sampleTime" placeholder="Time of Sample" onChange={this.handleChange} value={this.state.sampleTime} /></td>
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

                          <th>Sample Time</th>
                          <th>Analysis Time</th>
                          <th>Results (C)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <td><input type="time" name="temperatureSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.temperatureSamplingTime} />
                          </td>
                          <td><input type="time" name="temperatureAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.temperatureAnalysisTime} /></td>
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

                        <th>Sample Time</th>
                        <th>Analysis Time</th>
                        <th>Results (M/CM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                        <td><input type="time" name="conductivitySamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.conductivitySamplingTime} />
                        </td>
                        <td><input type="time" name="conductivityAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.conductivityAnalysisTime} /></td>
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

                              <th>Sample Time</th>
                              <th>Analysis Time</th>
                              <th>Results</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>

                              <td><input type="time" name="pHSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.pHSamplingTime} />
                              </td>
                              <td><input type="time" name="pHAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.pHAnalysisTime} /></td>
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

                            <th>Sample Time</th>
                            <th>Analysis Time</th>
                            <th>Results (mg/L)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>

                            <td><input type="time" name="DOSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.DOSamplingTime} />
                            </td>
                            <td><input type="time" name="DOAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.DOAnalysisTime} /></td>
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

                                  <th>Sample Time</th>
                                  <th>Analysis Time</th>
                                  <th>Results (mg/L)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>

                                  <td><input type="time" name="nitrateSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.nitrateSamplingTime} />
                                  </td>
                                  <td><input type="time" name="nitriteAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.nitriteAnalysisTime} /></td>
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

                                <th>Sample Time</th>
                                <th>Analysis Time</th>
                                <th>Results (mg/L)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>

                                <td><input type="time" name="nitriteSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.nitriteAnalysisTime} />
                                </td>
                                <td><input type="time" name="nitriteAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.nitriteAnalysisTime} /></td>
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

                                    <th>Sample Time</th>
                                    <th>Analysis Time</th>
                                    <th>Results (mg/L)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>

                                    <td><input type="time" name="ammoniaSamplingTime" placeholder="Sampling Time" onChange={this.handleChange} value={this.state.ammoniaSamplingTime} />
                                    </td>
                                    <td><input type="time" name="ammoniaAnalysisTime" placeholder="Analysis Time" onChange={this.handleChange} value={this.state.ammoniaAnalysisTime} /></td>
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
