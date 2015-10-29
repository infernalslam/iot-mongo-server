;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    Data: {
       timestamp: Number,
       iot_id: Number, 
       temperature: Number, 
       relative_humidity: Number
     }

  })

  module.exports = mongoose.model(modelName, schema)
})()
