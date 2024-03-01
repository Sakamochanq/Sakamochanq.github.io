setInterval(function() {

    const Current_Date = new Date();

    const increment = (value) => {
        return value < 10 ? '0' + value : value;
    }

    let hours = increment(Current_Date.getHours());
    let minutes = increment(Current_Date.getMinutes());
    let seconds = increment(Current_Date.getSeconds());

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}, 1000);

const Current_Date = new Date();
var WeekValue = Current_Date.getDay();

var OfWeekInEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = document.getElementById('date');
var week = document.getElementById('week');

week.innerHTML = "\""+OfWeekInEnglish[WeekValue]+"\"";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const years = Current_Date.getFullYear();
const month = months[Current_Date.getMonth()];
const date = Current_Date.getDate();

today.innerText = "\""+years + " " + month + " " + date+"\"";

var ua = window.navigator.userAgent.toLowerCase();
var os = document.getElementById('os');

if(ua.indexOf("windows nt") !== -1) {
    os.innerHTML = "\"Windows\"";
} else if(ua.indexOf("android") !== -1) {
    os.innerHTML = "\"Android\"";
} else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
    os.innerHTML = "\"iPhone\"";
} else if(ua.indexOf("Mac") !== -1) {
    os.innerHTML = "\"Mac os\"";
} else {
    os.innerHTML = "\"Unknown\"";
}

