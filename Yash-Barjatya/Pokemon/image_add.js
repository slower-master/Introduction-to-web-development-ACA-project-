
var str = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (i = 1; i < 152; i++) {

    var add = i + ".png";
    var link_name = str.concat(add);
    console.log(link_name);
    var img = document.createElement('img');
    img.src = link_name;
    document.querySelector('body').appendChild(img);
    var number = document.createElement("span");
    number.innerHTML = '#' + i;
    document.querySelector('body').appendChild(number);
}
