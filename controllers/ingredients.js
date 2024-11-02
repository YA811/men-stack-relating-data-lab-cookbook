// controllers/ingredients.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Ingredient = require('../models/ingredient.js');

router.get('/', async (req,res)=>{
    res.render('ingredients/index.ejs');
});

router.post('/', async (req,res)=>{
   
});

module.exports = router;