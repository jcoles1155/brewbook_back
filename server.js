require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');

console.log('checking', process.env);

/* PORT */
const PORT = process.env.PORT || 5000;

/*  APP SETUP  */
const app = express();

/*  INTERNAL MODULES  */
const logger = require('morgan');

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

/*  LISTEN  */

app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});