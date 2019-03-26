// openWeathermap api key
var APIKey = "768a68bb25d21de64b7a8a700f01f618";

// var city = $("#city-input").val().trim();
var city = "atlanta,usa";

var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

$.ajax({
  url: weatherQueryURL,
  method: "GET"
}).then(function(response){
    console.log(response);
    console.log("temperature high: " + response.main.temp_max);
    console.log("Temperatur low: " + response.main.temp_min);
    console.log("Humidity: " + response.main.humidity);
    console.log("Clouds: " + JSON.stringify(response.clouds) + "%");
});


// api for hackernews

var newsQueryURL = "https://hacker-news.firebaseio.com/v0/topstories"

$.ajax({
    url: newsQueryURL,
    method: "GET"
  }).then(function(response){
      console.log(response);
     
  });

