import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from '../Firebase'
import { observer, inject } from 'mobx-react';
import Axios from 'axios';

@inject("user", "landing", "login")
@observer
class LogedHeadBar extends Component {

    logout = () => {
        firebase.auth().signOut();
        this.props.login.logOut()
        this.props.login.clear()
        this.props.landing.getAllRecipes()
    }
    displayProfile = () => {
        this.props.landing.displayProfile()
    }
    
    render() {
        return (

            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo right"><img onClick={this.displayProfile} className="profile-pic" src="http://www.sclance.com/pngs/profile-icon-png/profile_icon_png_1113578.png" /></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li> <Link to="/" > Home </Link> </li>
                        <li> <Link to="/recipe/upload" > Upload </Link> </li>
                      
                        {this.props.landing.showProfile ?
                            <div>
                                <div className="arrow-up"> </div>
                                <div className="profile-popup">
                                    <h5> Hey, {this.props.user.name} </h5>
                                     <Link className="edit-sub-header" to="/edit/profile"  > Edit Profile </Link> 
                                     <Link className="edit-sub-header" to="/edit/recipes"  > Edit Recipes </Link> 
                                     <Link className="logout" to="/" onClick={this.logout} > Log Out </Link> 
                                </div>
                            </div> :
                            null}

                    </ul>
                </div>
            </nav>
        )

    }
}
export default LogedHeadBar