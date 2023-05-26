const hoursLabel = document.querySelector(".hours");
const minutesLabel = document.querySelector(".minutes");
const secondsLabel = document.querySelector(".seconds");

const weekdayLabel = document.querySelector(".weekday");
const dateLabel = document.querySelector(".curDate");
const periodLabel = document.querySelector(".period");

const operations = function(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const weekday = Intl.DateTimeFormat("en", { weekday: "long" }).format(
      currentDate
    );
    const date = Intl.DateTimeFormat("fr", { dateStyle: "short" })
      .format(currentDate)
      .replaceAll("/", ".");

    hoursLabel.textContent = `${hours}`.padStart(2, "0");
    minutesLabel.textContent = `${minutes}`.padStart(2, "0");
    secondsLabel.textContent = `${seconds}`.padStart(2, "0");
    weekdayLabel.textContent = weekday;
    dateLabel.textContent = date;
    
    periodLabel.textContent = hours >= 12 ? 'PM' : 'AM'; 
}
setTimeout(function () {
  document.querySelector(".loading").classList.toggle('hidden');
  document.querySelector('.container').classList.toggle('hidden');
}, 1000);
setInterval(operations, 1000);

