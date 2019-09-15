import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


class Header extends Component {

    render() {
        const details = this.props.details
        return (
            <div className="header-popup-wrapper">
                <div className="box-header-popup"> recipe </div>
                <div className="title-header-popup"> {details.title} </div>
                <div className="header-popup-name"> From : {details.publisher[0].name} </div>
            </div>
        )

    }
}
export default Header;