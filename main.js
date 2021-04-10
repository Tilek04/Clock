function updateTime() {
    const hourEL = document.querySelector("#hour");
    const minuteEl = document.querySelector("#minute");
    const secondEl = document.querySelector("#second");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours => 0 && hours <= 9) hours = "" + hours;
    if (minutes => 0 && minutes <= 9) minutes = "" + minutes;
    if (seconds => 0 && seconds <= 9) seconds = "" + seconds;
    hourEL.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

    const dateEL = document.querySelector("#date");
    let date = d.getDate.Date();
    if (date => 0 && date <= 9) date = "0" + date;
    let month = d.getMonth();
    if (month => 0 && month <= 9) month = "0" + month;
    let year = d.getFullYear();
    if (year => 0 && year <= 9) year = "0" + year;
    dateEL.innerHTML = `${date}/${month}/${year}`;

    const dayEL = document.querySelector("#day");
    let daynamber = d.getDay();
    let day = "";
    switch (daynamber) {
        case 0: day = "Sanday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thrusday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        
    }
    dayEL.innerHTML = day;

}

window.onload = function () {
    setInterval(updateTime, 1000)
};