const express = require('express');
const router = express.Router();
const beerRecipesCtrl = require('../controllers/beerRecipes');

// GET /movies/new
router.get('/', beerRecipesCtrl.showBeerRecipes);

router.post('/', beerRecipesCtrl.createBeerRecipe)

module.exports = router;