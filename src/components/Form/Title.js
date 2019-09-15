import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Title extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    render() {

        return (
            <div className="row upload-title">
                <span className="c1-info"> Title:</span>
                <div className="c2-info" >
                    <input className="input-upload" placeholder="Cheese Cake" autoComplete="off" type="text" name="title" onChange={this.handleInput} value={this.props.recipeform.title} required />
                </div>
            </div>
        )

    }
}
export default Title;