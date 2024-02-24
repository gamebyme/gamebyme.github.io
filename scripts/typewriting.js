var i = 0;
var txt = "...and you make special mine!";
var speed = 50;
var delay = 5000;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
function typeWriter(){
  if (i < txt.length) {
    document.getElementById("phraseBQ").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log('Page loaded')
  }
}
window.onload = setTimeout(typeWriter, 5000)
