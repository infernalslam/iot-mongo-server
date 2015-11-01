angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    

     
    getHomeworks() // showget api
    /*$interval(function () {
      getHomeworks()
    }, 5000)*/

   function getHomeworks () {
     $http.get('/api/homework')
              .then(function success (response) {
          todoList.homeworks = response.data
           chart = response.data /*testchart*/ 
          //console.log(chart[0]._id)/*testchart*/
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
            console.log('Error: ' + data)
          })
    }



    

     



    



      getChart1 ()
      function getChart1 () {
     $http.get('/api/homework')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.2)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.2)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("c").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,"IOT_ID : 1");
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              })
          }


       


  })






















































 
