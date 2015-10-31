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

      getChart ()

     
      todoList.datachart =[]

      function getChart () {
     $http.get('/api/homework')
              .then(function success (response) {
          chart = response.data //testchart
         // console.log(chart[0].temperature)//testchart
         var check = []
         var iot_id = []
         var temperature = []
         var relative_humidity = []
         var count=0
          for(var i =0;i<response.data.length;i++){
              if (response.data[i].iot_id==1){
                  count++
                  console.log('count :'+count)

              }
          }
         
         /* var ctx = document.getElementById("c").getContext("2d");
          var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
            }, {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [28, 48, 40, 19, 86, 27, 90]
            }]
          };
           var MyNewChart = new Chart(ctx).Line(data);*/

        }, function error (response) {
          alert(response.data.message)
        })
    }





           

          

             

            







     


      /*testchart*/


      

      //console.log(todoList.homeworks[0])

      
       




    
   


  })




