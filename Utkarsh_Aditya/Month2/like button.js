var para = document.getElementById("b");
var button = document.getElementById("a");
button.addEventListener('click', addcount);
let count = 1;

function addcount() {
    para.innerHTML = " NO.OF LIKES: " + count;
    count++;
}