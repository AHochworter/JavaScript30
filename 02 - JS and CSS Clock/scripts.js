const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  //get the seconds for the seconds hand
  const seconds = now.getSeconds();

  //now we want the seconds converted into degrees for the transition rotation
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //minute hand
  const minutes = now.getMinutes();
  console.log(minutes);
  //now we want minutes converted into degrees for the rotation
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //hour hand
  const hours = now.getHours();
  const hoursDegrees = hours * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
