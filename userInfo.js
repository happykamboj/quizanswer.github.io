let userName = sessionStorage.getItem("name");

let points = sessionStorage.getItem("score");

let timeUserTaken = sessionStorage.getItem("time");

document.querySelector(".username").innerHTML = userName;

document.querySelector(".points").innerHTML = points;

document.querySelector(".timeOfTest").innerHTML = timeUserTaken;
