angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this




    
      ////////////////////////////////////////////////////////// Chart js ////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




          


       


  })