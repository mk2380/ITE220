window.onload = function() {
    var weather = { 
        render:function(){
            
            var bangkok = document.getElementById("bangkok");
            var london = document.getElementById("london");
            var seoul = document.getElementById("seoul");
            


            bangkok.addEventListener("click",             //bangkok
                function() {
                            $.ajax({
                                type: "GET",
                                url: "http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=metric&appid=55d193b8cc97a9dfba634b0c0297f27a",
                                success: function(data) {
                                    console.log(data);
                                    // alert(data.main.temp);
                                    var city = document.getElementById("city-name");
                                    city.textContent = data.name;
                                    var icon = document.getElementById("icon");
                                    icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
                                    var currentWeather = document.getElementById("currentWeather");
                                    currentWeather.textContent = data.weather[0].main + " - " + data.weather[0].description;
                                    var temp = document.getElementById("temp");
                                    temp.innerHTML = data.main.temp + "&degC";
                                }
                            });
                        });
           
            london.addEventListener("click",               //london
                function() {                            
                            $.ajax({
                                type: "GET",
                                url: "http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=55d193b8cc97a9dfba634b0c0297f27a",
                                success: function(data) {
                                    console.log(data);
                                    // alert(data.main.temp);
                                    var city = document.getElementById("city-name");
                                    city.textContent = data.name;
                                    var icon = document.getElementById("icon");
                                    icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
                                    var currentWeather = document.getElementById("currentWeather");
                                    currentWeather.textContent = data.weather[0].main + " - " + data.weather[0].description;
                                    var temp = document.getElementById("temp");
                                    temp.innerHTML = data.main.temp + "&degC";
                                }
                            });
                        });
             seoul.addEventListener("click",               //seoul
                function() {                            
                            $.ajax({
                                type: "GET",
                                url: "http://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=55d193b8cc97a9dfba634b0c0297f27a",
                                success: function(data) {
                                    console.log(data);
                                    // alert(data.main.temp);
                                    var city = document.getElementById("city-name");
                                    city.textContent = data.name;
                                    var icon = document.getElementById("icon");
                                    icon.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
                                    var currentWeather = document.getElementById("currentWeather");
                                    currentWeather.textContent = data.weather[0].main + " - " + data.weather[0].description;
                                    var temp = document.getElementById("temp");
                                    temp.innerHTML = data.main.temp + "&degC";
                                }
                            });
                        });
        }
    };
    weather.render();
};