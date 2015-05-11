/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Recipe = require('../api/recipe/recipe.model');
var User = require('../api/user/user.model');
var mongoose = require('mongoose');

Recipe.find({}).remove(function() {
  Recipe.create({
    name: 'Pasta alla carbonara',
    owner: '55366e779ab9b28305ebbb07',
    title: 'Pasta alla carbonara',
    minutes: 30,
    description: 'Metti su l\'acqua e butta la pasta',
    people: 4,
    type: 'primo',
    image: '',
    difficulty: 'easy',
    ingredients: [{ name: 'Pasta', qta: '500gr' },{name: 'uova', qta:'6'}],
    tag: ['pasta','primo','uova'],
    ateAt: [],
    price: 'low',
    createdAt: new Date(),
    updatedAt: new Date()
  }, function(data) {
    console.log('DATA:',data);
    console.log('finished populating recipes');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
