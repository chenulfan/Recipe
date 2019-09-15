import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from '../Firebase'

class NotLogedHeadBar extends Component {
    
    render( ) {
        return (

            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li> <Link to="/" className="head-link"> Home </Link> </li>
                        <li > <Link to="/login" className="head-link "> Login </Link> </li>
                    </ul>
                </div>
            </nav>
        )

    }
}
export default NotLogedHeadBar