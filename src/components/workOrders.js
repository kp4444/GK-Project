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

const products = [];

function addProducts(quantity) {





  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
    console.log(products);
  }
}




addProducts(10);

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



export default class workOrders extends Component {


    constructor() {
        super();
        this.state = {
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.writeData = this.writeData.bind(this);
        this.writeData1 = this.writeData1.bind(this);


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
        const samplesRef = fire.database().ref(`workOrders/${user.uid}`);
        const orderID = fire.database().ref(`/workOrders/${user.uid}/${orderID}`);
        const newCheckboxKey = firebase.database().ref().child('checkbox').push().key;

        let id = newCheckboxKey;
        let box = id;

        console.log(box);
        const sample = {


          id: newCheckboxKey,
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

        });
      });
    }

    buttonTest = () => (
      console.log("testing")
    );


    removeRow1 = (orderId) => {

      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/workOrders/${user.uid}/${orderId}`);
      sampleRef.remove();
      if (document.getElementById("myCheck").checked == true){
      sampleRef.remove();
    } else {
      console.log("nothing to remove");
    }
  });

  const x = document.getElementById("myCheck").checked;
  const y = document.getElementById("myCheck1").checked;
   console.log([x,y]);



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
          const samplesRef = fire.database().ref(`workOrders/${user.uid}`);
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
              area: orders[order].area

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
      const sampleRef = fire.database().ref(`/workOrders/${user.uid}/${itemId}`);
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
          responsibility: orders[order].responsibility

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



      })


});
    });
  }

  createNewWorkOrder (itemId) {

      let area = '';
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/workOrders/${user.uid}/${itemId}`);
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
          responsibility: orders[order].responsibility

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



      })


});
    });




  }

    removesample(itemId) {
      this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      const sampleRef = fire.database().ref(`/workOrders/${user.uid}/${itemId}`);
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
  const samplesRef = fire.database().ref(`workOrders/${user.uid}`);
  const orderID = fire.database().ref(`/workOrders/${user.uid}/${this.state.id}`);
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
  }

  orderID.child("area").set(this.state.area);
  orderID.child("responsibility").set(this.state.responsibility);
  orderID.child("description").set(this.state.description);
  orderID.child("startDate").set(this.state.startDate);
  orderID.child("endDate").set(this.state.endDate);





  //this.setState is used to clear the text boxes after the form has been submitted.

});
}
writeData1 (e) {
  e.preventDefault();
  //fire.database().ref('samples') refers to the main title of the fire database.
  this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
  const samplesRef = fire.database().ref(`workOrders/${user.uid}`);
  const orderID = fire.database().ref(`/workOrders/${user.uid}/${this.state.id}`);
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
  }


  orderID.child("responsibility").set(this.state.responsibility);






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





















      render() {
        return (
          <div>

            <Grid>
              <Row>
                <Row>
                  <Col xs={6} md={6}>
                <h3>Maintenance Work Order</h3>
                </Col>
                <Col xs={6} md={6}>
                  <ButtonToolbar style={styles.topPad}>
                <Button  onClick={() => this.fillStates()} eventKey={2} bsSize="large">+ Create New Maintenance Work Order</Button>
              </ButtonToolbar>
                </Col>
                </Row>
                <Col xs={12} md={8}>

            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} defaultActiveKey={1} id="uncontrolled-tab-example">


              <Tab eventKey={1} title="+ Workorders">
                <Grid>
                <Row>

                  <Col xs={8} md={8}>
                    <section className='display-item'>
                        <div className="wrapper">
                          <ul>
                            {this.state.orders.map((order) => {
                              console.log(order.area);


                              return (
                                <Grid>

                                    <Row>
                                    <Col xs={10} md={10}>
                                <Table>
                                <thead>

                                  <tr>

                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Area</th>
                                    <th>Description</th>
                                    <th>Responsibility</th>

                                  </tr>
                                  <tr>
                                    <td>{order.startDate}</td>
                                    <td>{order.endDate}</td>
                                    <td>{order.area}</td>
                                    <td>{order.description}</td>
                                    <td>{order.responsibility}</td>
                                    <td><button onClick={() => this.fillStates(order.id)}>Edit Work Order</button></td>




                                    </tr>
                                    </thead></Table>
                                </Col>
                                    </Row>
                                    </Grid>






                              )
                            })}
                          </ul>
                        </div>

                    </section>




                  </Col>
                </Row>
              </Grid>
                </Tab>




            <Tab eventKey={2} >
              <Grid>
                <Row>
                  <Col xs={6} md={6}>
              <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                      <h2>Maintenance Work Order</h2>

                      <hr></hr>
                      <Row>
                        <Col xs={3} md={3}>
                        <ButtonToolbar>
                          <DropdownButton title="Area" id="dropdown-size-medium">
                            <MenuItem eventKey="1" onSelect={this.areaChangeInfluent}>Influent Pump Station</MenuItem>
                            <MenuItem eventKey="2" onSelect={this.areaChangeHeadworks}>Headworks</MenuItem>
                            <MenuItem eventKey="3">FEB</MenuItem>
                            <MenuItem eventKey="4">Oxidation Ditches</MenuItem>
                          </DropdownButton>
                        </ButtonToolbar>
                      </Col>
                      <Col xs={5} md={5}>

                        <strong>{this.state.area}</strong>

                        </Col>

                        </Row>
                        <hr></hr>
                          <Row>
                            <Col xs={3} md={3}>
                            <ButtonToolbar>
                              <DropdownButton title="Responsibility" id="dropdown-size-medium">
                                <MenuItem eventKey="1" onSelect={this.responsibilityChangeRamon}>Ramon</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.responsibilityChangeRamonChangeAnthony}>Anthony</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.responsibilityChangeRamonChangeAllen}>Allen</MenuItem>
                                <MenuItem eventKey="4" onSelect={this.responsibilityChangeRamonChangeTim}>Tim</MenuItem>
                              </DropdownButton>
                            </ButtonToolbar>
                          </Col>
                          <Col xs={5} md={5} smOffset={2}>

                            <strong>{this.state.responsibility}</strong>

                            </Col>

                            </Row>
                            <hr></hr>






                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Textarea</ControlLabel>
                          <FormControl required="true" componentClass="textarea" name="description" placeholder="textarea" onChange={this.handleChange} value={this.state.description} />
                        </FormGroup>
                      <h3>Work Order Date</h3>
                      <input required="true" type="date" name="startDate" placeholder="What is the date of this Sample?" onChange={this.handleChange} value={this.state.startDate} />
                    <input required="true" type="date" name="endDate" placeholder="What is the date of this Sample?" onChange={this.handleChange} value={this.state.endDate} />
                      <button>Add sample</button>
                    </form>
              </section>
              <button onClick={this.writeData, this.writeData1}>Overwrite Data</button>
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
