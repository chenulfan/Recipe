import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './popUp/Header.js';
import Details from './popUp/Details.js';
import { observer, inject } from 'mobx-react'
import Ingredient from './popUp/Ingrdient-popup.js';
import Amounts from './popUp/Amounts.js';
import Steps from './popUp/Steps.js';

@inject("landing")
@observer

class PopUp extends Component {

    close = () => {
        this.props.close()
    }

    render() {

        const details = this.props.details
        console.log(details)
        return (
            <div >
                <div className="blur" onClick={this.close}>  </div>
                <div className="popUp">
                    <Header details={details} />
                    <img className="img-popup" src={details.img} />
                    <Details details={details} />
                    <div className="popup-sub-header"> what do we need ? </div>
                    <Ingredient ingredients={details.ingredients} />
                    <div className="popup-sub-header"> Amounts: </div>
                    <Amounts amounts={details.amounts} />
                    <div className="popup-sub-header"> Steps: </div>
                    <Steps steps={details.steps}/>
                </div>
            </div>


        )

    }
}
export default PopUp