function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minsBtn = document.getElementById('minutesBtn');
    let secBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', onClickDay)
    function onClickDay() {

        hours.value = Number(days.value) * 24
        minutes.value = Number(hours.value) * 60
        seconds.value = Number(minutes.value) * 60

    }

    hoursBtn.addEventListener('click', onClickHours)
    function onClickHours() {

        days.value = Number(hours.value) / 24
        minutes.value = Number(hours.value) * 60
        seconds.value = Number(minutes.value) * 60

    }

    minsBtn.addEventListener('click', onClickMin)
    function onClickMin() {

        days.value = Number(minutes.value) / 24 / 60
        hours.value = Number(minutes.value) / 60
        seconds.value = Number(minutes.value) * 60

    }

    secBtn.addEventListener('click', onClickSec)
    function onClickSec() {

        days.value = Number(seconds.value) / 24 / 60 / 60
        hours.value = Number(seconds.value) / 60 / 60
        minutes.value = Number(seconds.value) / 60

    }

}

