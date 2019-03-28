// // openWeathermap api key
// var APIKey = "768a68bb25d21de64b7a8a700f01f618";

// // var city = $("#city-input").val().trim();
// var city = "atlanta,usa";

// var weatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

// $.ajax({
//   url: weatherQueryURL,
//   method: "GET"
// }).then(function(response){
//     // console.log(response);
//     // console.log("temperature high: " + response.main.temp_max);
//     // console.log("Temperatur low: " + response.main.temp_min);
//     // console.log("Humidity: " + response.main.humidity);
//     // console.log("Clouds: " + JSON.stringify(response.clouds) + "%");
// });






// api for hackernews
 var apiKey = "e70885d240c04b85a2d289219f0c346b"

//  var searchRequest = $("#search-request").val().trim();

var newsQueryURL = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=" + apiKey
$.ajax({
    url: newsQueryURL,
    method: "GET"
  }).then(function(response){
    for (i = 0; i < 5; i++) {
      console.log(response);
      // console.log(response.articles[i].author);
      console.log(response.articles[i].title);
      // console.log(response.articles[i].description);
      console.log(response.articles[i].url);
      var headlineLink = $("<a href=response.articles[i].url></a>").text("Link: " + response.articles[i].url)

      var articleTitle = $("<p>").text("Title: " + response.articles[i].title);
      $("#hacker-headlines").append(articleTitle, headlineLink)
    }
  });
 
  var searchRequest = "programming with javascript"
  var newsQueryURL =  "https://newsapi.org/v2/everything?q=" + searchRequest + "&apiKey=" + apiKey
  $("#submit-button").on("click", function (event){
    event.preventDefault();

$.ajax({
    url: newsQueryURL,
    method: "GET"
  }).then(function(response){
     console.log(response, response.articles[1].title);
    
      $("#searchDiv").append("title: " + response.articles[1].title);


     })
  });
