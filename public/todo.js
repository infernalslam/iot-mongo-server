angular.module('todoApp', [])
  .controller('TodoListController', function($http,$interval) {
    var todoList = this
    var chart

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

    /*test delete*/
      //todoList.del_id = ''

      todoList.del = function (input_del,index) {
        alert('delete'+'report:'+index)
        console.log('id :'+input_del)



      }



      /*todoList.iot = response.data
            for(var i =0;i<response.data.length;i++) // loop for length array
            {
            // push data in todoList.polarData
              todoList.polarData.push({
            value: response.data[i].temperature, 
            color: "#46BFBD",
                highlight: "#5AD3D1",
            label: "temperature"
          },
          {
            value: response.data[i].relative_humidity,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "relative_humidity"
          })
            }
            console.log(todoList.polarData)*/

      getChart1 ()

     
      todoList.datachart =[]
      function getChart1 () {
     $http.get('/api/homework')
              .then(function success (response) {
          chart = response.data //testchart
         // console.log(chart[0].temperature)//testchart
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(220,220,220,0.2)",
                                      strokeColor: "rgba(220,220,220,1)",
                                      pointColor: "rgba(220,220,220,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(151,187,205,0.2)",
                                      strokeColor: "rgba(151,187,205,1)",
                                      pointColor: "rgba(151,187,205,1)",
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
                        //temperature = response.data[i].temperature
                        //relative_humidity = response.data[i].relative_humidity
                           myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,"IOT_ID : 1");
                    }
                   
                }
               
                    


              }, function error (response) {
                alert(response.data.message)
              })
          }





           

          

             

            







     


      /*testchart*/


      

      //console.log(todoList.homeworks[0])

      
       




    
   


  })




