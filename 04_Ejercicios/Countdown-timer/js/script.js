// la unidad de medida del tiempo son los milisegundos
const newYear = '1 Jan 2023';
// varaibles de html
const daysEL=document.getElementById('days');
const hoursEL=document.getElementById('hours');
const minsEL=document.getElementById('mins');
const secondsEL=document.getElementById('seconds');

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalseconds= (newYearDate - currentDate)/1000;
    // variables de la cuenta regresiva
    const daysD = Math.floor(totalseconds/3600/24);
    const hoursH = Math.floor(totalseconds/3600)%24;
    const minsM = Math.floor(totalseconds/60)%60;
    const secondsS = Math.floor(totalseconds)%60;
    // console.log(daysD,hoursH,minsM, secondsS);

    daysEL.innerHTML=daysD;
    hoursEL.innerHTML=formatTime(hoursH);
    minsEL.innerHTML=formatTime(minsM);
    secondsEL.innerHTML=formatTime(secondsS);
}
function formatTime(time) {
return time < 10 ? (`0${time}`):time;
}
// countdown();

setInterval(countdown,1000);