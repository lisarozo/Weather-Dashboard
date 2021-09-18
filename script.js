// console.log("hello")

var apiKey ="f3e794b6f19299364c3a368c93f4e895";

// var urlToGetWeather = "http://api.openweathermap.org/data/2.5/weather?q=" +cityName +"&units=imperial&appid="+apiKey;


var button = document.getElementById("searchCityBtn");
button.addEventListener("click", function(event){
    event.preventDefault();
    var cityName = document.getElementById("searchCity").value;
    console.log(cityName);
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" +cityName +"&units=imperial&appid="+apiKey)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp +" F";
        document.getElementById("humidity").textContent = data.main.humidity + " %";
        document.getElementById("windSpeed").textContent = data.wind.speed + " mph";
    });
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" +cityName +"&appid=" +apiKey)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
})


