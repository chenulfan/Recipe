const express = require("express")
const bodyParser = require("body-parser")
const Api = express()
const nodemailer = require('nodemailer')

const User = require("../Models/userSchema")
const Recipe = require("../Models/recipeSchema")


Api.get("/users", function (req, res) {
    User.find({}).exec(function (err, users) {
        res.send(users)
    })
})

Api.get("/recipes", function (req, res) {
    Recipe.find({}).
        populate('publisher').
        exec(function (err, recipes) {
            res.send(recipes)
        })
})

Api.get("/user/email/:email", function (req, res) {
    User.findOne({ email: req.params.email }).exec(function (err, user) {
        res.send(user)
    })
})

Api.get("/user/recipes/:userId", function (req, res) {
    User.findOne({ ID: req.params.userId }).populate("recipes").exec(function (err, user) {
        res.send(user.recipes)
    })
})

Api.get("/user/id/:id", function (req, res) {
    User.findOne({ ID: req.params.id }).exec(function (err, user) {
        res.send(user)
    })
})

Api.post("/add/user", function (req, res) {
    const newUser = new User(req.body)
    newUser.save()
    res.send(newUser)
})

Api.post("/add/recipe", function (req, res) {
    User.findOne({ ID: req.body.publisher }).exec(function (err, user) {
        const newRecipe = new Recipe(req.body.recipe)
        newRecipe.publisher.push(user._id)
        newRecipe.save()
        res.send(newRecipe)
    })
})
Api.put('/user/add/recipe', function(req,res){
    User.findOne({ID: req.body.u_id}).exec(function(err, user){
        user.recipes.push(req.body.r_id)
        user.save()
        res.send(user)
    })
})

// Recipe.find({}).populate("publisher").exec(function(err ,recipes){ 
//     console.log(recipes[0])
// })

Api.put("/recipe/add/like", function (req, res) {
    User.findOne({ ID: req.body.user_id }).exec(function (err, user) {
        Recipe.findById(req.body.post_id).exec(function (err, recipe) {
            recipe.likes.push(user._id)
            recipe.save()
            res.send(recipe)
        })
    })
})
Api.put("/user/add/like", function (req, res) {
    Recipe.findById(req.body.post_id).exec(function (err, recipe) {
        User.findOne({ ID: req.body.user_id }).exec(function (err, user) {
            user.likes.push(recipe._id)
            user.save()
            res.send(user)
        })
    })
})

Api.put("/user/remove/like", function (req, res) {
    Recipe.findById(req.body.post_id).exec(function (err, recipe) {
        User.findOne({ ID: req.body.user_id }).exec(function (err, user) {
            user.likes = user.likes.filter(l => JSON.stringify(l) !== JSON.stringify(recipe._id) )
            user.save()
            res.send(user)
        })
    })
})
Api.put("/recipe/remove/like", function (req, res) {
    Recipe.findById(req.body.post_id).exec(function (err, recipe) {
        User.findOne({ ID: req.body.user_id }).exec(function (err, user) {
            console.log(recipe.likes)
            recipe.likes = recipe.likes.filter( l => JSON.stringify(l) !== JSON.stringify(user._id) )
            console.log(recipe.likes)
            recipe.save()
            res.send(recipe)
        })
    })
})

Api.get("/likes/:postID/:userID", async function (req, res) {
    const r = await Recipe.findById(req.params.postID)
    const u = await User.findOne({ ID: req.params.userID })
    const like = r.likes.find( l => JSON.stringify(l) === JSON.stringify(u._id) )
    if(like){
        res.send(true)
    }
    else{
        res.send(false)
    }
})



Api.get("/recipe/:id", function(req, res){
    Recipe.findById(req.params.id).exec(function(err,recipe){
        res.send(recipe)
    })
})

Api.get("/recipe/likes/:id", function(req, res){
    Recipe.findById(req.params.id)
    .populate("likes")
    .exec(function(err,recipe){
        res.send(recipe.likes)
    })
})

Api.get("/recipes/user/:userID", async function(req,res){
    const user = await User.findOne({ ID: req.params.userID })
    Recipe.find({publisher: user._id }).populate("publisher").exec(function(err,recipes){
        res.send(recipes)
    })
})

Api.delete("/delete/user/post/:postID", function(req,res){
    Recipe.findByIdAndRemove(req.params.postID).exec(function(err,respond){
        res.send(req.params.postID)
    })
})

Api.post('/send/email', (req, res) => {
    console.log("got To server")
    const helperOptions = req.body
    let transport = {
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'chenulfan961@gmail.com',
            pass: '123456789',
        },
        tls: { rejectUnauthorized: false }
    }
    let transporter = nodemailer.createTransport(transport);
    transporter.sendMail(helperOptions, (err, info) => {
        if (err) { return console.log(err) }
        else { return console.log(info) }
    })
    res.send("Email Sent")
})

module.exports = Api
