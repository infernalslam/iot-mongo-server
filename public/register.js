angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

     
    

  /* function getHomeworks () {
     $http.get('/api/homework')
              .then(function success (response) {
          todoList.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }*/

    todoList.register = function (input) {
      alert('success Acount:'+input.name)
      saveRegister(input)
    }

    function saveHomework (data){
      $http.post('/api/login', data) //insert object
        .then(function success (response) {
          console.log(response)
          //getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })

    }

 

          


       


  })






















































 
