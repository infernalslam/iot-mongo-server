angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this

     todoList.name ='tak'
    
     todoList.show =[]

     todoList.add = function (input){
        var data_input = {
            number1 : input.n1
        }
        todoList.show.push(data_input)
     }

  });