let choices =  document.querySelectorAll(".choice");
let result = document.querySelector("#result");
let win = document.querySelector("#win");
let draw = document.querySelector("#draw");
let loss = document.querySelector("#loss");
let resultbtn = document.querySelector(".resultbtn");

let userScore = 0;
let botScore = 0;
let drawCount = 0;

const Botchoice = () =>{
  const option = ['rock', 'paper', 'scissors'];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx]
}





const drawCheck = () =>{
  result.innerText = "Draw!";
  resultbtn.setAttribute('style', 'background-color: #A6B1E1')
}
const winner = () =>{
  result.innerText = "You won!!"
  resultbtn.setAttribute('style', 'background-color: #65B741')
}
const loose = () =>{
  result.innerText = "You loose!!"
  resultbtn.setAttribute('style', 'background-color: #EF4040')
}



choices.forEach((choice) =>{
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    const botChoice = Botchoice();
    if(userChoice === botChoice){
      drawCheck();
      drawCount++;
      draw.innerText = drawCount;
    }else{
      let userWin = true;
      if(userChoice === "rock"){
        userWin = botChoice === "paper" ? false : true;
      }else if(userChoice === "paper"){
        userWin = botChoice === "scissors" ? false : true;
      }else{
        userWin = botChoice === "rock" ? false : true;
      }
      if(userWin === true){
        winner();
        userScore++;
        win.innerText = userScore;
      }else{
        loose();
        botScore++;
        loss.innerText = botScore;
      }
    }
  })
}) 
