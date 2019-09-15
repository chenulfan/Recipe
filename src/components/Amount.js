import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Amount extends Component {

    remove = () => {
        this.props.recipeform.removeAmount(this.props.amount)
    }
    render() {
        return (
            <div className="upload-amounts-wrapper">
                <i className="fas fa-minus" onClick={this.remove}></i>
                <span className="amount-item"> {this.props.amount} </span>
            </div>
        )

    }
}
export default Amount;