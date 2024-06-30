let model = document.querySelector(".model");
let modelObject = document.querySelector(".modelObject");
let paraf = document.querySelector(".paraf");
let logo = document.querySelector(".logo");
let white = document.querySelector(".white");
let fullScreen = document.querySelector(".fullScreen");
let heightUp = document.querySelector(".heightUp");
let widthDown = document.querySelector(".widthDown");
let moveFullScreen = document.querySelector(".moveFullScreen");
let l2rFont = document.querySelector(".l2rFont");
let logoDrop = document.querySelector(".logoDrop");
let reload=document.querySelector(".reload")
setTimeout(() => {
    white.classList.remove("whiteScreen");
    model.classList.add("heightUp");
    setTimeout(() => {
    model.classList.add("widthDown");
  }, 2000);
  setTimeout(() => {
      fullScreen.classList.add("moveFullScreen");
    }, 1050);
    setTimeout(() => {
        paraf.classList.add("l2rFont");
  }, 2500);
}, 1000);

setTimeout(() => {
    logo.classList.add("logoDrop");
}, 950);

reload.addEventListener("click",()=>{
    Location.reload()
})
