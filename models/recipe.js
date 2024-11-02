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
    ref:"User",
  },

  ingredients:[{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Ingredient",
  },
  ],
});

module.exports = mongoose.model('Recipe', recipeSchema);








