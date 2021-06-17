var i;
let j = 1;
while (j < 151) {
    for (i = j; i < 15 + j; i++) {
        let image = document.createElement('img');
        image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
        document.querySelector('body').appendChild(image);

    }
    for (i = j; i < 15 + j; i++) {

        let number = document.createElement('span');
        number.innerHTML = "#" + i;
        document.querySelector('body').appendChild(number);

    }
    j = j + 15;
}
let image1 = document.createElement('img');
image1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
document.querySelector('body').appendChild(image1);
let number1 = document.createElement('span');
number1.innerHTML = "#" + i;
document.querySelector('body').appendChild(number1);