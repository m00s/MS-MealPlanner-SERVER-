'use strict';

var mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  owner: Schema.Types.ObjectId,
  recipe: {
    _id: Schema.Types.ObjectId,
    title: String
  },
  meal: String,
  data: {
      id: Schema.Types.ObjectId,
      title: String,
      start: Date,
      end: Date,
      allDay: Boolean,
      url: String,
      editable: Boolean,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
      color: String
  }
});

EventSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

EventSchema.set('versionKey', false);


module.exports = mongoose.model('Event', EventSchema);
