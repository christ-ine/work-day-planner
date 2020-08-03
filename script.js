
const today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentTime = moment();
const setPlan9am = moment('9:00 am', "hh:mm a");
const setPlan10am = moment('10:00 am', "hh:mm a")
const setPlan11am = moment('11:00 am', "hh:mm a")
const setPlan12pm = moment('12:00 pm', "hh:mm a")
const setPlan1pm = moment('1:00 pm', "hh:mm a")
const setPlan2pm = moment('2:00 pm', "hh:mm a")
const setPlan3pm = moment('3:00 pm', "hh:mm a")
const setPlan4pm = moment('4:00 pm', "hh:mm a")
const setPlan5pm = moment('5:00 pm', "hh:mm a")

console.log("today works! " + today);
var textBox = document.querySelector('.text-box');
var saveBtn = document.querySelector('.saveBtn');
var plannerHour = document.querySelector('.hour');
console.log("current time works! " + currentTime);


$(document).ready(function() {

    console.log( "ready works!" );
    $('p#currentDay').html("Today is " + today);
    console.log("dataset works! " + plannerHour.dataset.time);

    

    $(window).on("unload", saveSettings);

    compareTimes(); 
    loadSettings();
   

});

function loadSettings() {
    $('input.text-box9a').val(localStorage.plannerInput9a);
    $('input.text-box10a').val(localStorage.plannerInput10a);
    $('input.text-box11a').val(localStorage.plannerInput11a);
    $('input.text-box12p').val(localStorage.plannerInput12p);
    $('input.text-box1p').val(localStorage.plannerInput1p);
    $('input.text-box2p').val(localStorage.plannerInput2p);
    $('input.text-box3p').val(localStorage.plannerInput3p);
    $('input.text-box4p').val(localStorage.plannerInput4p);
    $('input.text-box5p').val(localStorage.plannerInput5p);

}

function saveSettings() {
    localStorage.plannerInput9a = $('input.text-box9a').val();
    localStorage.plannerInput10a = $('input.text-box10a').val();
    localStorage.plannerInput11a = $('input.text-box11a').val();
    localStorage.plannerInput12p = $('input.text-box12p').val();
    localStorage.plannerInput1p = $('input.text-box1p').val();
    localStorage.plannerInput2p = $('input.text-box2p').val();
    localStorage.plannerInput3p = $('input.text-box3p').val();
    localStorage.plannerInput4p = $('input.text-box4p').val();
    localStorage.plannerInput5p = $('input.text-box5p').val();
}


function compareTimes() {

    if (currentTime.isAfter(setPlan9am)){
        $('input.text-box9a').addClass('past');
    } else if (currentTime.isSame(setPlan9am)) {
        $('input.text-box9a').addClass('present');
    } else {
        $('input.text-box9a').addClass('future');
    };

    if (currentTime.isAfter(setPlan10am)){
        $('input.text-box10a').addClass('past');
    } else if (currentTime.isSame(setPlan10am)) {
        $('input.text-box10a').addClass('present');
    } else {
        $('input.text-box10a').addClass('future');
    };
    
    if (currentTime.isAfter(setPlan11am)){
        $('input.text-box11a').addClass('past');
    } else if (currentTime.isSame(setPlan11am)) {
        $('input.text-box11a').addClass('present');
    } else {
        $('input.text-box11a').addClass('future');
    };

    if (currentTime.isAfter(setPlan12pm)){
        $('input.text-box12p').addClass('past');
    } else if (currentTime.isSame(setPlan12pm)) {
        $('input.text-box12p').addClass('present');
    } else {
        $('input.text-box12p').addClass('future');
    };

    if (currentTime.isAfter(setPlan1pm)){
        $('input.text-box1p').addClass('past');
    } else if (currentTime.isSame(setPlan1pm)) {
        $('input.text-box1p').addClass('present');
    } else {
        $('input.text-box1p').addClass('future');
    };

    if (currentTime.isAfter(setPlan2pm)){
        $('input.text-box2p').addClass('past');
    } else if (currentTime.isSame(setPlan2pm)) {
        $('input.text-box2p').addClass('present');
    } else {
        $('input.text-box2p').addClass('future');
    };

    if (currentTime.isAfter(setPlan3pm)){
        $('input.text-box3p').addClass('past');
    } else if (currentTime.isSame(setPlan3pm)) {
        $('input.text-box3p').addClass('present');
    } else {
        $('input.text-box3p').addClass('future');
    };

    if (currentTime.isAfter(setPlan4pm)){
        $('input.text-box4p').addClass('past');
    } else if (currentTime.isSame(setPlan4pm)) {
        $('input.text-box4p').addClass('present');
    } else {
        $('input.text-box4p').addClass('future');
    };

    if (currentTime.isAfter(setPlan5pm)){
        $('input.text-box5p').addClass('past');
    } else if (currentTime.isSame(setPlan4pm)) {
        $('input.text-box5p').addClass('present');
    } else {
        $('input.text-box5p').addClass('future');
    };
    
    
}




    

    




