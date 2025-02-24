let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText=`Game Was a Draw.`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2&&p2===p3){
                showWinner(p1);
                return true;
            }
        }
    }
};
const showWinner=(p1)=>{
    msg.innerText=`Congratulations, Winner is ${p1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);