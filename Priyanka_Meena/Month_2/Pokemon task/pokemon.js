
for(a=1; a<151; a=a+10){
    for(b=a; b<a+10; b++){

        var img= document.createElement('img')
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +b+ ".png"
        document.querySelector('body').appendChild(img)
    }
        for(b=a; b<a+10; b++){
    
        let name= document.createElement('doc')
        name.innerHTML= "#" + b
        
        document.querySelector('body').appendChild(name)

    }

    if(a==141){

        var img= document.createElement('img')
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + 151 + ".png"
        document.querySelector('body').appendChild(img)
       
        let name= document.createElement('doc')
        name.style.display="block"
        name.innerHTML="#"+151
        document.querySelector('body').appendChild(name)


    }

    
}