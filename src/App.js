import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Alterations to boilerplate
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: 'AIzaSyC5SCOSz8CkIGD9yB5HbDYbxPYkWgnVptQ',
    authDomain: 'bspace-c3d0a.firebaseapp.com',
    projectId: 'bspace-c3d0a'
});
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


class App extends Component {
    //Alterations to boilerplate
    dbShoot = () => {
         db.collection("emails").add({
             email: "eric@ibm.com",
             time: null
         })
         .then(function(docRef) {
             console.log("Document written with ID: ", docRef.id);
         })
         .catch(function(error) {
             console.error("Error adding document: ", error);
         });
     }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.dbShoot} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        );
    }
    }

export default App;
