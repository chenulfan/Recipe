import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Ingredient from '../Ingredient';


@inject("recipeform")
@observer

class Ingredients extends Component {

    addIngredients = () => {
        if (this.props.recipeform.ingredient !== "") {
            this.props.recipeform.addIngredients()
        }
        else{
            alert("The ingredient can not be empty")
        }

    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.props.recipeform.handleInput(e.target.name, e.target.value)
    }

    render() {
        const form = this.props.recipeform

        return (
            <div className="row">
                <span className="c1-info"> Ingredients:</span>
                <div className="c2-info-ingredient" >
                    <div className="c2-info ingredient-row" >
                        <input className="input-upload" placeholder="Milk" autoComplete="off" type="text" name="ingredient" onChange={this.handleInput} value={this.props.recipeform.ingredient} required />
                        <div className="btn-add-ing" onClick={this.addIngredients}> <i className="fas fa-plus"></i></div>
                    </div>
                    <div className="c2-info ingredient-wrapper">
                        {form.ingredients.length > 0 ? form.ingredients.map(i => <Ingredient ingredientItem={i} />) : null}
                    </div>
                </div>
            </div>
        )

    }
}
export default Ingredients;