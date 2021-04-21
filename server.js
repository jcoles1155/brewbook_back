
require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');

console.log('checking', process.env);

/* PORT */
const PORT = process.env.PORT || 5000;

/*  APP SETUP  */
const app = express();

// connect to the database with Mongoose
require('./config/database');

/*  INTERNAL MODULES  */
const logger = require('morgan');

/* Require Routes */
const indexRouter = require('./routes/index');
const beerRecipesRouter = require('./routes/beerRecipes')

/* MIDDLEWARE */
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'Brewbook Rocks!',
    resave: false,
    saveUninitialized: true
}));

/* Mount Routes */
app.use('/', (req, res) => {
    res.send('Brewbook Backend Working');
});
app.use('/', indexRouter);
app.use('/recipes', beerRecipesRouter);

/*  LISTEN  */

app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});