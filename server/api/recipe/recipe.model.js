'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  owner: Schema.Types.ObjectId,
  title: String,
  minutes: Number,
  description: String,
  people: Number,
  type: String,
  image: String,
  ingredients: [{ name: String, qta: String }],
  tag: [String],
  atedAt: [Date],
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Recipe', RecipeSchema);
