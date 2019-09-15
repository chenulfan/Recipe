import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Profile from './Profile';

@inject("user", "landing", "login")
@observer
class LogedHeadBar extends Component {
    displayProfile = () => {
        this.props.landing.displayProfile()
    }

    render() {
        return (

            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo right"><img onClick={this.displayProfile} className="profile-pic" src="http://www.sclance.com/pngs/profile-icon-png/profile_icon_png_1113578.png" /></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li > <Link to="/" className="head-link" > Home </Link> </li>
                        
                        <Profile />
                    </ul>
                </div>
            </nav>
        )

    }
}
export default LogedHeadBar