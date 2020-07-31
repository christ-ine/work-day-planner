
const today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentTime = moment();

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

    // compareTimes(); 
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

    if (currentTime.isAfter(moment('11:00 am', "hh:mm a"))){

        console.log("IT'S AFTERRRR WORKS");
        var timeData = $('span[data-time = 1100]').text();
        console.log("span data-time thine works! " + timeData);

        
        
        // if (plannerHour.dataset.time < 1100) {

        //     timeData.addClass('.past');

        // } else {

        //     console.log('idk')
        // }

    
    } else {
        console.log("this is wrong")
    };
    
}




    

    // window.onload = function () {

    //     // if (localStorage.getItem('.text-box') = textBox.value) {
    //     //     return;
    //     // } 
       
        
    //     if (name !== null) $('.text-box').val(textBox.value);

    // }

    // window.onbeforeunload = function() {

    //     textBox.value = localStorage.getItem('.text-box');
    //     textBox.addEventListener('input', function() {
    //         localStorage.setItem("plan", textBox.value);
    //         });

    //     // localStorage.setItem("plan", $('.text-box').val());
    // }




