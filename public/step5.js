function requestNewsfeedData (){
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadNewsfeedJSONAsHTML,
  });
}

function loadNewsfeedJSONAsHTML(result) {
  console.log(result);
  var myString = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    myString += "<h2>" + nextResult['type'] + "</h2>";
  }
  // Set the HTML
  $('.newsfeed').html(myString);
}

requestNewsfeedData ();
