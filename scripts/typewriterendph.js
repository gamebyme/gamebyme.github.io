var i = 0;
var txt = "Congratulations! You have completed the level. Continue the game with the next levels. At the end you will have a very special prize.";
var speed = 80;
var delay = 1500;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
function typeWriter(){
  if (i < txt.length) {
    document.getElementById("phBQ0").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log('Page loaded')
  }
}
window.onload = setTimeout(typeWriter, 1500)