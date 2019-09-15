const mongoose = require('mongoose')
const user = require('./userSchema')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    img: String,
    title: String,
    type: String,
    time: String,
    difficult: String,
    ingredients: [],
    amounts: [],
    steps: [],
    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    publisher: [{ type: Schema.Types.ObjectId, ref: "user" }]
})
const Recipe = mongoose.model( "recipe" , recipeSchema )

module.exports = Recipe