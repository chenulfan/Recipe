
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Time extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }
    
    render() {

        return (
            <div className="row">
                <span className="c1-info"> Prparation Time:</span>
                <div className="c2-info" >
                    <input className="input-upload" placeholder="30 minutes" autoComplete="off" type="text" name="time" onChange={this.handleInput} value={this.props.recipeform.time} required />
                </div>
            </div>
        )

    }
}
export default Time;