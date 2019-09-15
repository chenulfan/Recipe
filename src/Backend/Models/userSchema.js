const mongoose = require('mongoose')
const recipe = require('./recipeSchema')

const Schema = mongoose.Schema

const userShcema = new Schema({
    ID: String,
    name: String,
    email: String,
    recipes: [{ type: mongoose.Types.ObjectId, ref: "recipe" }],
    likes: [{ type: mongoose.Types.ObjectId, ref: "recipe" }]
})

const User = mongoose.model("user", userShcema )

module.exports = User

