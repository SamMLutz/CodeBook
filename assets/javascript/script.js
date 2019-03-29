
// api for hackernews
var apiKey = "e70885d240c04b85a2d289219f0c346b"



var newsQueryURL = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=" + apiKey
$.ajax({
  url: newsQueryURL,
  method: "GET"
}).then(function (response) {
  for (i = 0; i < 5; i++) {
    // console log the response
    console.log(response);
    // console.log(response.articles[i].author);
    console.log(response.articles[i].title);
    // console.log(response.articles[i].description);
    console.log(response.articles[i].url);

    var articleUrl = response.articles[i].url
    
    var headlineLink = $("<a href=" + articleUrl + "></a>").text(response.articles[i].url)

    headlineLink.attr("target", "#");

    var articleTitle = $("<p>").text("Title: " + response.articles[i].title);
    $("#hacker-headlines").append(articleTitle, headlineLink)
  }
});




$("#submit-button").on("click", function (event) {
  event.preventDefault();
  
  var searchRequest = $("#inputField").val().trim();
  var allNewsQueryURL = "https://newsapi.org/v2/everything?q=" + searchRequest + "&apiKey=" + apiKey
  $("#results").empty();
  $("#inputField").val("");
  $.ajax({
    url: allNewsQueryURL,
    method: "GET"
  }).then(function (response) {
    
    console.log(response, response.articles[1].title);
    for (i = 0; i < 5; i++) {
      
      
      var articleUrl = response.articles[i].url;

      var headlineLink = $("<a href=" + articleUrl + "></a>").text(response.articles[i].url)

      headlineLink.attr("target", "#");

      var articleTitle = $("<p>").text("Title: " + response.articles[i].title);
      $("#results").append(articleTitle, headlineLink)

      console.log(response.articles[i].title);
      console.log(response.articles[i].url);
    }
  })
});
