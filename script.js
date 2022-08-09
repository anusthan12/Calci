var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var displayBuffer = document.getElementById("display-buffer");

displayBuffer.textContent = "N/A";
display.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;
var operatorPressed = false;

document.getElementById("display").addEventListener('click', function() { console.log("Button Pressed!") });

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

function isOperatorPressed() {
  return operatorPressed;
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log("pressed");

    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();

    if (isOperator(value)) {
      operatorPressed = true;
      operator = value;
      operand1 = parseFloat(text);
      displayBuffer.textContent = operand1;
      displayBuffer.textContent += " " + value;
      display.textContent = value;
    } else if (value == "ac") {
      display.textContent = "0";
      displayBuffer.textContent = "N/A";
      operatorPressed = false;
    } else if (value == "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      display.textContent = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes('.')) {
        display.textContent = text + '.';
      } else {
        window.alert("Bad Format!");
      }
    } else if (value == "%") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      display.textContent = operand1
    } else if (value == "=") {
      operand2 = parseFloat(text);
      // displayBuffer.textContent = result;
      var result = eval(operand1 + ' ' + operator + ' ' + operand2);
      if (result || result == "0") {
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      } else { display.textContent = "ERROR" };
      displayBuffer.textContent = result;
    } else {
      if (display.textContent == "0" || isOperatorPressed()) {
        display.textContent = null;
      }
      display.textContent += value;
      operatorPressed = false;
    }
  });
}


var cssElement = document.querySelector(":root");

function themeSetter(themeCode) {
  switch (themeCode) {
    case 0:
      cssElement.style.setProperty('--light-grey', '#e2e0e0');
      cssElement.style.setProperty('--blue', '#7f6cfc');
      cssElement.style.setProperty('--orange', '#ffc877');
      cssElement.style.setProperty('--red', '#c14444');
      cssElement.style.setProperty('--headingColor', 'white');
      cssElement.style.setProperty('--screenBackground', 'whitesmoke');
      cssElement.style.setProperty('--displayBufferColor', 'black');
      cssElement.style.setProperty('--buttonBackground', 'white');
      break;

    case 1:
      cssElement.style.setProperty('--light-grey', '#f9f1de');
      cssElement.style.setProperty('--blue', 'darkblue');
      cssElement.style.setProperty('--orange', '#00FFC6');
      cssElement.style.setProperty('--red', 'green');
      cssElement.style.setProperty('--headingColor', '#f9f871');
      cssElement.style.setProperty('--screenBackground', '#aad5a9');
      cssElement.style.setProperty('--displayBufferColor', 'black');
      cssElement.style.setProperty('--buttonBackground', '#3dff00');
      break;

    case 2:
      cssElement.style.setProperty('--light-grey', 'rgb(20, 19, 19)');
      cssElement.style.setProperty('--blue', 'red');
      cssElement.style.setProperty('--orange', '#d4af72');
      cssElement.style.setProperty('--red', '#BC6FF1');
      cssElement.style.setProperty('--headingColor', '#c7f800');
      cssElement.style.setProperty('--screenBackground', 'rgb(39, 36, 36)');
      cssElement.style.setProperty('--displayBufferColor', '#B8F1B0');
      cssElement.style.setProperty('--buttonBackground', '#3d3838');

      break;
  }
}

var themeCode = 0;


document.getElementById('dropSelect').onchange = function() {
  themeCode = this.value;
  // window.alert(this.value);
  if (themeCode == "0") {
    themeSetter(0);
  } else if (themeCode == "1") {
    themeSetter(1);
  } else if (themeCode == "2") {
    themeSetter(2);
  } else {
    window.alert("Not Available currently!");
  }
  console.log(themeCode);
}
    //themeSetter(1);