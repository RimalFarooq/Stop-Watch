let displaytime = document.querySelector(".displaytime");
let pause = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

let timer = null;
//set s,m,h=0
let [seconds , minutes , hours ] = [0,0,0];

//codidition
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    
let h = hours < 10 ? "0"+ hours : hours ;
let m = minutes < 10 ? "0"+ minutes : minutes ;
let s = seconds < 10 ? "0"+ seconds : seconds ;

displaytime.innerText = h + ":" + m + ":" + s ; 
}
//start button
function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);//1000miliseconds = 1sec means stopwatch function will perform in every single second
}

function watchStop(){
    clearInterval(timer);
} 
function watchReset(){
    clearInterval(timer);
    [seconds , minutes , hours ] = [0,0,0];
    displaytime.innerText = "00:00:00" ;
} 
reset.addEventListener("click",()=>{
    watchReset();
});
start.addEventListener("click",()=>{
    watchStart();
});
pause.addEventListener("click",()=>{
    watchStop();
});