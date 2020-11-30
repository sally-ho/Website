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


$("#load_home").click(requestContact);
$("#game_button").click(loadGame);
$("#search_button").click(requestHuntContent);


function requestHuntContent() {
  $(".container").html("");
  $.ajax({url: "hunt.html", success: loadHuntContent});
}

function loadHuntContent(content) {
  $("#hunt_content").html(content);
}
