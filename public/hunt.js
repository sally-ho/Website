$("#remove_game").click(requestHome);

function requestHome() {
  window.location.href = "";
}

var counter = 0;
var foundlist = [false,false,false];
function showImage (type) {
//  alert(type);
  document.getElementById(type).style.opacity = 1;
}
function hideImage (type) {

  var index = 0;
  if(type=='hiddensoccer'){
    index = 0;
  }
  else if(type=='hiddenbanana'){
    index = 1;
  }
  else if(type=='hiddenduck'){
    index = 2;
  }
  if(foundlist[index]==true){
    document.getElementById(type).style.opacity = 1;
  }
  else {
      document.getElementById(type).style.opacity = 0;
  }


}

function revealImage(type) {
  document.getElementById(type).style.opacity = 1;
  var index = 0;
  if(type=='hiddensoccer'){
    index = 0;
  }
  else if(type=='hiddenbanana'){
    index = 1;
  }
  else if(type=='hiddenduck'){
    index = 2;
  }
  if(foundlist[index]==false){
  foundlist[index] = true;
  counter++;
  document.getElementById('foundlist').innerHTML = "Found: "+counter+"/3";
}
}
