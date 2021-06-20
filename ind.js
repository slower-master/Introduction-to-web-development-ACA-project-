

let str1 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
let k;
for (k = 1; k <= 898; k++) {
    let n = k.toString(10);
    let str2 = str1 + n + '.png';
    console.log(str2);
    let head = document.createElement('H3');
    let text = document.createTextNode("#" + n);
    let imag = document.createElement('img');
    imag.src = str2;

    let pok = document.createElement("pokemon-element");

    pok.appendChild(imag);
    pok.id = "pokemon-ele";
    document.getElementById("pokemon-element").appendChild(pok);

    head.appendChild(text);
    pok.appendChild(head);


}