//wait for the dom to finish loading before running the Game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit")
                alert("you clicked submit")
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
        }
        })
    }
    runGame("addition")
})

/**
 * The main game "loop", called when the script is loaded and after the answer has been processed
 */
function runGame (gameType) {
    //creates 2 ranndom numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2)
    } else {alert(`unknown game type: ${gameType}`)
    throw `unknown game type: ${gameType}. Aborting`;
}

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}



function checkAnswer () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion (operand1 , operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubstractQuestion () {

}

function displayMultiplyQuestion () {

}

