// console.log("hello")

var apiKey ="f3e794b6f19299364c3a368c93f4e895"

var urlToGetWeather = "http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid="+apiKey

fetch(urlToGetWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("cityName").textContent = data.name
        document.getElementById("temperature").textContent = data.main.temp +" F"
        document.getElementById("humidity").textContent = data.main.humidity + " %"
        document.getElementById("windSpeed").textContent = data.wind.speed + " mph"
    })