const star = document.querySelector(".star");
//Creating Basic variables inorder append to each div we create
setInterval(() => { 
let x = Math.floor(Math.random() * window.innerWidth);
let height = Math.floor(Math.random() * 10);
let width = 2 + "px";
let duratin = Math.floor(Math.random() * 2);

//Creating div which represents the stars in window
const stars = document.createElement("div");
stars.style.position = "absolute";
stars.style.left = x + "px";
stars.style.height = 100 + height + "px";
stars.style.width = width;
stars.style.animationDuration = duratin + "s";
stars.style.background = "rgba(255,255,255,0.5)";
stars.classList.add("star");
//Adding the element star we create to the div in html wit class star
star.appendChild(stars);

}, 90);