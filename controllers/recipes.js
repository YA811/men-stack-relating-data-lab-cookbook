// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');

// router logic will go here - will be built later on in the lab

router.get('/', async (req, res) => {
    res.render('recipes/index.ejs');
  });

  // new route 
  router.get('/new', async (req, res)=>{
  
    res.render('recipes/new.ejs');
  });

  // create
  router.post('/', async (req, res) => {
try{
  req.body.owner = req.session.user._id;
      await Recipe.create(req.body);
     res.redirect('/recipes');
}
  catch(error){
    res.redirect('/')
  } 
  }); 

  //show route
  router.get('/:recipeId', async (req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.recipeId).populate('owner');
        res.render('recipes/show.ejs', { recipe })
    }
    catch(error){
console.log(error);
res.redirect('/')
    }
  });

  //delete route
  router.delete('/:recipeId', async (req, res) => {
    try {
      await Recipe.findById(req.params.recipeId).deleteOne();
      res.redirect('/recipes');
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });

  //edit route
  router.get('/:recipeId/edit', async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.recipeId);
      res.render('recipes/edit.ejs', { recipe });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });

  //update route
  router.put('/:recipeId', async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.recipeId);
     await recipe.updateOne(req.body);
      res.redirect(`/recipes/${recipe._id}`);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });


module.exports = router;