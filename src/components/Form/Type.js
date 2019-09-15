
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Type extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    render() {

        return (
            <div className="row">
                <span className="c1-info"> Type:</span>
                <div className="c2-info" >
                    <input className="input-upload" placeholder="Dessert" autoComplete="off" type="text" name="type" onChange={this.handleInput}  value={this.props.recipeform.type} required />
                </div>
            </div>

        )

    }
}
export default Type;