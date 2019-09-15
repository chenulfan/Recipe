import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import { observer, inject } from 'mobx-react'
import '../Design/login.css'

@inject("login", "user")
@observer

class Login extends Component {

  handleInput = (e) => {
    this.props.login.handleInput(e.target.name, e.target.value)
  }
  login = async () => {
    await firebase.auth().signInWithEmailAndPassword(this.props.login.email, this.props.login.password).then((u) => {
      if (u) {
        this.props.login.log()
      }
    }).catch((error) => {
      alert(error.message);
    });
    this.props.user.getName()

  }

  render() {
    let email = this.props.login.email
    let password = this.props.login.password
    return (
      <div id="login-background">
        <div className="login-form-wrapper">

          <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/02/acai-bowl-recipe-11.jpg"></img>

          <div className="login-c2-rows">
            <h3 className="header-member-login"> Member Login </h3>
            <div className="login-input-wrapper">
              <input id="zxz" type="text" value={email} onChange={this.handleInput} type="email" name="email" className="gate" placeholder="Email:" autoComplete="off" />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="login-input-wrapper">
              <input id="zxz" type="password" value={password} onChange={this.handleInput} type="password" name="password" placeholder="Password" />
              <i className="fas fa-lock"></i>
            </div>

            <div className="login-input-wrapper" >Dont have a user ? <Link to='/register' className='link'>Resgister</Link></div>
            {this.props.login.loged ? <Link to="/"> <div className="login-btn" onClick={this.login} >Login</div> </Link> : <Link > <div className="login-btn" onClick={this.login} >Login</div> </Link>}
          </div>
        </div>



      </div >
    );
  }
}
export default Login;