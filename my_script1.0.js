/**
     This JavaScript file covers all the basic opperations and logic for a calculator
*/

function add (num1,num2) {

    return num1+num2

}


function subtract (num1,num2) {

    return num1-num2

}


function multiply(num1,num2) {

    return num1*num2


}

function divide (num1,num2) {

    return num1/num2

}

function operate (operator, userNum1,userNum2) {


    if (operator === "+") {

        return add(userNum1,userNum2)

    }

    else if (operator === "-") {

        return subtract(userNum1,userNum2)

    }

    else if (operator === "x") {

        return multiply(userNum1,userNum2)

    }

    else if (operator === "÷") {

        return divide(userNum1,userNum2)

    }

    else {

        alert("Not a valid Operator.")

    }
}


