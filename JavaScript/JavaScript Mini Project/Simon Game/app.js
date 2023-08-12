let gameSeq = [];
let userSeq = [];
let btns = ['yellow','red','purple','green'];

let started = false;
let level = 0; 
let highScore = 0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress", () => {
  // console.log("game started");
  if (started == false) {
    // console.log("game started");
    started = true;

    levelUp();
  }
});

const levelUp = ()=>{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let random = Math.floor(Math.random()*3);
    let randomColor = btns[random];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(random);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
};

const gameFlash = (btn)=>{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
};

const userFlash = (btn)=>{
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
};

function checkAns(idx){
    // console.log("Curr level",level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
       
        if(highScore==0 || highScore<level){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Your High Score is ${highScore}<br>Press any Key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
};

function btnPressed(){
    userFlash(this);

    userColor = this.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPressed)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};