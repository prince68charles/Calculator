/**
     This JavaScript File starts conducting event listners to gather the user input to perform the calculations.
     
*/

const operatorButtons = document.querySelectorAll(".operator")

const numberButtons = document.querySelectorAll(".number")

const container = document.querySelector(".container")

const display = document.querySelector(".display")

const equal = document.getElementById("equal")

const clearCalculator =  document.getElementById("AC")


let displayVal1 = " "

let displayVal2 = " "

let displayOperator = null

let isSecondNum = false


let displayDiv1 = document.createElement("div")
let displayDiv2 = document.createElement("div")
let displayDiv3= document.createElement("div")


function getNum() {
    
    numberButtons.forEach((button)=> {

    button.addEventListener("click", function(){

        
        
       if (isSecondNum === false) {
        
        let num = null

        if (button.id === "one") {
            num = 1;
        
        }

        else if (button.id === "two") {
            num = 2;
       
        }

        else if (button.id === "three") {
            num = 3;
       
        }

        else if (button.id === "four") {
            num = 4;
        
        }

        else if (button.id === "five") {
            num = 5;
        
        }

        else if (button.id === "six") {
            num = 6;
        
        }

        else if (button.id === "seven") {
            num = 7;
        
        }

        else if (button.id === "eight") {
            num = 8;
        
        }

        else if (button.id === "nine") {
            num= 9;
        
        }

        else if (button.id === "zero") {
            num = 0;
        
        }


        displayVal1 += num

        
        displayDiv1.innerText=displayVal1

        display.appendChild(displayDiv1)
        
        }
        
        
        
        else {

            let num = null

        if (button.id === "one") {
            num = 1;
        
        }

        else if (button.id === "two") {
            num = 2;
       
        }

        else if (button.id === "three") {
            num = 3;
       
        }

        else if (button.id === "four") {
            num = 4;
        
        }

        else if (button.id === "five") {
            num = 5;
        
        }

        else if (button.id === "six") {
            num = 6;
        
        }

        else if (button.id === "seven") {
            num = 7;
        
        }

        else if (button.id === "eight") {
            num = 8;
        
        }

        else if (button.id === "nine") {
            num= 9;
        
        }

        else if (button.id === "zero") {
            num = 0;
        
        }


        displayVal2 += num

        
        displayDiv3.innerText=displayVal2

        display.appendChild(displayDiv3)




        }
        

      
        

    });

    })

}

function getOperator() {


    operatorButtons.forEach((button) =>{

    button.addEventListener("click", function(){

        isSecondNum = true 



        if (button.id === "add") {

            displayOperator = "+";
        }

        else if (button.id === "subtract") {

            displayOperator = "-";

        }

        else if (button.id ==="multiply") {
            
            displayOperator = "x";
        
        }
            
        else if (button.id === "divide"){


            displayOperator= "÷";
        }

        else if (button.id ==="AC") {


            displayOperator = "AC"

        }
        


        displayDiv2.innerText=displayOperator

        display.appendChild(displayDiv2)
        
        

    });

    })

}








function getResult () {
   
   
    equal.addEventListener("click", function(){


    realNum1 = parseInt(displayVal1)
    realNum2 = parseInt(displayVal2)






    if (realNum2 === 0 && displayOperator === "÷") {


        display.innerText = "Error, cannot divide by 0"
        return;
    }




    let result = operate(displayOperator,realNum1,realNum2)


    display.innerText = result










})}


clearCalculator.addEventListener("click", function(){


    location.reload()

})


getNum()
getOperator()
getResult()