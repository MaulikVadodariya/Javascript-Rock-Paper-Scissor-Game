const rockElement = document.querySelector('#rock');
const paperElement = document.querySelector('#paper');
const scissorElement = document.querySelector('#scissor');
const choiceElements = document.querySelectorAll('.choice');
const userChoiceElement = document.querySelector('#user-choice-element');
const computerChoiceElement = document.querySelector('#computer-choice-element');

const userScoreElement = document.querySelector('#userScoreVal');
const compScoreElement = document.querySelector('#compScoreVal');
const winnerElement = document.querySelector('#winner');


var sound = new Audio(
    "https://praxeds.github.io/theodinproject-rock-paper-scissors/assets/audios/correct-choice-43861.mp3"
);

let userScore = 0;
let computerScore = 0;

const gameReset = () => {
    userScore = 0;
    computerScore = 0;
    userScoreElement.innerHTML = userScore;
    compScoreElement.innerHTML = computerScore; 
    winnerElement.innerHTML = "";
}

choiceElements.forEach((choice) => choice.addEventListener("click" , (e) => {

    if(userScore == 3 || computerScore == 3){
        gameReset();
    }

    userChoiceElement.classList.add("hide");
    computerChoiceElement.classList.add("hide");

    choiceImgElement = e.currentTarget.firstChild.nextSibling.src;
    
    userChoiceElement.src = choiceImgElement;   
    userChoiceElement.classList.remove("hide");

    var randomNumber = Math.floor(Math.random() * choiceElements.length);

    for (var i = 0; i < choiceElements.length; i++) {

        var randomImgSrc  = choiceElements[i].firstChild.nextSibling.src;
        computerChoiceElement.src = randomImgSrc;   

        if(i === randomNumber){ 

            var computerSelection = choiceElements[i];

            setTimeout(()=>{

                sound.play();

                computerChoiceElement.src = randomImgSrc;   
                computerChoiceElement.classList.remove("hide");

           
                if(choice.id == "rock"){
                    if(computerSelection.id == "paper")
                    {
                        computerScore += 1;
                    }
                    else if(computerSelection.id == "scissor")
                    {
                        userScore += 1;
                    }
                }
                else if(choice.id == "paper")
                {
                    if(computerSelection.id == "rock")
                    {
                        userScore += 1;
                    }
                    else if(computerSelection.id == "scissor")
                    {
                        computerScore += 1;
                    }
                } 
                else if(choice.id == "scissor")
                {
                    if(computerSelection.id == "rock")
                    {
                        computerScore += 1;
                    }
                    else if(computerSelection.id == "paper")
                    {
                        userScore += 1; 
                    }
                } 

                userScoreElement.innerHTML = userScore;
                compScoreElement.innerHTML = computerScore; 

                if(userScore == 3){
                    winnerElement.innerHTML = " User";
                }else if(computerScore == 3){
                    winnerElement.innerHTML = " Computer";
                }

            },2000)

            break;
        }
        
    }

}));

