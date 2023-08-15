let start = document.getElementById("start");
let container = document.getElementById("container");
let exit = document.getElementById("exit");
let restart = document.getElementById("restart");

start.onclick=()=>{
    start.classList.add("active");
    container.classList.add("active");
}
exit.onclick=()=>{
    start.classList.remove("active");
    container.classList.remove("active");
}
