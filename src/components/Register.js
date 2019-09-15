import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { observer, inject } from 'mobx-react'
import axios from 'axios';

@inject("register", "login")
@observer

class Register extends Component {

  handleInput = (e) => {
    this.props.register.handleInput(e.target.name, e.target.value)
  }
  signToFB = () => {
    if(this.props.register.name.length<5){
      alert("Please Enter Full Name")
      return
    }
    firebase.auth().createUserWithEmailAndPassword(this.props.register.email, this.props.register.password).then((u) => {
      this.props.register.changeFirebaseId(u.user.uid)
      this.props.login.log()
      this.addUser()
      this.props.register.clear()
      return u.user.uid
    })
      .catch((error) => {
        alert(error.message);
      })
  }
  addUser = async () => {
    const user = this.props.register.getUser
    await axios.post("http://localhost:3030/add/user", user)
  }

  render() {
    return (

      <div className="register-form-background">
        <div className="register-form-wrapper">
          <h1> Register </h1>
          <div className="question">
            <input id="register-inp" autocomplete="off" type="text" name="name" onChange={this.handleInput} placeholder="Name" required />
          </div>
          <div className="question">
            <input id="register-inp" autocomplete="off" type="email" name="email" onChange={this.handleInput} placeholder="Email Address" required />
          </div>
          <div className="question" >
            <input id="register-inp" name="password" onChange={this.handleInput} type="password" placeholder="Password" required />
          </div>
          <div className="register-btn" onClick={this.signToFB} >Register</div>
          <Link to="/login" className="link-register"> <div className="account-link"> Already have an acount ? </div > </Link>
        </div>
      </div>
    )

  }
}
export default Register;