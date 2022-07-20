let playertext = document.querySelector(".currentplayer");
let restartbtn = document.querySelector(".restart");
let boxes = document.querySelectorAll(".box")

let player_x = "X";
let player_o = "O";
let currentplayer = player_o;
let running = false;

let options = [];

startgame();

function startgame()
{
    boxes.forEach(box => box.addEventListener("click" , boxclicked));
    restartbtn.addEventListener("click" , restartgame);
    playertext.textContent = `X's turn`
    running = true;
    
};

function boxclicked(singlebox)
{
    if(singlebox.target.textContent =="" && running)
    {
        if(currentplayer == player_x && singlebox.target.textContent == "")
        {
            currentplayer = player_o
            playertext.textContent = `X's turn`
            singlebox.target.textContent = currentplayer;
        }
        else if(currentplayer == player_o && singlebox.target.textContent == "")
        {
            currentplayer = player_x
            playertext.textContent = `O's turn`
            singlebox.target.textContent = currentplayer;
        };
      
    };
    winconditions();
};

function restartgame()
{
    boxes.forEach(box => box.textContent = "");
    playertext.textContent = `X's turn`
    boxes.forEach(box => box.style.color = "black");
    running = true;
};


function textwinconditions(options0 , options1 , options2)
{
    playertext.textContent = `${options0.textContent}'s win!`;
    options0.style.color ="green";
    options1.style.color ="green";
    options2.style.color ="green";    
    running = false;  

};

function winconditions()
{
    for(let i = 0; i < 9; i++)
    {
       options[i] = document.getElementById("box" + i);
    };


      //[0,1,2] win condition
    if(options[0].textContent == options[1].textContent && options[1].textContent == options[2].textContent && options[0].textContent != "" )
    {
        textwinconditions(options[0],options[1],options[2]);

    };


      //[3,4,5] win condition 
    if(options[3].textContent == options[4].textContent && options[4].textContent == options[5].textContent && options[3].textContent != "" )
    {
        textwinconditions(options[3],options[4],options[5]);

    };

      //[6,7,8] win condition
    if(options[6].textContent == options[7].textContent && options[7].textContent == options[8].textContent && options[6].textContent != "" )
    {
        textwinconditions(options[6],options[7],options[8]);

    };

      //[0,3,6] win condition 
    if(options[0].textContent == options[3].textContent && options[3].textContent == options[6].textContent && options[0].textContent != "" )
    {
        textwinconditions(options[0],options[3],options[6]);

    };

     //[1,4,7] win condition
    if(options[1].textContent == options[4].textContent && options[4].textContent == options[7].textContent && options[1].textContent != "" )
    {
        textwinconditions(options[1],options[4],options[7]);

    };

     //[2,5,8] win condition
    if(options[2].textContent == options[5].textContent && options[5].textContent == options[8].textContent && options[2].textContent != "" )
    {
        textwinconditions(options[2],options[5],options[8]);

    };

     //[0,4,8] win condition
    if(options[0].textContent == options[4].textContent && options[4].textContent == options[8].textContent && options[0].textContent != "" )
    {
        textwinconditions(options[0],options[4],options[8]);

    };

     //[2,4,6] win condition
    if(options[2].textContent == options[4].textContent && options[4].textContent == options[6].textContent && options[2].textContent != "" )
    {
        textwinconditions(options[2],options[4],options[6]);

    };

    //Draw!
    if(options[0].textContent != "" && options[1].textContent != "" && options[2].textContent != "" && options[3].textContent != "" &&
    options[4].textContent != "" && options[5].textContent != "" && options[6].textContent != "" && options[7].textContent != "" && options[8].textContent != "")
    {
        playertext.textContent = `Draw!`
        boxes.forEach(box => box.style.color = "red")
    };

    /* win condition for Tic Tac Toe Game
      [0,1,2]
      [3,4,5]
      [6,7,8] 
    */   
};
