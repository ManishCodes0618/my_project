let userC = 0 ;
let compC = 0;
let msg = document.querySelector("#message");
const choices= document.querySelectorAll(".choice");

const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
    console.log("The game was draw.");
    msg.innerText = "The game was draw. Play again.";
    msg.style.backgroundColor = "black"
}

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.style.backgroundColor = "green"
        console.log("User won the game.");
        msg.innerText = `You win. ${userChoice} beats ${compChoice}`;
        userC++;
        userScore.innerText = userC;
    }
    else{
        msg.style.backgroundColor = "red"
        console.log("Computer won the game.");
        msg.innerText = `You lose. ${userChoice} can't beat ${compChoice}`;
        compC++;
        compScore.innerText = compC;
    }
}

const play = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = getCompChoice();
    console.log("computer choice is ", compChoice);
    if(userChoice===compChoice){
        drawGame() ;
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = (compChoice==="paper"?false:true);
        }
        else if(userChoice==="paper"){
            userWin = (compChoice==="scissor"?false:true);
        }
        else{
            userWin = ( compChoice==="rock"?false: true);
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    })
})
