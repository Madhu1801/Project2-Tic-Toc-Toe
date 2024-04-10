 
 let boxes = document.querySelectorAll(".box");
  let msgContainer = document.querySelector(".msg-container");
  let msg = document.querySelector(".msg");
  let body = document.querySelector("body");

  let newbtn = document.querySelector("#new-btn");

  let resetbtn = document.querySelector("#reset-btn");

 let turnX = true;

let count =0;
 const WinPtterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];


 const checkwinner= ()=>{
    for (let pattern of WinPtterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val !="" && pos3Val !="")
    {
        if (pos1Val===pos2Val && pos2Val===pos3Val) {
            //  console.log(" winner ");
             disbledbox();
             showwinner(pos1Val);
             return true;
             
        }
    }
     
    }
 }

 // reset game 

 let resetgame = ()=>{
    enableboxes();
    msgContainer.classList.add("hide");
    turnX= true;
    count =0;
    body.style.backgroundColor="#669bbc";

 }



 // to click the boxces

 boxes.forEach((box)=>{
    box.addEventListener("click", function(){
         console.log("box was clicked");
          count++;
          console.log(count);
        if (turnX) {
            box.textContent="X";
            box.style.color="black";
            turnX=false;
          
        } else {
            box.textContent="O";
            box.style.color="red";
            turnX=true;
        }

        box.disabled=true;
         let iswinner = checkwinner();

         if (count===9 && !iswinner)
         {
            drawmsg();
         }
         
         
    })
 });

 // to disble the boxces after winning 
  
 let disbledbox = ()=>{
    for (const box of boxes) {
         box.disabled=true;
         console.log(box);
    }
 }

 // enable boxes 

 let enableboxes = ()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText = "";
   }

 }


 // show winner 

 let showwinner = (winner)=> {
    msgContainer.classList.remove("hide");
    msg.innerText=`Congartulations Winner ${winner} 🎊`;
    msg.style.color="red";
    body.style.backgroundColor="#06d6a0";
    msg.style.fontSize="40px";
    
 }

 // to check draw 

 let drawmsg =()=>{
    msgContainer.classList.remove("hide");
    msg.innerText=" Game was Draw";
    count=0;

 }


 

 
 

 // to check the winner 



 // new game btn

 newbtn.addEventListener("click" , resetgame);

 resetbtn.addEventListener("click" , resetgame);

 