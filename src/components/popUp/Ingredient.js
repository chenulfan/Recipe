import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import food from "../../Food.json"

@inject("user")

class Ingredient extends Component {

    changeTheList = (e) => {
        this.props.user.changeTheList(e.target.name)
    }

    render() {
        const details = this.props.details
        const i = this.props.i
        return (
            <div>
                <img className="ingredient-pic" src={food[i]} />
                <label>
                    <input type="checkbox" onClick={this.changeTheList} name={i} />
                    <span> {i} </span>
                </label>
            </div>
        )

    }
}
export default Ingredient;