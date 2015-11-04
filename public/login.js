angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

  
    todoList.adduser = function  (input) {
          console.log('yes')
          $http.get('/api/login')
            .then(function success (response) { 
              todoList.login = response.data
               
                for(var i =0;i<response.data.length;i++){
                  
                  if(response.data[i].username==input.username && response.data[i].password==input.password){
                    console.log(' success : '+response.data[i].username)
                    break;
                  }
                  else if(response.data[i].username!=input.username && response.data[i].password!=input.password){
                    console.log('err')
                  }
                }

              //console.log(todoList.login)
              //console.log(response)
            }, function error (response) {
              alert(response.data.message)
            })
        }

    
  })






















































 
