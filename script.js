
// selecting elements
const dayEle = document.getElementById('day-count');
const hoursEle = document.getElementById('hour-count');
const mitEle = document.getElementById('mit-count');
const secEle = document.getElementById('sec-count');


// countdown function
function countdown() {

    const currentDate = new Date();  // Today's date
    // const newYearDate = new Date(newYear);  // newYear date
    const newYearDate = new Date('24 Oct 2027');  // newYear date
    // console.log(currentDate);
    // console.log(newYearDate);

    // * ms to s conversion
    const totalSecDiff = Math.floor((newYearDate - currentDate) / 1000);

    // => totalsecdiff ->> ( /60 )mit ->> ( /60 )hours ->> ( /24 )days
    // * totalSec ko mit me convert karo , mit ko hours me convert karo (total hours milenge) thn hours ko 24 se divide karenge to total days milenge
    const days = Math.floor((totalSecDiff / 60 / 60 / 24));

    // => totalsecdiff ->> ( /60 )mit ->> ( /60 ) hours ->> ( %24 )in 24 hour formate
    // * totalSec ko mit me convert karo thn mit ko hours me convert karo (total hours milenge) thn usko 24 formate me convert karo
    const hours = Math.floor((totalSecDiff / 60 / 60) % 24);

    // => totalsevdiff ->> ( /60 )mit ->> ( %60 )in 60 mit formate
    // * totalSec to mit me convert karo(total mits milenge) thn usse 60 mit ke formate me convert karo
    const mits = Math.floor((totalSecDiff / 60) % 60);

    // => ( %60 )in 60 sec formate    
    // * totalSec ko 60 formate me convert karo
    const sec = Math.floor((totalSecDiff) % 60);

    console.log(totalSecDiff, days, hours, mits, sec)

    // * applying 

    dayEle.innerText = timeFormate(days);
    hoursEle.innerText = timeFormate(hours);
    mitEle.innerText = timeFormate(mits);
    secEle.innerText = timeFormate(sec);
}


// formate time if (day-hours-mits-sec) are less thn 10.
function timeFormate(t){
    if(t<10){
        return `0${t}`;
    }
    else{
        return t;
    }
}


// call countdown function every 1s
setInterval(countdown, 1000);

