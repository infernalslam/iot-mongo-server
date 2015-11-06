angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

    /////////////////// fucntion get ////////////////// 
    getHomeworks() // showget api
    //////////////////////////////////////////////////
    var loopget = 0
    $interval(function () {
      getHomeworks()
      loopget ++
      console.log('loop'+loopget)
      //getChart1 ()

    }, 3000)

/////////////////////////////////////////////
   function getHomeworks () {
     $http.get('/api/homework')
          .then(function success (response) {
          todoList.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }
/////////////////////////////////////////////
    todoList.time = function (time){
      return moment(time).format('MMMM Do YYYY, h:mm:ss a')
    }
/////////////////////////////////////////////

///////////////////////////////////////////////
    todoList.submit = function (input) {
      saveHomework(input)
    }
/////////////////////////////////////////////


/////////////////////////////////////////////////
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
/////////////////////////////////////////////////



/////////////////////////////////////////////////

    todoList.delete = function(id,index){
        console.log(id);
        $http.delete('/api/homework/'+id)
          .success(function(data) {
            alert('delete')
            todoList.homeworks.splice(index,1)
            //window.location='index.html'
            
          })
          .error(function(data) {
            alert('error')
            console.log('Error: ' + data)
          })
    }
///////////////////////////////////////////////


  })

 




















































 
