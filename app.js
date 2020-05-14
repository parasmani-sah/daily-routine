
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth();
let yyyy = date.getFullYear();
let fullDate = mm+ '-' +dd+ '-' +yyyy;
let weekNum = date.getDay();

let dayName;
let quotation;
let timeID;
let toDo;

// Switch case for displaying day, college time, and work to do that day.
switch(weekNum){
    case 0:
        dayName = 'Sunday';
        quotation = '"Be yourself; everyone else is already taken."';
        timeID = document.getElementById('1'); 
        toDo = document.getElementById('11');
        break;
    case 1:
        dayName = 'Monday';
        quotation = '"Follow your inner moonlight; don’t hide the madness."';
        timeID = document.getElementById('2');
        toDo = document.getElementById('12');
        break;
    case 2:
        dayName = 'Tuesday';
        quotation = '"You are you. Now, isn’t that pleasant?"';
        timeID = document.getElementById('3');
        toDo = document.getElementById('13');
        break;
    case 3:
        dayName = 'Wednesday';
        quotation = '"You cannot change what you are, only what you do."';
        timeID = document.getElementById('4');
        toDo = document.getElementById('14');
        break;
    case 4:
        dayName = 'Thursday';
        quotation = '"Follow your own star!"';
        timeID = document.getElementById('5');
        toDo = document.getElementById('15');
        break;
    case 5:
        dayName = 'Friday';
        quotation = '"I feel that the simplicity of life is just being yourself."';
        timeID = document.getElementById('6');
        toDo = document.getElementById('16');
        break;
    case 6:
        dayName = 'Saturday';
        quotation = '"Be positive, Always Smile!"';
        timeID = document.getElementById('7');
        toDo = document.getElementById('17');
        break;
    default:
        dayName = 'Day is not Found!';
}

// Displaing day
let weekDay = document.getElementById('day');
weekDay.innerHTML = `${dayName}`;

//Display date
let currentDate = document.getElementById('date');
currentDate.innerHTML = `Date: ${fullDate}`;

//Display quoatation
let quoatLine = document.getElementById('quoat');
quoatLine.innerHTML = `${quotation}`;

// Display college time.
function collegeTime(weekNum){
    
    if(timeID.style.display = 'none'){
        timeID.style.display = 'block';
        timeID.style.transition = '.6s';
        toDo.style.display = 'none';
    }
}

// Display work to do that day.
function workToDo(weekNum){
    if(toDo.style.display = 'none'){
        toDo.style.display = 'block';
        toDo.style.transition = '.6s';
        timeID.style.display = 'none';
    }
}
