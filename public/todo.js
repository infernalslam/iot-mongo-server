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
          console.log(chart[0]._id)/*testchart*/
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

      getChart ()

      function getChart () {
     $http.get('/api/homework')
              .then(function success (response) {
          chart = response.data //testchart
          console.log(chart[0]._id)//testchart
          var ctx = document.getElementById("c").getContext("2d");
                var data = {
                  labels: ["iot_id1", "iot_id2", "iot_id3", "iot_id4", "iot_id5", "iot_id6", "iot_id7", "iot_id8" ,"iot_id9"],
                  datasets: [{
                    label: "timestamp",
                    fillColor: "rgba(220,220,69,0.2)",
                    strokeColor: "rgba(220,220,69,1)",
                    pointColor: "rgba(220,220,69,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [8456, 5689, 8575, 8751, 5756, 55, 4750, 156 ,188 , 266]
                  }, {
                    label: "temperature",
                    fillColor: "rgba(89,187,78,0.2)",
                    strokeColor: "rgba(89,187,78,1)",
                    pointColor: "rgba(89,187,78,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [2758, 478, 4750, 1759, 8675, 2757, 90 , 484 , 849 , 494]
                  },{
                    label: "relative_humidity",
                    fillColor: "rgba(151,187,396,0.2)",
                    strokeColor: "rgba(151,187,396,1)",
                    pointColor: "rgba(151,187,396,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [2758, 4578, 405, 1759, 8576, 2577, 90 , 498 ,884 ,4848]
                  }]
                };
                var MyNewChart = new Chart(ctx).Line(data);

        }, function error (response) {
          alert(response.data.message)
        })
    }




      


           

          

             

            







     


      /*testchart*/


      

      //console.log(todoList.homeworks[0])

      
       




    
   


  })




