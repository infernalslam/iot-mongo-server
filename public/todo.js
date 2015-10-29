angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this

     todoList.name ='tak'
    
     todoList.show =[]

     todoList.add = function (input){
        var data_input = {
            Data: {
               timestamp: input.timestamp,
               iot_id: input.iot_id, 
               temperature: input.temperature, 
               relative_humidity: input.relative_humidity
                }
        }
        todoList.show.push(data_input)
     }

  });