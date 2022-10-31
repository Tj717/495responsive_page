
// document.getElementById('myTopnav').innerHTML = '<a href="index.html">Abstract</a><a href="Idea1.html">Idea 1</a><a class="active" href="Idea2.tml">Idea 2</a><a href="Idea3.html">Idea 3</a><a href="see_also.html">See Also</a><a href="references.html">References</a><a href="javascript:void(0);" class="icon"><i class="fa fa-bars"></i></a>';

let icon = document.getElementsByClassName("icon")[0];
icon.addEventListener('click', responsive_control);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_control() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

