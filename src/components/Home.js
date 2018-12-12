import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Menu from './Menu';
import ItemsComponent from './ItemsComponent';
import firebase from 'firebase';



export default class Home extends Component {
  state = {
    items: {},
    authenticated: '',
    loading: ''
  }
  render() {
    return (
      <Grid>
        <Row>
        <Jumbotron>
          <h2>Welcome to City of Winslow</h2>
          <p>Wastewater System Overview</p>
          <Link to="/data">
            <Button bsStyle="primary">Your Data</Button>
          </Link>
        </Jumbotron>
        </Row>



        <Route exact path="/"
          render={props =>
            <ItemsComponent
              items={this.state.items}
              done={false}
              action={this.completeItem}
              addItem={this.addItem}
              authenticated={this.state.authenticated}
              inputRef={el => this.todoItem = el}
              />
          }/>
        <Route exact path="/completed"
          render={props =>
            <ItemsComponent
              items={this.state.items}
              done={true}
              authenticated={this.state.authenticated}
              action={this.deleteItem}
              />
          }/>

      </Grid>
    )
  }
}
