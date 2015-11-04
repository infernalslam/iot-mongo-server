angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

     
    getHomeworks() // showget api
    //getChart1 () // showchart
    $interval(function () {
      getHomeworks()
      //getChart1 ()

    }, 60000)


   function getHomeworks () {
     $http.get('/api/homework')
          .then(function success (response) {
          todoList.homeworks = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    todoList.time = function (time){
      return moment(time).format('MMMM Do YYYY, h:mm:ss a')
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

/*testdelete*/
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







      //getChart1 ()
      function getChart1 () {
     $http.get('/api/homework')
              .then(function success (response) {
         
                 

                          var data = {
                                labels: [],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        fillColor: "rgba(220,220,220,0.5)",
                                        strokeColor: "rgba(220,220,220,0.8)",
                                        highlightFill: "rgba(220,220,220,0.75)",
                                        highlightStroke: "rgba(220,220,220,1)",
                                        data: []
                                    },
                                    {
                                        label: "My Second dataset",
                                        fillColor: "rgba(151,187,205,0.5)",
                                        strokeColor: "rgba(151,187,205,0.8)",
                                        highlightFill: "rgba(151,187,205,0.75)",
                                        highlightStroke: "rgba(151,187,205,1)",
                                        data: []
                                    }
                                ]
                            };

               var ctx = document.getElementById("c").getContext("2d")
               var myBarChart = new Chart(ctx).Bar(data);


               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myBarChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,"IOT_ID : 1");
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              })
          }




          


       


  })

 




















































 
