///*0 - 18: Wow you are young

///19-23: You are getting on in years

///24 and above: Wow, you are really old

//// Don't overthink this - you do not need Arrays or Objects to write this program

var x = prompt("How old are you?", "answer");
var correct = true;
if (x <= 18) {
  alert("Wow! you are young");
} else if (x <= 24) {
  alert("You are getting on in years");
} else {
  alert("Wow, you are really old");
}
