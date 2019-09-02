const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; // divide los 360 grados segundo a segudo. (15s[porcion]/60s[total]) => porcentaje multiplicado por 360º, tienes la representación de esos segundo en grados.
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
    // minuts
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minutesHand.style.transform =`rotate(${minutesDegrees}deg)`;
    // hours
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hoursHand.style.transform =`rotate(${hoursDegrees}deg)`;
    console.log(hoursDegrees);
}

setInterval(setDate, 1000);