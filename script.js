var background = document.getElementById('background-color');
background.addEventListener('click', changeColor, false);


var colors = ["red", "aqua", "cornflowerblue", "salmon", "orange", "black", "purple", "pink"];

function changeColor() {
   background.style.backgroundColor =  colors[Math.floor((Math.random()*8)+1)];
}