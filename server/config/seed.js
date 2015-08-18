/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Recipe = require('../api/recipe/recipe.model');
var User = require('../api/user/user.model');
var Event = require('../api/event/event.model');
var mongoose = require('mongoose');

Recipe.find({}).remove(function() {
  Recipe.create({
    name: 'Pasta w/ meatballs',
    owner: '55366e779ab9b28305ebbb07',
    title: 'Pasta w/ meatballs',
    minutes: 30,
    description: 'Metti su l\'acqua e butta la pasta',
    people: 4,
    type: 'first serve',
    image: '',
    difficulty: 'easy',
    ingredients: [{ name: 'Pasta', qta: '500gr' },{name: 'meat', qta:'200gr'}],
    tag: ['pasta','primo','uova'],
    ateAt: [],
    price: 'low',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Rice and chicken',
    owner: '55366e779ab9b28305ebbb07',
    title: 'Rice and chicken',
    minutes: 45,
    description: 'Metti su l\'acqua e butta il riso',
    people: 4,
    type: 'first serve',
    image: '',
    difficulty: 'medium',
    ingredients: [{ name: 'Riso', qta: '400gr' },{name: 'chicken', qta:'1'}],
    tag: ['rice','first serve','chicken'],
    ateAt: [],
    price: 'medium',
    createdAt: new Date(),
    updatedAt: new Date()
  }, function(data) {
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

Event.find({}).remove(function () {
  Event.create({
      owner: '55366e779ab9b28305ebbb07',
      recipe: {
        _id: '556322047802b6af04bf1169',
        title: 'Pasta w/ meatballs'
      },
      meal: 'Lunch',
      data: {
        title: 'Lunch: Pasta',
        start: new Date('2015-08-26'),
        color: 'blue',
        backgroundColor: 'dark',
        textColor: 'white'
      }
    }, {
      owner: '55366e779ab9b28305ebbb07',
      recipe: {
        _id: '556322047802b6af04bf116c',
        title: 'Rice and chicken'
      },
      meal: 'Dinner',
      data: {
        title: 'Dinner: Rice',
        start: new Date('2015-08-22'),
        color: 'red',
        backgroundColor: 'white',
        textColor: 'black'
      }
    }, function() {
      console.log('finished populating events');
    }
  );
});
