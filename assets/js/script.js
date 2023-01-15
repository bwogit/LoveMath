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
                alert(`you clicked ${gameType}`)
        }
        })
    }
})
function runGame () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function checkAnswer () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

function displaySubstractQuestion () {

}

function displayMultiplyQuestion () {

}

