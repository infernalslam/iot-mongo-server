;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  /*test*/
 
  var Schema = mongoose.Schema

  var schema = new Schema({
    Data: {
       timestamp: Number,
       iot_id: Number, 
       temperature: Number, 
       relative_humidity: Number
     }

  })

  /*test delete*/
  


  module.exports = mongoose.model(modelName, schema)
})()
