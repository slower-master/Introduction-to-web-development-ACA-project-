for(var i=1;i<152;i++)
{
    var box=document.createElement("div");
    box.style.display="inline-block";
    var pic=document.createElement("img");
    pic.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png";
    pic.style.display="inline-block";

    var count=document.createElement("p");
    count.innerHTML="#"+i;
    count.style.display="inline-block";

    box.style.textAlign="center";
    box.style.width="96px";
    box.appendChild(pic);
    box.appendChild(count);
    document.body.appendChild(box);
}
var a,counter=0;

function pokemon(){
    a=Math.random();
    a=a*151;
    a=Math.floor(`${a}`);
    document.getElementsByTagName('div')[`${a}`].setAttribute("style", "display: inline-block; width: 96px; border: 2px solid black; text-align: center;");
    counter++;
    document.getElementById('num').innerHTML=counter;
    
}
