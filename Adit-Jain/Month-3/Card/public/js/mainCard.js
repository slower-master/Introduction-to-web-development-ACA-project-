var behind = document.getElementById('behind');
var overlay = document.getElementById('overlay');
var nameDisplay = document.getElementById('nameDisplay');
var cardNumber = document.getElementById('cardNumber');
var validity = document.getElementById('validity');
var inputName = document.getElementById('inputName');
var inputCardNumber = document.getElementById('inputCardNumber');
var monthSelect = document.getElementById('month');
var yearSelect = document.getElementById('year');
var i=0;
var monthOption = new Array(12);
var yearOption = new Array(20);

var cardHeight = behind.offsetWidth*54/86;

behind.style.height = cardHeight + 'px';
overlay.style.borderTop = cardHeight + 'px solid transparent';
overlay.style.borderLeft = cardHeight + 'px solid transparent';
overlay.style.borderBottom = cardHeight + 'px solid #141414';
overlay.style.borderRight = cardHeight + 'px solid #141414';
overlay.style.borderBottomWidth = cardHeight/2 + 'px';
overlay.style.borderTopWidth = cardHeight/2 + 'px';
overlay.style.borderRightWidth = behind.offsetWidth/2 + 'px';
overlay.style.borderLeftWidth = behind.offsetWidth/2 + 'px';
monthSelect.style.width = (behind.offsetWidth/2-5)+'px';
yearSelect.style.width = (behind.offsetWidth/2-5)+'px';

for (i=0; i<12; i++){
    monthOption[i] = document.createElement('option');
    if (i<9)
        monthOption[i].innerHTML = '0'+(i+1);
    else
        monthOption[i].innerHTML = i+1;
    monthSelect.appendChild(monthOption[i]);
}
for (i=0; i<20; i++){
    yearOption[i] = document.createElement('option');
    yearOption[i].innerHTML = 2041-i;
    yearSelect.appendChild(yearOption[i]);
}

function updateCardNumber(){
    if (inputCardNumber.value == ''){
        cardNumber.innerHTML = '0000 0000 0000 0000';
        return;
    }
    var x = inputCardNumber.value;
    if (x > 9999999999999999){
        alert('Please Enter a valid Card Number');
    } else {
        var str = x.toString();
        var out = '';
        for (i=0; i<str.length; i++){
            out = out + str[i];
            if (i%4 == 3){
                out = out + '-';
            }
        }
        cardNumber.innerHTML = out;
    }
}

function updateName(){
    if (inputName.value == ''){
        nameDisplay.innerHTML = 'Owner Name';
        return;
    }
    nameDisplay.innerHTML = inputName.value;
}

function updateValidity(){
    var y = yearSelect.value;
    var m = monthSelect.value
    if (y == '-Select-')
        y = '0000';
    if (m == '-Select-')
        m = '00';
    validity.innerHTML = m + '/' + y;
    return;
}