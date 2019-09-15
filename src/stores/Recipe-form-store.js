import { observable, action, computed } from 'mobx'

export default class Ingredient{

    @observable title = ''
    @observable type = ''
    @observable time = ''
    @observable difficult = ''
    @observable ingredient = ''
    @observable ingredients = [] 
    @observable amount = ''
    @observable amounts = []
    @observable step = ''
    @observable steps = []
    @observable url = 'http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698412.png'
    @observable progress= 0


    @action addIngredients = () => {
        this.ingredients.push(this.ingredient)
        this.ingredient=''
    }
    @action addStep = () => {
        let length = this.steps.length + 1
        this.steps.push({step:this.step, length})
        this.step=''
    }
    @action addAmount = () => {
        this.amounts.push(this.amount)
        this.amount=''
    }
    @action removeIngredient = (ingredient) => {
        this.ingredients = this.ingredients.filter( i => i !== ingredient )
    }
    @action removeAmount = (amount) => {
        this.amounts = this.amounts.filter( a => a !== amount )
    }
    @action removeStep = (step) => {
        this.steps = this.steps.filter( s => s.step !== step )
    }
    @action handleInput = ( input, value ) => {
        this[[input]] = value
    } 
    @action clear = () => {
        this.title = ''
        this.type = ''
        this.time = ''
        this.difficult = ''
        this.title = ''
        this.ingredient = ''
        this.ingredients = []
        this.step = ''
        this.steps = []
        this.amount = ''
        this.amounts = []
        this.url= ''
        this.progress = 0
    }
}