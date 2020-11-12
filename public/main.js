function requestContact() {
  unloadConten()t;
  $.ajax({url: "/public/contact.html", success: loadContent});
}


function changeSomeHtml() {
  $("#load_chocolate").innerHTML = "This is the new content";
}

$("#load_home").click(changeSomeHtml);
$("#load_home").click(requestContact);
