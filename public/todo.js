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
         
         var data = [] //datachart
         var count=0
          for(var i =0;i<response.data.length;i++){
              if (response.data[i].iot_id==1){
                  /*count++
                  console.log('count :'+count)*/
                  data.push(
                  {
                      value: response.data[i].temperature,
                      color:"#F7464A",
                      highlight: "#FF5A5E",
                      label: "iot_1"
                  })


              }/*testlooparrary*/
          }
         
         var ctx = document.getElementById("c").getContext("2d");
         
         /* var data = [
                  {
                      value: 300,
                      color:"#F7464A",
                      highlight: "#FF5A5E",
                      label: "Red"
                  },
                  {
                      value: 50,
                      color: "#46BFBD",
                      highlight: "#5AD3D1",
                      label: "Green"
                  },
                  {
                      value: 100,
                      color: "#FDB45C",
                      highlight: "#FFC870",
                      label: "Yellow"
                  },
                  {
                      value: 40,
                      color: "#949FB1",
                      highlight: "#A8B3C5",
                      label: "Grey"
                  },
                  {
                      value: 120,
                      color: "#4D5360",
                      highlight: "#616774",
                      label: "Dark Grey"
                  }

              ];*/
           var MyNewChart =  new Chart(ctx).PolarArea(data);


        }, function error (response) {
          alert(response.data.message)
        })
    }





           

          

             

            







     


      /*testchart*/


      

      //console.log(todoList.homeworks[0])

      
       




    
   


  })




