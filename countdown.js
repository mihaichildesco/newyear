const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024, 1, 1, 0, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours().toString().padStart(2, '0');
const minutes = futureDate.getMinutes().toString().padStart(2, '0');

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]



// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

//   1s = 1000ms
//   1min = 60s
//   1h = 60min
//   1d = 24h

//   values in ms
    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000
//   calculate values
    let days = t/oneDay
    days = Math.floor(days)

    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function format(item) {
        if(item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index])
    })
    if(t<0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">happy new year</h4>`
    }
}
// countdown

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()