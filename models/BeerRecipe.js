const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerRecipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: true
    }
})

const BeerRecipe = mongoose.model( 'BeerRecipe', beerRecipeSchema )

module.exports = BeerRecipe;