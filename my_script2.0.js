<<<<<<< HEAD
const operatorButtons = document.querySelectorAll(".operator")

const numberButtons = document.querySelectorAll(".number")

const container = document.querySelector(".container")

const display = document.querySelector(".display")


let displayVal = ""



function getNum() {
    
    numberButtons.forEach((button)=> {

    button.addEventListener("click", function(){


        let num= null

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
            num = 9;
        
        }

        else if (button.id === "zero") {
            num = 0;
        
        }


        displayVal += num

        
        
        display.innerText = displayVal

      
        

    });

    })

}

function getOperator() {


    operatorButtons.forEach((button) =>{

    button.addEventListener("click", function(){

        let displayOperator = null



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
        


        
        
        
        display.innerText = displayOperator

        
        

    });

    })

}

 

=======
const operatorButtons = document.querySelector(".operators")

const numberButtons = document.querySelector(".number")

const container = document.querySelector(".container")

const display = document.querySelector(".display")





function getNum(arr) {


    let num = null

    arr.forEach(button => {

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
            num = 9;
        
        }

        else if (button.id === "zero") {
            num = 0;
        
        }

    });

    return num


}






>>>>>>> 666dcc4 (Made getNum function with forEach())
