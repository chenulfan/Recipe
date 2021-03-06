
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Difficult extends Component {

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    render() {

        return (
            <div className="row">
                <span className="c1-info"> Difficult:</span>
                <div className="c2-info" >
                    <input className="input-upload" placeholder="Easy" autoComplete="off" type="text" name="difficult" onChange={this.handleInput} value={this.props.recipeform.difficult} required />
                </div>
            </div>

        )

    }
}
export default Difficult;