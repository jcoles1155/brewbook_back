const BeerRecipe = require('../models/BeerRecipe')


const showBeerRecipe = async (req, res) => {
    try {
        const recipe = await BeerRecipe.findById(req.params.recipeId);

        return res.status(200).json({
            status: 200,
            recipe,
            requestedAt: new Date().toLocaleString(),
        });
    } catch (error) {
        console.log(error)
    }
}

const createBeerRecipe = async (req, res) => {
    try {
        console.log(req.body, "REQ.BODY in createBeerRecipe")
        const foundBeerRecipe = await BeerRecipe.findOne(req.body)
        if (foundBeerRecipe) throw "Recipe is already created!"
        const recipe = await BeerRecipe.create(req.body)
        BeerRecipe.save()
        res.status(201).json({
            status: 201,
            recipe,
            requestedAt: new Date().toLocaleString()
        })
    } catch (error) {
        console.log(error)
    }
}

const showBeerRecipes = async (req, res) => {
    try {
        console.log("show all Beer Recipes")
        const foundBeerRecipes = await BeerRecipe.Find({});

        return res.status(200).json({
            status: 200,
            foundBeerRecipes,
            requestedAt: new Date().toLocaleString(),
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    showBeerRecipe,
    showBeerRecipes,
    createBeerRecipe,
}