var i;
let j;
for (i = 1; i < 151; i += 10) {
    for (j = i; j < i + 10; j++) {

        let pics = document.createElement('img')
        pics.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + j + ".png"
        document.querySelector('body').appendChild(pics)
    }
    for (j = i; j < i + 10; j++) {
        let dist = document.createElement('span')
        dist.innerHTML = "#" + j
        document.querySelector('body').appendChild(dist)

    }
    if (i == 141) {

        let pics = document.createElement('img')
        pics.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 151 + ".png"
        document.querySelector('body').appendChild(pics)
        let dist = document.createElement('span')
        dist.style.display = "block"
        dist.innerHTML = "#" + 151
        document.querySelector('body').appendChild(dist)

    }
}

