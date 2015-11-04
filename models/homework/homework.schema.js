;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  /*test*/
 
  var Schema = mongoose.Schema

  var schema = new Schema({

       timestamp: {type: Date, default: Date.now},
       iot_id: Number, 
       temperature: Number, 
       relative_humidity: Number
     

  })



  module.exports = mongoose.model(modelName, schema)
})()
