var images = new Array(898);
var divs = new Array(898);
var captions = new Array(898);
document.querySelector("section").classList.add("main-section");
for (let i = 0; i < 898; i++) {
    images[i] = document.createElement("img");
    divs[i] = document.createElement("div");
    captions[i] = document.createElement("p");
    divs[i].classList.add("main-div");
}
for (let i = 0; i < 898; i++) {
    document.querySelector("section").appendChild(divs[i]);
    images[i].src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + ".png";
    captions[i].innerHTML = '#' + (i + 1);
    divs[i].appendChild(images[i])
    divs[i].appendChild(captions[i])
}