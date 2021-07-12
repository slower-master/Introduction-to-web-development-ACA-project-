const planets=[
    {
        name:"mercury",
        no:1,
        diameter:4878,
        rotate:"59 days",
        revolve:"88 days",
    },
    {
        name:"venus",
        no:2,
        diameter:12104,
        rotate:"243 days",
        revolve:"224 days"
    },
    {
        name:"earth",
        no:3,
        diameter:12756,
        rotate:"1 day",
        revolve:"365 days",
    },
    {
        name:"mars",
        no:4,
        diameter:6794,
        rotate:"24hr 37min",
        revolve:"687 days",
    },
    {
        name:"jupiter",
        no:5,
        diameter:142984,
        rotate:"9hr 55min",
        revolve:"11.86 years",
    },
    {
        name:"saturn",
        no:6,
        diameter:120536,
        rotate:"10 hr 39 min",
        revolve:"29 years",
    },
    {
        name:"uranus",
        no:7,
        diameter:51118,
        rotate:"17hr 14min",
        revolve:"84 years",
    },
    {
        name:"neptune",
        no:8,
        diameter:49532,
        rotate:"16hr 7min",
        revolve:"164.8 years",
    }
]
var seq=2;
function prev(){
    if (seq!=0) seq--;
    document.getElementById('head').innerHTML=planets[seq].name;
    document.getElementById('planet').src="https://nineplanets.org/wp-content/uploads/2019/09/"+planets[seq].name+".png";
    document.getElementById('num').innerHTML=planets[seq].no;
    document.getElementById('dia').innerHTML=planets[seq].diameter;
    document.getElementById('spin').innerHTML=planets[seq].rotate;
    document.getElementById('orbit').innerHTML=planets[seq].revolve;
}
function next(){
    if (seq!=7) seq++;
    document.getElementById('head').innerHTML=planets[seq].name;
    document.getElementById('planet').src="https://nineplanets.org/wp-content/uploads/2019/09/"+planets[seq].name+".png";
    document.getElementById('num').innerHTML=planets[seq].no;
    document.getElementById('dia').innerHTML=planets[seq].diameter;
    document.getElementById('spin').innerHTML=planets[seq].rotate;
    document.getElementById('orbit').innerHTML=planets[seq].revolve;
}
