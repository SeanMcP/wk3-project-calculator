let screen = document.getElementById("screen");
let message = document.getElementById("screenMessage");
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

let parenth = document.getElementById("parenthesesBtn");
let modulo = document.getElementById("moduloBtn");
let root = document.getElementById("rootBtn");
let caret = document.getElementById("caretBtn");

let decimalFlag = false;
let parenthFlag = false;
let rootFlag = false;
let powerFlag = false;

let powerTemp;

let memory = [];

function sayHello(event){
  if (event.which == 32) {
    console.log("Hello, world!");
  }
}
function activeKeyboard(event){
  if (event.which == 49) { //1
    toScreen(1);
  } else if (event.which == 50) { //2
    toScreen(2);
  }
}

function clearScreen() {
  screen.textContent = "";
  message.textContent = "";
  memory = [];
  decimalFlag = false;
  parenthFlag = false;
  rootFlag = false;
}
function toScreen(num) {
  screen.textContent += num;
}
function condToScreen(val) {
  if (screen.textContent) {
    toScreen(val);
  }
}

// one.addEventListener('click', function() {
//   toScreen(1);
// });

body.addEventListener('click', function(event) {
  if (event.target.id === "clearBtn") {
    console.log("Hello");
  }
})

one.addEventListener('click', toScreen(1));
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
  condToScreen(0);
});
decimal.addEventListener('click', function() {
  if (decimalFlag) {
    return;
  } else if (screen.textContent) {
    toScreen(".");
    decimalFlag = true;
  } else {
    toScreen("0.");
    decimalFlag = true;
  }
})
parenth.addEventListener('click', function() {
  if (parenthFlag) {
    toScreen(")");
    parenthFlag = false;
} else {
    toScreen("(");
    parenthFlag = true;
  }
})

add.addEventListener('click', function() {
  condToScreen("+");
  decimalFlag = false;
});
subtract.addEventListener('click', function() {
  toScreen("-");
  decimalFlag = false;
});
multiply.addEventListener('click', function() {
  condToScreen("*");
  decimalFlag = false;
});
divide.addEventListener('click', function() {
  condToScreen("/");
  decimalFlag = false;
});
caret.addEventListener('click', function() {
  if (!powerFlag) {
    powerTemp = screen.textContent;
    message.textContent += powerTemp + "^";
    screen.textContent = "";
    powerFlag = true;
    decimalFlag = false;
  }
});
modulo.addEventListener('click', function() {
  condToScreen("%");
  decimalFlag = false;
});
root.addEventListener('click', function() {
  if (!rootFlag) {
    message.textContent += ("\u221A");
    decimalFlag = false;
    rootFlag = true;
  }
});

equals.addEventListener('click', function() {
  if (rootFlag) {
    screen.textContent = Math.sqrt(eval(screen.textContent));
    decimalFlag = false;
    rootFlag = false;
    message.textContent = "";
  } else if (powerFlag) {
    screen.textContent = Math.pow(eval(powerTemp), eval(screen.textContent));
    powerFlag = false;
    message.textContent = "";
  } else {
    screen.textContent = eval(screen.textContent);
    decimalFlag = false;
  }
});
clear.addEventListener('click', function() {
  clearScreen();
});
