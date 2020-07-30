
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
    
    compareTimes(); 
    
   

});

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


