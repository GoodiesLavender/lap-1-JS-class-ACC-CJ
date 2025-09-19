var background = document.getElementById("background-color");
background.addEventListener("click", changeColor, false);

var colors = [
  "red",
  "aqua",
  "cornflowerblue",
  "salmon",
  "orange",
  "black",
  "purple",
  "pink",
];

function changeColor() {
  background.style.backgroundColor = colors[Math.floor(Math.random() * 8 + 1)];
}

var x = prompt("How old are you?", "answer");
var correct = true;
if (x <= 18) {
  alert("Wow! you are junior");
} else if (x <= 24) {
  alert("You are getting to be an adult");
} else {
  alert("Wow, you are senior");
}
