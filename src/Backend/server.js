const express =require("express")
const app =express()
const bodyParser =require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const Api = require( "./Routes/Api")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    next()
})
app.use('/', Api)

mongoose.connect("mongodb://localhost/recipe-site-db", { useNewUrlParser: true } )


const port = 3030
app.listen(port, function(){
    console.log(`listening to ${port}`)
})





























// const User = require("./Models/userSchema")
// const Recipe = require("./Models/recipeSchema")

// mongoose.connect("mongodb://localhost/recipe-site-db", { useNewUrlParser: true } )

// const u1 = new User ({ ID: "a1s2d3", name: "chen ulfan", email: "c@gmail.com" })
// const u2 = new User ({ ID: "a1s2", name: "dan mano", email: "cssssss@gmail.com" })
// const u3 = new User ({ ID: "a1s2sadasd", name: "cat stevens", email: "cssssss@gmail.com" })
// const l1 = new Like ({ user: u2 })
// const l2 = new Like ({ user: u3 })
// const r1 = new Recipe ({ title: "cake", publisher: u1, likes: [l1,l2] })

// u1.save()
// u2.save()
// u3.save()
// l1.save()
// l2.save()
// r1.save()











