//wait for the dom to finish loading before running the Game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit")
                checkAnswer();
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

/**
 * gets the operand (the nunmbers) and the operators (+, -, *, /)
 * directly from the DOM, and return the correct answer
 */

function calculateCorrectAnswer () {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
    } else {
        alert ("ce n'est pas ceci ni cela")
        throw "cen'est ni ceci ni cela";
    }
}

function incrementScore () {

}

/**
 * check the anser agains the first element in the returned calculated array
 */

function checkAnswer () {
    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer[0];

    if (isCorrect) {
        alert("hey you have got it right!!!!!!!:" )
    }else {
        alert(`you answered ${userAnswer}. The correct answer was ${calculatedAnswer}[0]`);
    }
    runGame(calculatedAnswer[1])
    }

    runGame(calculatedAnswer[1])



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

