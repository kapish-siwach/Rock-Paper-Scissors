let print = document.getElementById("message");
let userscrPrint= document.getElementById("userScore");
let compscrPrint= document.getElementById("compScore");
let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");

const genrateCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
}

const draw =()=>{
    print.innerHTML="Game Draw. Play Again";
    print.style.backgroundColor="grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscrPrint.innerHTML=`${userScore}`;
        print.innerHTML=`You Win!🎉 Your ${userChoice} beats ${compChoice}`;
        print.style.backgroundColor="green";
    }else{
        compScore++;
        compscrPrint.innerHTML=`${compScore}`;
        print.innerHTML=`You Lose!😢 ${compChoice} beats Your ${userChoice}`;
        print.style.backgroundColor="red";
    }
}

const game= (userChoice)=>{
    // user Choice
    console.log("User=",userChoice);

    // computer choice
    const compChoice=genrateCompChoice();
    console.log("Computer=",compChoice); 

    // compare
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else{
            if(userChoice==="paper"){
                userWin=compChoice==="scissors"? false : true;
            }else{
                userWin = compChoice==="rock"?false : true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }

    }

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    })
})