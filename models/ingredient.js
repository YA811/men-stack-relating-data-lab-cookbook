const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({

name:{
    type: String,
    required: true,
    description: 'The name of the ingredient.',
},
});

module.exports = mongoose.model('Ingredient', ingredientSchema);