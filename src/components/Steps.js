import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Step from './Form/Step';


@inject("recipeform")
@observer

class Steps extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    addStep = () => {
        if (this.props.recipeform.step !== "") {
            this.props.recipeform.addStep()
        }
        else{
            alert("The steps can not be empty")
        }
    }

    render() {
        const form = this.props.recipeform

        return (
            <div className="row">
                <span className="c1-info"> Steps:</span>
                <div className="c2-info-ingredient" >
                    <textarea className="c2-info-ingredient" name="step" onChange={this.handleInput} value={this.props.recipeform.step}>  </textarea>
                    <i className="fas fa-plus plus-amount" onClick={this.addStep}></i>
                </div>
                <br/>
                <div className="c2-info">
                    {this.props.recipeform.steps.map(s => <Step step={s} />)}
                </div>
            </div>

        )

    }
}
export default Steps;