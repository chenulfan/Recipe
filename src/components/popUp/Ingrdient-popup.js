import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import food from "../../Food.json"
import Ingredients from './Ingredient'
import Axios from 'axios';

@inject("user")
@observer

class Ingredient extends Component {

    sendMail = async () => {
        if (this.props.user.listToArr().length > 0) {
            const user = await Axios.get(`http://localhost:3030/user/id/${localStorage.user}`)
            const list = this.props.user.listToArr().toString()
            console.log(user.data)
            let mail = {
                from: `Recipify <chenulfan961@Gmail.com>`,
                to: user.data.email,
                subject: " Time To Buy ",
                text: `Your grocery list: ${list}`
            }
            await Axios.post('http://localhost:3030/send/email', mail).then(() => {
                console.log("email sent")
            })
        }
    }

    render() {
        const ingredients = this.props.ingredients
        console.log(ingredients)
        return (
            <div>

                <div className="popup-ingredients-wrapper ">
                    {ingredients.map(i => <Ingredients i={i} />)}
                </div>
                <div className="grocery-container underline-box">
                    <span className="ing-sentence"> • Add your missing ingredients - to make a grocery list </span>
                    <div className="grocert-btn-wrapper">
                        <div className="grocery-btn" onClick={this.sendMail}> Send To Email</div>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        )

    }
}
export default Ingredient;