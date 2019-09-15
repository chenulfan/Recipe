import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Axios from 'axios';
import Recipe from './Recipe';
import PopUp from './PopUp-recipe';

@inject("landing", "user")
@observer
class Landing extends Component {

    componentDidMount() {
        this.getFromDB()
        this.props.user.getName()

    }

    getFromDB = async () => {
        let recipes = await Axios.get("http://localhost:3030/recipes")
        this.props.landing.updateRecipes(recipes.data)
    }
    render() {

        console.log(this.props.landing.getRecipes)
        const recipes = this.props.landing.recipes
        // console.log(recipes)
        return (
            <div>
                <div className="container-recipes ">


                    {this.props.landing.getRecipes.length > 0 ? this.props.landing.getRecipes.map(r => <Recipe recipe={r} />) : null}

                </div>
            </div>


        )

    }
}
export default Landing