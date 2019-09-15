import React, { Component } from 'react';

import './App.css';
import { observer, inject } from 'mobx-react'
import LogedHeadBar from './components/Loged-HeadBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/Landing';
import Log from './components/Log';
import firebase from './Firebase';
import Login from './components/Login-page';
import Register from './components/Register';
import Upload from './components/Upload-page';
import NotLogedHeadBar from './components/Not-Logged-HeadBar';
import Recipes from './components/Edit/Recipes';





@inject("auth")
@observer

class App extends Component {

  componentDidMount() {
    this.authListener();
  }
  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      //  console.log(user);
      if (user) {
        this.props.auth.changeUser(user)
        localStorage.setItem('user', user.uid);
      } else {
        this.props.auth.logout(user)
        localStorage.removeItem('user');
      }
    });
  }


  render() {
    return (
      <Router>
        {this.props.auth.logedUser ?
          (
            <div>
              <LogedHeadBar />
              <Route exact path='/' render={() => <Landing />} />
              <Route exact path='/login' render={() => <Landing />} />
              <Route exact path='/edit/recipes' render={() => <Recipes />} />
              <Route exact path='/recipe/upload' render={() => <Upload />} />
            </div>
          ) :
          <div>
            <NotLogedHeadBar />
            <Route exact path='/' render={() => <Landing />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/register' render={() => <Register />} />
          </div>
        }
      </Router>

    )
  }
}

export default App;
