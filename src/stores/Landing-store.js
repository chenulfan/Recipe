import { observable, action, computed } from 'mobx'
import Axios from 'axios';

export default class Landing{
    @observable recipes = [] 
    @observable showPopup = false
    @observable showProfile =false 

    @action updateRecipes = (recipes) => {
        this.recipes = recipes
    }
    @action open = () => {
        this.showPopup = true
    }
    @action close = () => {
        this.showPopup = false
    }
    @action displayProfile = () =>{
        this.showProfile = !this.showProfile
    }
    @computed get getRecipes(){
        return this.recipes
    }
    @action getUserRecipesFromDB = async () =>{
        const recipes = await Axios.get(`http://localhost:3030/user/recipes/${localStorage.user}`)
        this.updateRecipes(recipes.data)
    }
    @action getAllRecipes = async () => {
        let recipes = await Axios.get("http://localhost:3030/recipes")
        this.updateRecipes(recipes.data)
    }
    
}