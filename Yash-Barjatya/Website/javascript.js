const likeInd = document.querySelector(".like_Ind");
let likeIcon1 = document.querySelector("#like_icon1");
let likeCount1 = document.querySelector("#like_count1");

const likeNZ = document.querySelector(".like_NZ");
let likeIcon2 = document.querySelector("#like_icon2");
let likeCount2 = document.querySelector("#like_count2");


likeInd.addEventListener("click", () => {
    likeIcon1.innerHTML = `<i class="IND fas fa-thumbs-up"></i>`;

    let a = window.confirm("Are you sure  team INDIA will win?");
    if (a) {
        likeCount1.textContent++;
        window.alert("Since  now you have voted for India let me tell you NZ have reached the finals of the last two ODI World Cup . So be aware of them!!!");
    }
    else
        likeIcon1.innerHTML = `<i class="IND far fa-thumbs-up"></i>`;


});

likeNZ.addEventListener("click", () => {
    likeIcon2.innerHTML = `<i class="NZ fas fa-thumbs-up"></i>`;
    let a = window.confirm("Are you sure KIWI team will win?");
    if (a) {
        likeCount2.textContent++;
        window.alert("Since  now you have voted for NZ ,let me tell you a fact , India has not won a single ICC tournament since 2o13 . So they will be very thirsty Be aware of them!!!");
    }
    else
        likeIcon2.innerHTML = `<i class="NZ far fa-thumbs-up"></i>`;
});

var final_time = new Date("june 19,2021 15:30:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var diff = final_time - now;

    //console.log(diff);// will give the time diff in milliseconds

    var days = Math.floor(diff / (24 * 60 * 60 * 1000));// extra thousand is for milli sec 
    //console.log(days);

    var hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    //console.log(hours);

    var minutes = Math.floor((diff % (60 * 60 * 1000)) / (1000 * 60));
    //console.log(minutes);

    var seconds = Math.floor((diff % (60 * 1000)) / 1000);
    //console.log(seconds);
    if (diff > 0)
        document.getElementById("timer").innerHTML = "<h3>BATTLE BEGINS IN</h3>" +
            days + "d: " + hours + "hrs: " + minutes + "m: " + seconds + "s";
    else
        document.getElementById("timer").innerHTML = "<h3>SCOREBOARD & RESULT</h3>"

}, 1000);
