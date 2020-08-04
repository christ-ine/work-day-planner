
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
    compareTimes();
    loadSettings();
    

    // $(window).on("unload", saveSettings);

    $('button').on("click", function () {
        localStorage.plannerInput9a = $('textarea.text-box9a').val();
        localStorage.plannerInput10a = $('textarea.text-box10a').val();
        localStorage.plannerInput11a = $('textarea.text-box11a').val();
        localStorage.plannerInput12p = $('textarea.text-box12p').val();
        localStorage.plannerInput1p = $('textarea.text-box1p').val();
        localStorage.plannerInput2p = $('textarea.text-box2p').val();
        localStorage.plannerInput3p = $('textarea.text-box3p').val();
        localStorage.plannerInput4p = $('textarea.text-box4p').val();
        localStorage.plannerInput5p = $('textarea.text-box5p').val();

});

});

function loadSettings() {
    $('textarea.text-box9a').val(localStorage.plannerInput9a);
    $('textarea.text-box10a').val(localStorage.plannerInput10a);
    $('textarea.text-box11a').val(localStorage.plannerInput11a);
    $('textarea.text-box12p').val(localStorage.plannerInput12p);
    $('textarea.text-box1p').val(localStorage.plannerInput1p);
    $('textarea.text-box2p').val(localStorage.plannerInput2p);
    $('textarea.text-box3p').val(localStorage.plannerInput3p);
    $('textarea.text-box4p').val(localStorage.plannerInput4p);
    $('textarea.text-box5p').val(localStorage.plannerInput5p);

}



function compareTimes() {

    if (currentTime.isBetween(moment('9:00 am', "LT"), moment('10:00 am', "LT"))){
        $('textarea.text-box9a').addClass('present');
    } else if (currentTime.isAfter(setPlan9am)) {
        $('textarea.text-box9a').addClass('past');
    } else {
        $('textarea.text-box9a').addClass('future');
    };

    if (currentTime.isBetween(moment('10:00 am', "LT"), moment('11:00 am', "LT"))){
        $('textarea.text-box10a').addClass('present');
    } else if (currentTime.isAfter(setPlan10am)) {
        $('textarea.text-box10a').addClass('past');
    } else {
        $('textarea.text-box10a').addClass('future');
    };

    if (currentTime.isBetween(moment('11:00 am', "LT"), moment('12:00 pm', "LT"))){
        $('textarea.text-box11a').addClass('present');
    } else if (currentTime.isAfter(setPlan11am)) {
        $('textarea.text-box11a').addClass('past');
    } else {
        $('textarea.text-box11a').addClass('future');
    };

    if (currentTime.isBetween(moment('12:00 pm', "LT"), moment('1:00 pm', "LT"))){
        $('textarea.text-box12p').addClass('present');
    } else if (currentTime.isAfter(setPlan12pm)) {
        $('textarea.text-box12p').addClass('past');
    } else {
        $('textarea.text-box12p').addClass('future');
    };

    if (currentTime.isBetween(moment('1:00 pm', "LT"), moment('2:00 pm', "LT"))){
        $('textarea.text-box1p').addClass('present');
    } else if (currentTime.isAfter(setPlan1pm)) {
        $('textarea.text-box1p').addClass('past');
    } else {
        $('textarea.text-box1p').addClass('future');
    };

    if (currentTime.isBetween(moment('2:00 pm', "LT"), moment('3:00 pm', "LT"))){
        $('textarea.text-box2p').addClass('present');
    } else if (currentTime.isAfter(setPlan2pm)) {
        $('textarea.text-box2p').addClass('past');
    } else {
        $('textarea.text-box2p').addClass('future');
    };

    if (currentTime.isBetween(moment('3:00 pm', "LT"), moment('4:00 pm', "LT"))){
        $('textarea.text-box3p').addClass('present');
    } else if (currentTime.isAfter(setPlan3pm)) {
        $('textarea.text-box3p').addClass('past');
    } else {
        $('textarea.text-box3p').addClass('future');
    };

    if (currentTime.isBetween(moment('4:00 pm', "LT"), moment('5:00 pm', "LT"))){
        $('textarea.text-box4p').addClass('present');
    } else if (currentTime.isAfter(setPlan4pm)) {
        $('textarea.text-box4p').addClass('past');
    } else {
        $('textarea.text-box4p').addClass('future');
    };

    if (currentTime.isBetween(moment('5:00 pm', "LT"), moment('6:00 pm', "LT"))){
        $('textarea.text-box5p').addClass('present');
    } else if (currentTime.isAfter(setPlan5pm)) {
        $('textarea.text-box5p').addClass('past');
    } else {
        $('textarea.text-box5p').addClass('future')
    }
}