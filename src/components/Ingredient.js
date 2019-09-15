import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'


@inject("recipeform")
@observer

class Ingredient extends Component {

    remove = () => {
        this.props.recipeform.removeIngredient(this.props.ingredientItem)
    }
    render() {

        return (
            <div className="c2-info ingredient" > {this.props.ingredientItem} <div className="x-ingredient" onClick={this.remove}> X </div> </div>
        )

    }
}
export default Ingredient;