



// const unirest = require("unirest");



// function foodApi( name) {
//     console.log("im here")
//     unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete")
//     .query({
//         "query": "cheese"
//     })
//     .headers({
//         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         "x-rapidapi-key": "5c10b37d63mshc56bf3b6cd99e48p193ec9jsnd359569991ef"
//     })
//     .end(function (res) {
//         if (res.error) throw new Error(res.error);
    
//         console.log(res.body);
//     });
// }

// module.exports = foodApi