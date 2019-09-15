import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import firebase from '../Firebase'

import { observer, inject } from 'mobx-react'

import Step from './Form/Step';
import Title from './Form/Title';
import Type from './Form/Type';
import Time from './Form/Time';
import Ingredients from './Form/Ingredients';
import Steps from './Steps';
import Amounts from './Form/Amounts';
import Difficult from './Form/Difficult';
import Picture from './Form/Picture';
import Axios from 'axios';

@inject("recipeform")
@observer

class Upload extends Component {

    some = () => {
        console.log(this.props.recipeform)
    }
    submit = async () => {
        // const user = await Axios.get(`http://localhost:3030/user/id/${localStorage.user}`)
        const rForm = this.props.recipeform
        if (
            rForm.title !== "" &&
            rForm.time !== "" &&
            rForm.type !== "" &&
            rForm.difficult !== "" &&
            rForm.ingredients.length > 1 &&
            rForm.amounts.length > 0 &&
            rForm.steps.length > 0
        ) {
            const recipe =
            {
                recipe: {
                    img: rForm.url,
                    title: rForm.title,
                    type: rForm.type,
                    time: rForm.time,
                    difficult: rForm.difficult,
                    ingredients: rForm.ingredients,
                    amounts: rForm.amounts,
                    steps: rForm.steps
                },
                publisher: localStorage.user
            }

            const r = await Axios.post("http://localhost:3030/add/recipe", recipe)
            console.log(r.data._id)
            await Axios.put("http://localhost:3030/user/add/recipe", {r_id: r.data._id , u_id: localStorage.user} )
            alert("Your recipe uploaded successfully")
            this.props.recipeform.clear()
        }
        else {
            alert("You must fill correctly all the input fields")
        }
    }
    render() {
        return (
            <div className="background-uplaod-page">
                <div className="wrapper-upload-page-form">
                    <div className="upload-page-form">
                        <div className="upload-pic-inputs-wrapper">
                            <div className="upload-input-wrapper">
                                <Title />
                                <Type />
                                <Time />
                                <Difficult />
                            </div>
                            <Picture />
                        </div>

                        <Ingredients />
                        <div className="pic-step-amount-wrapper">
                            <div className="step-amount-wrapper">
                                <Amounts />
                                <Steps />
                            </div>
                        </div>
                        <div className="submit-btn-upload" onClick={this.submit}> submit </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Upload