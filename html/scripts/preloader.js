// BEGIN SCRIPT
// progressBar

setTimeout(()=> {
  let progressBar = document.getElementById("progressBar")
  let barwidth = 10;
  let ab = setInterval(progressFunction, 10);
  
  function progressFunction() {
    if (barwidth >= 100) {
      clearInterval(ab);
    } else {
      barwidth++;
      progressBar.style.width = barwidth + "%";
    }
    }
  }
, 1000)

// END

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none;"
})

// END

// END SCRIPT