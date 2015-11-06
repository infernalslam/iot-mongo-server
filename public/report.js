angular.module('todoApp', [])
  .controller('TodoListController', function($http ,$interval) {
    var todoList = this;
    



    getChart1()
    getChart2()
    getChart3()
    getChart4()
    getChart5()
    getChart6()
    getChart7()
    getChart8()
    getChart9()
    getChart0()

    $interval(function () {
    getChart1()
    getChart2()
    getChart3()
    }, 10000)

    $interval(function (){
    getChart4()
    getChart5()
    getChart6()
    getChart7()
    },11000)

    $interval (function (){
      getChart8()
      getChart9()
      getChart0()
    },12000)


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

/////////////////////////////////////////////////////function 2 ///////////////////////////////////////////
function getChart2 () {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==2){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart2").getContext("2d")
               var myPieChart2 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart2.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart2.addData({
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



/////////////////////////////////////////////////////function 3///////////////////////////////////////////
function getChart3 () {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==3){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart3").getContext("2d")
               var myPieChart3 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart3.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart3.addData({
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
////////////////////////////////////////////////////function 4///////////////////////////////////////////
function getChart4() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==4){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart4").getContext("2d")
               var myPieChart4 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart4.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart4.addData({
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

////////////////////////////////////////////////////function 5///////////////////////////////////////////
function getChart5() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==5){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart5").getContext("2d")
               var myPieChart5 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart5.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart5.addData({
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



////////////////////////////////////////////////////function 6///////////////////////////////////////////
function getChart6() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==6){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart6").getContext("2d")
               var myPieChart6 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart6.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart6.addData({
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


////////////////////////////////////////////////////function 7///////////////////////////////////////////
function getChart7() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==7){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart7").getContext("2d")
               var myPieChart7 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart7.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart7.addData({
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

///////////////////////////////////////////////////function 8///////////////////////////////////////////
function getChart8() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==8){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart8").getContext("2d")
               var myPieChart8 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart8.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart8.addData({
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

///////////////////////////////////////////////////function 9///////////////////////////////////////////
function getChart9() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==9){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart9").getContext("2d")
               var myPieChart9 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart9.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart9.addData({
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

///////////////////////////////////////////////////function 10///////////////////////////////////////////
function getChart0() {
        $http.get('/api/homework')
              .then(function success (response) {
         
                 

                         var data = []


              var temp = 0
              var relative = 0
              var count = 1
              ////////////////////////////////////////////////
              for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==0){
                      
                        count ++
                        temp  = temp + response.data[i].temperature
                        relative = relative + response.data[i].relative_humidity
                       }
                   
                }
               



              /////////////////////////////////////////////////////////////////
               var ctx = document.getElementById("myPieChart0").getContext("2d")
               var myPieChart0 = new Chart(ctx).Pie(data[0]);

               ////////////////////////////////////////////////////////////////
               var averagetemp = temp / count
               var averagerela = relative / count
///////////////////////////////////////////////////////////////////////////////
                myPieChart0.addData({
                                value: averagetemp,
                                color: "#B48EAD",
                                highlight: "#C69CBE",
                                label: "temperature"
                            });

              myPieChart0.addData({
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























































  }) //angular controller