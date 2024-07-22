const DarkMode = document.getElementById("dark-mode");
const buttons1 = document.getElementsByClassName("btn");

DarkMode.onchange = darkmodechange;

loopThrowDOMS(buttons1, function(element) {
    
});

function darkmodechange(event){
    const thisElementValue = event.target.value;
    const darkModeClass = "dark";

    loopThrowDOMS(buttons1,function(element){
        if(thisElementValue=="light" && element.classList.contains(darkModeClass)){
            element.classList.remove(darkModeClass);
        }
        else if (thisElementValue=="dark" && !element.classList.contains(darkModeClass)){
            element.classList.add(darkModeClass);
        }
    });

    if(thisElementValue=="light" && calcu.classList.contains(darkModeClass)){
        calcu.classList.remove(darkModeClass);
    }
    else if(thisElementValue == "dark" && calcu.classList.contains(darkModeClass)){
        calcu.classList.add(darkModeClass);
    }
}
var num1;
var opr;
function numberClicked(number){
    var result = document.getElementById("result");

    if (clear == true) {
        num1=result.value;
        result.value = "";
        clear = false;
    }
    result.value = result.value + number;
}

var clear = false;

function oprClicked(oper){
    clear = true;
    opr=oper;
}

function equalClickes(){
    var result = document.getElementById("result");
    var num2=result.value;

    switch(opr){
        case "+":
          result.value =   parseInt(num1) + parseInt(num2);
          break;

        case "-":
          result.value =   parseInt(num1) - parseInt(num2);
          break;

        case "*":
          result.value =   parseInt(num1) * parseInt(num2);
          break;

        case "/":
          result.value =   parseInt(num1) / parseInt(num2);
          break;

        case "root":
            result.value = Math.sqrt(num2);
            break;
        case "tan":
            result.value = Math.tan(num2);    
            break;
         case "cos":
             result.value = Math.cos(num2);    
             break;
         case "sin":
           result.value = Math.sin(num2);    
             break;
    }
}

function clearH(){
    var result = document.getElementById("result");
    result.value="";
    clear = false;
    num1="";
    num2="";

}










function loopThrowDOMS(doms, funcHandler) {
    const tmpDOMS = Array.from(doms);
    tmpDOMS.forEach(funcHandler);
}