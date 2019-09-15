import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

import Axios from 'axios';
import PopUp from '../PopUp-recipe';
import Liked from '../Liked';
import Recipe from '../Recipe';


@inject("landing")
@observer

class Recipes extends Component {

    componentDidMount() {
        this.getFromDB()
    }

    getFromDB = async () => {
        let recipes = await Axios.get(`http://localhost:3030/user/recipes/${localStorage.user}`)
        this.props.landing.updateRecipes(recipes.data)
    }
    render() {
        let count =this.props.landing.getRecipes.length
        return (
            <div>
            
                <div className="header-profile-recipes"> {count>0? `You uploaded ${count} Recipes`: "You have no Recipes" }</div>
                <div className="container-recipes">
                    {this.props.landing.getRecipes.length > 0 ? this.props.landing.getRecipes.map(r => <Recipe recipe={r} showX={true} getFromDB={this.getFromDB} />) : null}
                </div>
            </div>
        )

    }
}
export default Recipes;