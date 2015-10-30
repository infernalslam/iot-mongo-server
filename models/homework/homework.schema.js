;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  /*test*/
 
  var Schema = mongoose.Schema

  var schema = new Schema({

       timestamp: Number,
       iot_id: Number, 
       temperature: Number, 
       relative_humidity: Number
     

  })

  /*test delete*/
  /*
      // get the user starlord55
      User.find({ username: 'starlord55' }, function(err, user) {
        if (err) throw err;

        // delete him
        user.remove(function(err) {
          if (err) throw err;

          console.log('User successfully deleted!');
        });
      });
      ---------------------------------------
            // find the user with id 4
      User.findOneAndRemove({ username: 'starlord55' }, function(err) {
        if (err) throw err;

        // we have deleted the user
        console.log('User deleted!');
      });
      ----------------------------------------
      // find the user with id 4
      User.findByIdAndRemove(4, function(err) {
        if (err) throw err;

        // we have deleted the user
        console.log('User deleted!');
      });

  */
  


  module.exports = mongoose.model(modelName, schema)
})()
