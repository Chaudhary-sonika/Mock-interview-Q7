var textIp = document.querySelector("#txt");
var btnLoad = document.querySelector("#load");

function hide() {
    textIp.style.display = "none";
}
btnLoad.addEventListener("click", hide);