'use strict';

var mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp'),
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
  difficulty: String,
  ingredients: [{ name: String, qta: String }],
  tag: [String],
  price: String,
  ateAt: [Date]
});

RecipeSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = mongoose.model('Recipe', RecipeSchema);
