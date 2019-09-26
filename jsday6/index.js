const main = document.getElementsByClassName("main");
const button = document.getElementsByTagName("button");

button[0].onclick = () => window.location.href = 'hw.html';
button[1].onclick = () => main[0].style.backgroundColor = "red";

    