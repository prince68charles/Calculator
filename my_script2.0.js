const operatorButtons = document.querySelector(".operators")

const numberButtons = document.querySelector(".number")

const container = document.querySelector(".container")

const display = document.querySelector(".display")





numberButtons.addEventListener("click", function(e){

   
    
    let num = null

    numberButtons.forEach(button => {

    if (button.id === "one") {
        let num = 1;
        
    }

    else if (button.id === "two") {
        let num = 2;
       
    }

    else if (button.id === "three") {
        let num = 3;
       
    }

    else if (button.id === "four") {
        let num = 4;
        
    }

    else if (button.id === "five") {
        let num = 5;
        
    }

    else if (button.id === "six") {
        let num = 6;
        
    }

    else if (button.id === "seven") {
        let num = 7;
        
    }

    else if (button.id === "eight") {
        let num = 8;
        
    }

    else if (button.id === "nine") {
        let num = 9;
        
    }

    else if (button.id === "zero") {
        let num = 0;
        
    }

    });

});






