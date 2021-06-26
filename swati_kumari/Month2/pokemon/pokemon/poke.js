


 
 for(i=1; i<152; i++) {
  
  var img = document.createElement('img');
   img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png";
   
   document.querySelector('body').appendChild(img);
 
}