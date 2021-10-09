// console.log("hello")

var apiKey ="f3e794b6f19299364c3a368c93f4e895";

// var urlToGetWeather = "http://api.openweathermap.org/data/2.5/weather?q=" +cityName +"&units=imperial&appid="+apiKey;


var button = document.getElementById("searchCityBtn");
var historyBtn = document.querySelectorAll(".previousCity");

for(i=0; i<historyBtn.length; i++) {
    historyBtn[i].addEventListener("click", searchPreviousCity)
}
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
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.getElementById("fiveDay").setAttribute("style", "display: block;")
            for(i=1; i<=5; i++){
                document.querySelectorAll(".card" +i).textContent = "Humidity: " +data.daily[i].humidity + "%"
                document.querySelectorAll(".temp" +i).textContent = "Temperature: " +data.daily[i].main.temp + "F"
            }
        
        });
    });
})

// function fiveDay(lat, lon){

// }

function searchPreviousCity(){
    event.preventDefault();
    var cityName = this.textContent;
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
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.getElementById("fiveDay").setAttribute("style", "display: block;")
            for(i=1; i<=5; i++){
                document.querySelector("#card" +i).textContent = "Humidity: " +data.daily[i].humidity + "%"
                document.querySelector(".temp" +i).textContent = "Temperature: " +data.daily[i].temp.day + "F"
            }
        });    
    });
}
