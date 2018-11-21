import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';
import ItemsComponent from './ItemsComponent';
import { fire } from '../fire';


export default class About extends Component {

  state = {
    tasks: {},
    authenticated: false,
    loading: true
  }
  tasksRef = '';
  componentWillMount(){
    this.removeAuthListener = fire.auth().onAuthStateChanged(user=>{
      if(user){
        this.tasksRef = fire.database().ref(`tasks/${user.uid}`)
        this.tasksRef.on('value', data => {
          this.setState({
            authenticated: true,
            tasks: data.val(),
            loading: false
          })
        })
      } else {
        this.setState({
          authenticated: false,
          loading: false
        })
      }
    })
  }


  completeTask=(id)=>{
    this.tasksRef.update({
      [id]:{
        ...this.state.tasks[id],
        completed: true
      }
    })
  }
  deleteTask = (id) => {
    this.tasksRef.update({
      [id]: null
    })
  }
  addTask=(e)=> {
    e.preventDefault();
    this.tasksRef.push({
      task: this.todoTask.value,
      completed: false
    })

  }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Tasks Not Finished</h3>
            <ItemsComponent
                tasks={this.state.tasks}
                done={false}
                action={this.completeTask}
                addTask={this.addTask}
                authenticated={this.state.authenticated}
                inputRef={el => this.todoTask= el}
                />
              <h3>Tasks Finished</h3>
                <ItemsComponent
                    tasks={this.state.tasks}
                    done={true}
                    authenticated={this.state.authenticated}
                    action={this.deleteTask}
                    />




            </Col>
        </Grid>
      </div>
    )
  }
}
