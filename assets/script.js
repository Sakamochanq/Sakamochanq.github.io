const menuButton = document.querySelector('.MenuButton');

menuButton.addEventListener('click', () => {
    //None
});

const $ChartValue = document.getElementById('chartValue'); 
const $ChartDraw = document.getElementById('chartDraw');

var Current_date = new Date();
var of_Month = Current_date.getMonth() + 1;
var of_Day = Current_date.getDate();

const TimeStatus = (value) => {
    switch(value) {
        case 1:
            let Jan_ = 100 / 31;
            Jan_fix = (Jan_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Jan_fix;
            $ChartDraw.style.width = Jan_fix;
            break;
        case 2:
            let Feb_ = 100 / 29;
            Feb_fix = (Feb_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Feb_fix;
            $ChartDraw.style.width = Feb_fix;
            break;
        case 3:
            let Mar_ = 100 / 31;
            Mar_fix = (Mar_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Mar_fix;
            $ChartDraw.style.width = Mar_fix;
            break;
        case 4:
            let Apr_ = 100 / 30;
            Apr_fix = (Apr_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Apr_fix;
            $ChartDraw.style.width = Apr_fix;
            break;
        case 5:
            let May_ = 100 / 31;
            May_fix = (May_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + May_fix;
            $ChartDraw.style.width = May_fix;
            break;
        case 6:
            let Jun_ = 100 / 30;
            Jun_fix = (Jun_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Jun_fix;
            $ChartDraw.style.width = Jun_fix;
            break;
        case 7:
            let Jul_ = 100 / 31;
            Jul_fix = (Jul_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Jul_fix;
            $ChartDraw.style.width = Jul_fix;
            break;
        case 8:
            let Aug_ = 100 / 29;
            Aug_fix = (Aug_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Aug_fix;
            $ChartDraw.style.width = Aug_fix;
            break;
        case 9:
            let Sep_ = 100 / 30;
            Sep_fix = (Sep_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Sep_fix;
            $ChartDraw.style.width = Sep_fix;
            break;
        case 10:
            let Oct_ = 100 / 31;
            Oct_fix = (Oct_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Oct_fix;
            $ChartDraw.style.width = Oct_fix;
            break;
        case 11:
            let Nov_ = 100 / 30;
            Nov_fix = (Nov_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Nov_fix;
            $ChartDraw.style.width = Nov_fix;
            break;
        case 12:
            let Dec_ = 100 / 31;
            Dec_fix = (Dec_.toFixed(2) * of_Day).toFixed(1) + "%";
            $ChartValue.innerHTML = "Satus : " + Dec_fix;
            $ChartDraw.style.width = Dec_fix;
            break;
        default:
            $ChartValue.innerHTML = "Invaid::Error";
            $ChartDraw.style.width = 0+"%";

    }
}

TimeStatus(of_Month);