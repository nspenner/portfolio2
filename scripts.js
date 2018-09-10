var header = document.getElementById("left-column-container");
var links = document.getElementById("links");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var elements = [links, projects, contact];
var colors = ["red", "blue", "green"];

function setBackgroundTransition(element, color) {
  element.addEventListener("mouseenter", function(event) {
    header.style.backgroundColor = color;
  });

  element.addEventListener("mouseleave", function(event) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  });
}

for (i = 0; i < elements.length; i++) {
  setBackgroundTransition(elements[i], colors[i]);
}
