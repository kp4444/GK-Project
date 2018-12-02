import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Menu from './Menu';
import ItemsComponent from './ItemsComponent';
import firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';

const filesPath = 'uploadedFiles';

const handlers = {
  // Uploads files and push's objects containing metadata to database at dbPath
  onFilesDrop: props => files => {
    // uploadFiles(storagePath, files, dbPath)
    return props.firebase.uploadFiles(filesPath, files, filesPath);
  },
  onFileDelete: props => (file, key) => {
    // deleteFile(storagePath, dbPath)
    return props.firebase.deleteFile(file.fullPath, `${filesPath}/${key}`);
  }
};



export default class files extends Component {

  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };

  render() {
    return (

      <Grid>
              <form>
                <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
    Select your awesome avatar
                <input
                  type="text"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleChangeUsername}
                />
                <label>Avatar:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.avatarURL && <img src={this.state.avatarURL} />}
                <FileUploader
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref("images")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
            </label>
              </form>
          </Grid>


    )
  }
}
