import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Step from './Step';
import Amount from '../Amount';


@inject("recipeform")
@observer

class Amounts extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    addAmount = () => {
        if (this.props.recipeform.amount !== "") {
            this.props.recipeform.addAmount()
        }
        else{
            alert("The amounts can not be empty")
        }
    }

    render() {
        const form = this.props.recipeform

        return (
            <div className="row">
                <span className="c1-info"> Amounts:</span>
                <div className="c2-info-ingredient" >
                    <textarea className="c2-info-ingredient" name="amount" onChange={this.handleInput} value={this.props.recipeform.amount}>  </textarea>
                    <i className="fas fa-plus plus-amount" onClick={this.addAmount}></i>
                </div>
                <br />
                <div className="c2-info">
                    {this.props.recipeform.amounts.map(a => <Amount amount={a} />)}
                </div>
            </div>

        )

    }
}
export default Amounts;