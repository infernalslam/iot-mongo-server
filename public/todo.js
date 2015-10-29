angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this

     /*todoList.name ='tak'
    
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
     }*/
    getHomeworks() // showget api

   function getHomeworks () {
     $http.get('/api/homework')
              .then(function success (response) {
          todoList.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }


    $http.post('/api/homework', data)
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
   


  })




/*
      getHomeworks()
    $interval(function () {
      getHomeworks()
    }, 5000)

    vm.submit = function (input) {
      saveHomework(input)
    }

    vm.toThaiDateTime = function (date) {
      return moment(date).fromNow()
    }

    function getHomeworks () {
      $http.get('/api/homework')
        .then(function success (response) {
          vm.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function saveHomework (data) {
      $http.post('/api/homework', data)
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }*/