// openWeathermap api key
var APIKey = "768a68bb25d21de64b7a8a700f01f618";

// var city = $("#city-input").val().trim();
var city = "atlanta,usa";

var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

$.ajax({
  url: weatherQueryURL,
  method: "GET"
}).then(function(response){
    // console.log(response);
    // console.log("temperature high: " + response.main.temp_max);
    // console.log("Temperatur low: " + response.main.temp_min);
    // console.log("Humidity: " + response.main.humidity);
    // console.log("Clouds: " + JSON.stringify(response.clouds) + "%");
});


// api for hackernews
 var apiKey = "e70885d240c04b85a2d289219f0c346b"

//  var searchRequest = $("#search-request").val().trim();




var newsQueryURL = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=" + apiKey
$.ajax({
    url: newsQueryURL,
    method: "GET"
  }).then(function(response){
      console.log(response);
      console.log(response.articles[1].author);
      console.log(response.articles[1].title);
      console.log(response.articles[1].description);
      console.log(response.articles[1].url);
     
  });
 
  var searchRequest = "programming with javascript"
  var newsQueryURL =  "https://newsapi.org/v2/everything?q=" + searchRequest + "&apiKey=" + apiKey

$.ajax({
    url: newsQueryURL,
    method: "GET"
  }).then(function(response){
     console.log(response, response.articles[1]);
     
  });
