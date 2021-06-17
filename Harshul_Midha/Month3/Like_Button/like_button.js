var button = document.getElementById("like");
var counter = document.getElementById("counter");
var count = 0;
// window.onload = function () {
button.onclick = function () {
    count += 1;
    counter.innerHTML = count;
    console.log(count);
};
// };