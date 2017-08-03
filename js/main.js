let screen = document.getElementById("screen");
let one = document.getElementById("oneBtn");
let two = document.getElementById("twoBtn");
let three = document.getElementById("threeBtn");
let four = document.getElementById("fourBtn");
let five = document.getElementById("fiveBtn");
let six = document.getElementById("sixBtn");
let seven = document.getElementById("sevenBtn");
let eight = document.getElementById("eightBtn");
let nine = document.getElementById("nineBtn");
let zero = document.getElementById("zeroBtn");
let decimal = document.getElementById("decimalBtn");

let add = document.getElementById("addBtn");
let subtract = document.getElementById("subtractBtn");
let multiply = document.getElementById("multiplyBtn");
let divide = document.getElementById("divideBtn");
let equals = document.getElementById("equalsBtn");
let clear = document.getElementById("clearBtn");

let memory = [];

function clearScreen() {
  screen.textContent = "";
  memory = [];
  console.log("I cleared the screen");
}
function toScreen(num) {
  screen.textContent += num;
}

one.addEventListener('click', function() {
  toScreen(1);
});
two.addEventListener('click', function() {
  toScreen(2);
});
three.addEventListener('click', function() {
  toScreen(3);
});
four.addEventListener('click', function() {
  toScreen(4);
});
five.addEventListener('click', function() {
  toScreen(5);
});
six.addEventListener('click', function() {
  toScreen(6);
});
seven.addEventListener('click', function() {
  toScreen(7);
});
eight.addEventListener('click', function() {
  toScreen(8);
});
nine.addEventListener('click', function() {
  toScreen(9);
});
zero.addEventListener('click', function() {
  if (screen.textContent){
    toScreen(0);
  }
});
decimal.addEventListener('click', function() {
  // let decimalTest = screen.textContent;
  // if (decimalTest.indexOf(".")) {
  //   return
  // } else
  if (screen.textContent) {
    toScreen(".");
  } else {
    toScreen("0.");
  }
})

add.addEventListener('click', function() {
  screen.textContent += "+";
});
subtract.addEventListener('click', function() {
  screen.textContent += "-";
});
multiply.addEventListener('click', function() {
  screen.textContent += "*";
});
divide.addEventListener('click', function() {
  screen.textContent += "/";
});

equals.addEventListener('click', function() {
  screen.textContent = eval(screen.textContent);
});
clear.addEventListener('click', function() {
  clearScreen();
});
