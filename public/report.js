angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this;
    



    getChart1()

      function getChart1 () {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart").getContext("2d")
               var myPieChart = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart.addData({
                                value: averagerela,
                                color: "#49F046",
                                highlight: "#49F018",
                                label: "relative_humidity"
                            })

//////////////////////////////////////////////////////////////////
               
                  
               

              }, function error (response) {
                alert(response.data.message)
              })
          }

  })