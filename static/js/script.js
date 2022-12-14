let resultField = document.querySelector("#display");
let value1 = 0;
let value2 = 0;
let operator = "";
let operatorClicked = false;

/* Limpiar todo */
function clr() {
    /* Resetear todas las variables */
    resultField.innerText = 0;
    value1 = 0;
    value2 = 0;
    operator = "";
}

/* Click number buttons */
function press(number) {
    /* si el digito actualmente es 0 remplazar por el numero clickeado */
    if (resultField.innerText == 0 || operatorClicked) {
        resultField.innerText = number;
        operatorClicked = false;
    } else {
        /* Si es distinto a 0 entonces concatenar -> 12345 */
        resultField.innerText += number;
    }
}

function setOP(op) {
    /* Obtener el primer valor*/
    value1 = resultField.innerText;
    /* Almacenar el operando */
    operator = op;
    /* Avisar que se hizo click en un operando para restablecer los numeros ingresados */
    operatorClicked = true;

    
}

/* Calcular resultado */
function calculate() {
    
    /* Avisar que se hizo click en un operando */
    operatorClicked = true;

    /* Obtener el segundo valor */
    value2 = resultField.innerText;
    let result = 0;

    /* Parsear el texto a numero */
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    console.log("Primer valor: ", value1);
    console.log("Segundo valor: ", value2);

    if (operator == "+") {

        result = value1 + value2;

    }else if(operator == "-"){

        result = value1 - value2;

    }else if(operator == "*"){

        result = value1 * value2;

    }else if(operator == "/"){

        result = value1 / value2;

    }

    /* Colocar el resultado en el display */
    resultField.innerText = result;
    
    /* Resetear el operando por si se hace click de nuevo no realizar operacion*/
    operator = "";


}