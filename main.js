const DarkMode = document.getElementById("dark-mode");
const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const darkModeClass = "dark";
const resultDisplay = document.getElementById("result");

DarkMode.addEventListener("change", (event) => {
    const isDarkMode = event.target.value === "dark";
    
    // Toggle dark mode class on container
    container.classList.toggle(darkModeClass, isDarkMode);

    // Toggle dark mode on buttons
    buttons.forEach((button) => {
        button.classList.toggle(darkModeClass, isDarkMode);
    });
});

let num1;
let opr;
let clear = false;

function numberClicked(number) {
    if (clear) {
        num1 = resultDisplay.value;
        resultDisplay.value = "";
        clear = false;
    }
    resultDisplay.value += number;
}

function oprClicked(operator) {
    clear = true;
    opr = operator;
}

function equalClickes() {
    const num2 = Number(resultDisplay.value);

    switch (opr) {
        case "+":
            resultDisplay.value = Number(num1) + num2;
            break;
        case "-":
            resultDisplay.value = Number(num1) - num2;
            break;
        case "*":
            resultDisplay.value = Number(num1) * num2;
            break;
        case "/":
            resultDisplay.value = num2 === 0 ? "Error" : Number(num1) / num2;
            break;
        case "root":
            resultDisplay.value = num2 < 0 ? "NaN" : Math.sqrt(num2);
            break;
        case "tan":
            resultDisplay.value = Math.tan(num2);
            break;
        case "cos":
            resultDisplay.value = Math.cos(num2);
            break;
        case "sin":
            resultDisplay.value = Math.sin(num2);
            break;
        default:
            resultDisplay.value = "Invalid";
            break;
    }
}

function clearH() {
    resultDisplay.value = "";
    clear = false;
    num1 = "";
}

function handleKeyPress(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        numberClicked(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        oprClicked(key);
    } else if (key === "Enter" || key === "=") {
        equalClickes();
    } else if (key === "c" || key === "C") {
        clearH();
    } else if (key === "r") {
        oprClicked("root");
        equalClickes();
    } else if (key === "s") {
        oprClicked("sin");
        equalClickes();
    } else if (key === "t") {
        oprClicked("tan");
        equalClickes();
    } else if (key === "o") {
        oprClicked("cos");
        equalClickes();
    }
}

// Listen for keyboard events
document.addEventListener("keydown", handleKeyPress);
