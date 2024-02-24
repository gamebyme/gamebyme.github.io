var i = 0;
var txt = "...And my world is made special by you!";
var speed = 80;
var delay = 1550;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
function typeWriter(){
  if (i < txt.length) {
    document.getElementById("phrase1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log('Page loaded')
  }
}
window.onload = setTimeout(typeWriter, 1550)
