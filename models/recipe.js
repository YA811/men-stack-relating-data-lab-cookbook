const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

name:{
    type: String,
    required: true,
    description: 'The name of the recipe.',
  },

  instructions:{
    type: String,
    required: false,
    description: 'The cooking instructions for the recipe.',
  },

  owner:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    description: 'A reference to the User model.',
  },

  ingredients:{
    type: [mongoose.Schema.Types.ObjectId],
    required: false,
    description: 'An array of references to the Ingredient model.'
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);








