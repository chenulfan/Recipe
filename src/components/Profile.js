import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from '../Firebase'
import { observer, inject } from 'mobx-react';

@inject("user", "landing", "login")
@observer
class Profile extends Component {

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
            <div>
                <div className="arrow-up"> </div>
                <div className="profile-popup">
                    <h5> Hey, {this.props.user.name} </h5>
                    <Link className="edit-sub-header" to="/edit/profile"  > Edit Profile </Link>
                    <Link className="edit-sub-header" to="/edit/recipes"  > Edit Recipes </Link>
                    <Link className="edit-sub-header" to="/recipe/upload"  > Upload </Link>
                    <Link className="logout" to="/" onClick={this.logout} > Log Out </Link>
                </div>
            </div>

        )

    }
}
export default Profile