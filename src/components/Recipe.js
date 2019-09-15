import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import PopUp from './PopUp-recipe';
import Axios from 'axios';
import Liked from './Liked';


@inject("landing")
@observer

class Recipe extends Component {

    constructor() {
        super()
        this.state = {
            show: false,
            like: false,
            attr: "",
            numOfLikes: 0,
            likedUsers: [],
            showLiked: false,
        }
    }
    componentDidMount = async () => {
        this.getNumOfLikes()
        this.getNumOfLikes()
        this.checkLiked()
        this.whoLiked()
        console.log("rendered")
    }

    show = () => {
        this.setState({ show: true })
    }
    close = () => {
        this.setState({ show: false })
    }
    showLiked = () => {
        this.setState({ showLiked: true })
    }
    closeLiked = () => {
        this.setState({ showLiked: false })
    }
    changeLike = async () => {
        if (localStorage.user) {

            const recipe = this.props.recipe
            const body = {
                user_id: localStorage.user,
                post_id: recipe._id
            }
            if (this.state.like === true) {
                await this.setState({ like: false, attr: "whiteColor" })
                console.log("there")
                await Axios.put("http://localhost:3030/recipe/remove/like", body)
                await Axios.put("http://localhost:3030/user/remove/like", body)
                this.getNumOfLikes()
                this.whoLiked()

            }
            else {
                await this.setState({ like: true, attr: "redColor" })
                console.log("here")
                await Axios.put("http://localhost:3030/recipe/add/like", body)
                await Axios.put("http://localhost:3030/user/add/like", body)
                this.getNumOfLikes()
                this.whoLiked()
            }
        }
        else {
            alert("You must sign to like a recipe")
        }
    }
    checkLiked = async () => {
        if (localStorage.user) {
            const like = await Axios.get(`http://localhost:3030/likes/${this.props.recipe._id}/${localStorage.user}`)
            console.log(like.data)
            if (like.data) {
                this.setState({ attr: "redColor", like: true })
            } else {
                this.setState({ attr: "whiteColor", like: false })
            }
        }
    }
    getNumOfLikes = async () => {
        const recipe = this.props.recipe
        const likes = await Axios.get(`http://localhost:3030/recipe/likes/${recipe._id}`)
        console.log(recipe.title, likes.data.length)
        this.setState({ numOfLikes: likes.data.length })
        // return(likes.data.length)
    }
    whoLiked = async () => {
        const recipe = this.props.recipe
        const users = await Axios.get(`http://localhost:3030/recipe/likes/${recipe._id}`)
        this.setState({ likedUsers: users })
    }
    delete = async () => {
        const recipe = this.props.recipe
        if (window.confirm("Are you sure you want to delete the recipe ?")) {
            await Axios.delete(`http://localhost:3030/delete/user/post/${recipe._id}/${localStorage.user}`)
            // this.props.getFromDB()
            this.props.landing.getUserRecipesFromDB()
        }
    }
    render() {
        const recipe = this.props.recipe
        return (
            <div>

                <div className="recipe" >
                    <img src={recipe.img} onClick={this.show} ></img>
                    <div className="sub-container-recipe">
                        <div className="header-details-recipe" onClick={this.show}  > {recipe.title} </div>
                        <div className="recipe-details-likes-wrapper">
                            <div className="container-details-recipe">
                                <span className="detail-recipe" > {recipe.time} </span>
                                <span  > | </span>
                                <span className="detail-recipe" > {recipe.difficult} </span>
                                <span  > | </span>
                                <span className="detail-recipe" > {recipe.type} </span>
                            </div>
                            <div className="likes-wrapper">
                                <i className={`fas fa-heart ${this.state.attr}`} onClick={this.changeLike}></i>
                                <div className="likes-btn" onClick={this.whoLiked} onClick={this.showLiked} > {this.state.numOfLikes} Likes </div>
                            </div>

                        </div>
                    </div>
                    <div className="inside-box-header" onClick={this.show}  > Recipe </div>
                    {this.state.showLiked ? <Liked users={this.state.likedUsers} close={this.closeLiked} /> : null}
                    {this.props.showX ? <div className="X-recipes" onClick={this.delete}> X </div> : null}
                </div>
                {this.state.show ? <PopUp details={recipe} close={this.close} /> : null}
            </div>
        )

    }
}
export default Recipe;