let userScore = 0 ;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice") ;
let msg = document.querySelector("#msg") ;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {

    let options = ['rock' , 'paper' , 'scissors'] ;
    let randIdx = Math.floor(Math.random() * 3) ;
    return options[randIdx] ;


};

let playgame = (userChoice) => {

    let compChoice = genCompChoice() ;
    
    if(userChoice === compChoice){
        msg.innerText = "Game is Draw" ;
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userChoice , compChoice, userWin);
    }
} ;

let showWinner = (userChoice , compChoice, userWin) => {
    if(userWin){
        userScore++ ;
        msg.innerText = `You Win , ${userChoice} beats ${compChoice} ` ;
        userScorePara.innerText = userScore ;
    }
    else{
        compScore++ ;
        msg.innerText = `Computer Wins , ${userChoice} beaten by ${compChoice}` ;
        compScorePara.innerText = compScore ;
    }

};

choices.forEach((choice) => {
    
    choice.addEventListener("click" , () => {
        userChoice = choice.getAttribute("id") ;
        playgame(userChoice);
        
    });

});


