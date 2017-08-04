let screen = document.getElementById("screen");
let message = document.getElementById("screenMessage");

let decimalFlag = false;
let parenthFlag = false;
let rootFlag = false;
let powerFlag = false;

let powerTemp;

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

document.body.addEventListener('click', function(event) {
  if (event.target.id === "clearBtn") {
    clearScreen();
  } else if (event.target.id === "decimalBtn") {
    if (decimalFlag) {
      return;
    } else if (screen.textContent) {
      toScreen(".");
      decimalFlag = true;
    } else {
      toScreen("0.");
      decimalFlag = true;
    }
  } else if (event.target.id === "parenthesesBtn") {
      if (parenthFlag) {
        toScreen(")");
        parenthFlag = false;
      } else {
        toScreen("(");
        parenthFlag = true;
      }
  } else if (event.target.id === "caretBtn") {
    if (!screen.textContent) {
      return
    } else {
      if (!powerFlag) {
        powerTemp = screen.textContent;
        message.textContent += powerTemp + "^";
        screen.textContent = "";
        powerFlag = true;
        decimalFlag = false;
      }
    }
  } else if (event.target.id === "rootBtn") {
    if (!rootFlag) {
      message.textContent += ("\u221A");
      decimalFlag = false;
      rootFlag = true;
    }
  } else if ((event.target.id === "addBtn") || (event.target.id === "subtractBtn") || (event.target.id === "multiplyBtn") || (event.target.id === "divideBtn") || (event.target.id === "moduloBtn")){
    if (!screen.textContent) {
      return;
    } else {
      toScreen(event.target.value);
      decimalFlag = false;
    }
  } else if (event.target.id === "equalsBtn") {
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
  } else if (event.target.id === "clearBtn") {
    clearScreen();
  } else if (Number.isInteger(Number(event.target.value))) {
    toScreen(event.target.value);
  }
});
