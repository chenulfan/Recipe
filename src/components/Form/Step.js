import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Step extends Component {

    remove = () => {
        this.props.recipeform.removeStep(this.props.step.step)
    }
    render() {

        return (

            <div className="upload-amounts-wrapper">
                <i className="fas fa-minus" onClick={this.remove}></i>
                <div className="step-wrapper">
                    <div> Step {this.props.step.length}: </div>
                    <div> {this.props.step.step} </div>
                </div>
            </div>
        )

    }
}
export default Step;