function createGrid(size)
{
    let container = document.querySelector('.container');
    container.innerHTML='';
    for(let i=0;i<size;i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<size;j++)
        {
            let elem = document.createElement('div');
            elem.classList.add('elem');
            row.appendChild(elem);
        }
        container.appendChild(row);
    }
}
createGrid(4);
let sizeButton=document.querySelector('.get-size');
sizeButton.addEventListener('click',() => {
    let size = Math.max(1,Math.min(+prompt(),100));
    createGrid(size);
});
/*function getComputerChoice() {
    numchoice=Math.random()*3
    if(numchoice <1) return("Rock")
    else if(numchoice <2) return("Paper")
    else if(numchoice <3) return("Scissors")
}
function getHumanChoice() {
    choice = prompt()
    return choice;
}
humanScore=0;
computerScore=0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if(humanChoice === computerChoice)
    {
        console.log("You tied! "+humanChoice+" ties with "+computerChoice);
        document.querySelector(".score").textContent = ("You tied! "+humanChoice+" ties with "+computerChoice);

    }
    else if((humanChoice==="Rock" && computerChoice==="Scissors")||
    (humanChoice==="Paper" && computerChoice==="Rock")||
    (humanChoice==="Scissors" && computerChoice==="Paper"))
    {
        console.log("You won! "+humanChoice+" beats "+computerChoice);
        document.querySelector(".score").textContent = ("You won! "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }
    else
    {
        console.log("You lost! "+humanChoice+" doesn't beat "+computerChoice);
        document.querySelector(".score").textContent = ("You lost! "+humanChoice+" doesn't beat "+computerChoice);
        computerScore++;
    }
    scoreboard = document.querySelector(".curr-score");
    if(humanScore>=5)
    {
        scoreboard.textContent = "Whoo! You beat the computer with "+humanScore+" points! It only had "+computerScore+". :D";
        computerScore = humanScore = 0;        
    }
    else if(computerScore>=5)
    {
        scoreboard.textContent = "Game Over! The computer beat you with "+computerScore+" points! You only had "+humanScore+". :(";
        computerScore = humanScore = 0;
    }
    else
        scoreboard.textContent = "Score: "+humanScore+" - "+computerScore;
}
function playGame() {
    // for(i=0;i<5;i++)
        // playRound(getHumanChoice(),getComputerChoice());
    // if(humanScore===computerScore) console.log("You tied! The score is "+humanScore+" - "+computerScore)
    // else if(humanScore>=computerScore) console.log("You won! The score is "+humanScore+" - "+computerScore)
    // else if(computerScore>=humanScore) console.log("You lost! The score is "+humanScore+" - "+computerScore)
    
}
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => playRound("Rock",getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("Paper",getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("Scissors",getComputerChoice()));
*/

eas = document.querySelector(".etch-a-sketch")