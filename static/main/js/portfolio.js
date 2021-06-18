// TOGGLE BUTTON TO SHOW DIV CONTENT PORTFOLIO PAGE
// FOR THE SEA WORLD TAB
const content = document.getElementById("hiddenInfo")
const button = document.getElementById("showMore")

button.onclick = function(){

  if(content.className == "open"){
    //shrink box
    content.className = "";
    button.innerHTML = "Project Details +";
  } else {
    // expand the box
    content.className = "open";
    button.innerHTML = "Hide Details -";
  }

}
