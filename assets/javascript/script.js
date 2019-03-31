// api for hackernews
var apiKey = "e70885d240c04b85a2d289219f0c346b"
var newsQueryURL = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=" + apiKey

$.ajax({
  url: newsQueryURL,
  method: "GET"
}).then(function (response) {
  // loop for our responses
  for (i = 0; i < 6; i++) {
    // console log the responses
    console.log(response);
    console.log(response.articles[i].author);
    console.log(response.articles[i].title);
    console.log(response.articles[i].url);

    // create variables and html elements
    var articleAuthor = $("<p>").text("Author: " + response.articles[i].author);

    var articleUrl = response.articles[i].url

    var headlineLink = $("<a href=" + articleUrl + "></a>").text("Check it out!")

    headlineLink.attr("target", "#");

    var articleTitle = $("<p>").text(response.articles[i].title);

    articleTitle.addClass("article-title");
    // add elements and variables to the page
    $("#hacker-headlines").append(articleTitle, articleAuthor, headlineLink);
  }
});
//  on click function for submit button
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

    // console log responses
    console.log(response, response.articles[1].title);
    console.log(response.articles[i].title);
    console.log(response.articles[i].url);
    // for loop for responses
    for (i = 0; i < 5; i++) {

      // create variables and html elements
      var articleAuthor = $("<p>").text("Author: " + response.articles[i].author);

      var articleUrl = response.articles[i].url;

      var headlineLink = $("<a href=" + articleUrl + "></a>").text("Check it out!")

      headlineLink.attr("target", "#");

      var articleTitle = $("<p>").text(response.articles[i].title);

      articleTitle.addClass("article-title");

      // add elements and variables to the page
      $("#results").append(articleTitle, articleAuthor, headlineLink)
    }
  })
});
