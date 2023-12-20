let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".result");

let userScore = document.querySelector(".left");
let botScore = document.querySelector(".right");

let UserChoice = document.querySelector("#userChoice");
let BotChoice = document.querySelector("#botChoice");

let gameCount = document.querySelector(".gameCount");

let reset = document.querySelector(".reset");

let userScoreCount = 0;
let botScoreCount = 0;
let totalGame = 0;

const Botchoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};


//draw function
const drawCheck = () => {
  result.innerText = "It's a draw!";
  result.setAttribute("style", "color: #5FBDFF");
};



//win function
const winner = () => {
  result.innerText = "You won... Congratulation :)";
  result.setAttribute("style", "color: #65B741");
};



//loose function
const loose = () => {
  result.innerText = "You loose... Ah! Bad luck :(";
  result.setAttribute("style", "color: #EF4040");
};



//reset function
const resetbtn = () => {
  reset.addEventListener("click", () => {
    result.innerText = "Start Game";
    result.setAttribute("style", "color: #4a5568");
    UserChoice.innerText = "";
    BotChoice.innerText = "";
    userScoreCount = 0;
    botScoreCount = 0;
    totalGame = 0;
    userScore.children[0].innerText = userScoreCount;
    botScore.children[0].innerText = botScoreCount;
    gameCount.children[1].innerText = totalGame;
  });
};



//main game function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const botChoice = Botchoice();
    totalGame++;
    gameCount.children[1].innerText = totalGame;
    if (userChoice === botChoice) {
      drawCheck();
        UserChoice.innerText = userChoice;
        BotChoice.innerText = botChoice;
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = botChoice === "paper" ? false : true;
        if(userChoice !== botChoice){
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }else{
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }        
      } else if (userChoice === "paper") {
        userWin = botChoice === "scissors" ? false : true;
        if(userChoice !== botChoice){
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }else{
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }
      } else {
        userWin = botChoice === "rock" ? false : true;
        if(userChoice !== botChoice){
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }else{
            UserChoice.innerText = userChoice;
            BotChoice.innerText = botChoice;
        }
      }
      if (userWin === true) {
        winner();
        userScoreCount++;
        userScore.children[0].innerText = userScoreCount;
      } else {
        loose();
        botScoreCount++;
        botScore.children[0].innerText = botScoreCount;
      }
    }
  });
});

resetbtn();