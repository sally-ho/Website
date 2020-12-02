function requestContact() {
  unloadContent();
  $.ajax({url: "contact.html", success: loadContent});
}


function loadContent (content){
  $("#game_content").html(content);
}

function loadGame (){
  $("#game_content").html("");
  $.ajax({url: "game.html", success: loadContent});
}

function requestHuntContent() {
  $(".container").html("");
  $.ajax({url: "hunt.html", success: loadHuntContent});
}

function loadHuntContent(content) {
  $("#hunt_content").html(content);
}

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

$("#load_home").click(requestContact);
$("#game_button").click(loadGame);
$("#search_button").click(requestHuntContent);
$("#step5_button").click(requestNewsfeedData);
