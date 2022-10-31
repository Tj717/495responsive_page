let icon = document.getElementsByClassName("icon")[0];
icon.addEventListener('click', responsive_control);
let button = document.getElementById("button");
button.addEventListener('click', show_code);
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_control() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function show_code() {
  let block = document.getElementById("htmlcode");
  if (block.style.display === "none") {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
}
