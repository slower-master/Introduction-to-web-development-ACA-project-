//* ---------Responsive-navbar-animation----------- //
function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".main-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".main-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}

$(document).ready(function(){
    setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
});

function change_icon(){
    var ic = document.getElementById("icon_name");
    if (ic.classList.contains('fa-bars')){
        ic.classList.remove('fa-bars');
        ic.classList.add('fa-times');
    } else if (ic.classList.contains('fa-times')){
        ic.classList.remove('fa-times');
        ic.classList.add('fa-bars');
    }
}

//-------On Clicking Option in Mobile View-----------
// var btn = document.getElementById('btn')
// var change2 = document.getElementById('navbarSupportedContent');
// function closeFunction(){
//     change_icon();
//     if (btn.classList.contains('collapsed')){
//         btn.classList.remove('collapsed');
//     }
//     else{
//         btn.classList.add('collapsed')
//     }
//     if (change2.classList.contains('show')){
//         change2.classList.add('collapsing');
//         change2.classList.remove('collapse');
//         change2.classList.remove('show');
//         setTimeout(() => { console.log("Navbar Closed"); }, 500);
//         change2.classList.remove('collapsing');
//         change2.classList.add('collapse');
//     }
// }

const themeMap = {
    dark: "light",
    light: "dark"
};
const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}
document.getElementById('themeButton').onclick = toggleTheme;

//* --------End of Responsive-navbar-animation--------//


//* ----------------Text Animation--------------//
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation                        //!]
	// setTimeout(() => {                       //!]----------- I don't think initial animation ki zaroorat hogi..
	// 	span.classList.add('active');           //!]----------- nahi toh isse uncomment krlena
	// }, 750 * (idx+1))                        //!]
});
//* -----------End of Text Animation-------------//

var len = document.getElementById("img_cont").offsetWidth;
console.log(len);
var w = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log(w);
if (w>=800){
    len = len * 0.27;
}
    document.getElementById('flip').style.width = (len-60)+'px';
    document.getElementById('flip').style.height = (len-60)+'px';

var tlw = document.getElementById("timeline_main").offsetWidth;
console.log(tlw);
document.getElementById("top1").style.width = tlw + 'px';
document.getElementById("top2").style.width = tlw + 'px';
document.getElementById("top3").style.width = tlw + 'px';

var bdr_lft = document.getElementById('abs').offsetWidth / 11;
var bdr = document.getElementById('abs').offsetHeight / 7;
if (w <= 500){
    bdr = bdr * 7/11;
}
var sel = document.querySelectorAll("#mee");
for (var i=0; i<sel.length; i++){
    var currSel = sel[i];
    currSel.style.borderLeft = bdr_lft + "px solid #5161ce";
    currSel.style.borderTop = bdr + "px solid transparent";
    currSel.style.borderBottom = bdr + "px solid transparent";
}