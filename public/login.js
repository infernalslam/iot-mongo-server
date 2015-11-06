angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

  
    todoList.adduser = function  (input) {
          
          $http.get('/api/login')
            .then(function success (response) { 
              todoList.login = response.data
                var userpass = false //status user authentication
                for(var i =0;i<response.data.length;i++){ //forloop
                  
                  if(response.data[i].username==input.username && response.data[i].password==input.password){
                    console.log(' success : '+response.data[i].username)
                    userpass = true
                    break;
                  }
                } // forloop

                if (userpass == false){
                  console.log ('Error')
                  alert('no account try again')
                } else if (userpass==true) {
                  window.location = "report.html"
                }

              //console.log(todoList.login)
              //console.log(response)
            }, function error (response) {
              alert(response.data.message)
            })
        }

        todoList.getindex = function (){

          window.location = "index.html"
        }

    
  })






















































 
