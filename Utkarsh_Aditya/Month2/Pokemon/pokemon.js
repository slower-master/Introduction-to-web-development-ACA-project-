var i;
let j = 1;
while (j < 151) {
    for (i = j; i < 15 + j; i++) {
        let imgi = document.createElement('img')
        imgi.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
        document.querySelector('body').appendChild(imgi)
    }
    for (i = j; i < 15 + j; i++) {
        let span = document.createElement('span')
        span.innerHTML = "#" + i
        document.querySelector('body').appendChild(span)
    }
    j = j + 15
}
let imgs = document.createElement('img')
imgs.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 151 + ".png"
document.querySelector('body').appendChild(imgs)

let span = document.createElement('span')
span.style.display = "block"
span.innerHTML = "#" + 151
document.querySelector('body').appendChild(span)