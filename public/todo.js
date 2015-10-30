angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
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
    $interval(function () {
      getHomeworks()
    }, 5000)

   function getHomeworks () {
     $http.get('/api/homework')
              .then(function success (response) {
          todoList.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    todoList.submit = function (input) {
      //alert('yes insert')
      saveHomework(input)
    }

    function saveHomework (data){
      $http.post('/api/homework', data) //insert object
        .then(function success (response) {
          console.log(response)
          getHomeworks()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })

    }

    /*test delete*/
      //todoList.del_id = ''

      todoList.del = function (input_del,index) {
        alert('delete'+'report:'+index)
        console.log('id :'+input_del)



      }








             

              console.log('test')






     


      /*testchart*/

      

      //console.log(todoList.homeworks[0])



      




    
   


  })




