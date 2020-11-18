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
