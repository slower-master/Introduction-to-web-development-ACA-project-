function first(){
    var str = "<i>This web is made of HTML, CSS & JS!!!!!</i>"
    var col = str.fontcolor("orange");
    document.querySelectorAll('.heading')[0].innerHTML = col;
}

function second(){
    var str = "<i>Hope you like it :)</i>"
    var col = str.fontcolor("maroon");
    document.querySelectorAll('.heading')[0].innerHTML = col;
}

function third(){
    var str = "Plz give feedback on <i>#general<i> chat"
    var col = str.fontcolor("gold");
    document.querySelectorAll('.heading')[0].innerHTML = col;
}

setTimeout(first, 2000)
setTimeout(second, 4000)
setTimeout(third, 5500)