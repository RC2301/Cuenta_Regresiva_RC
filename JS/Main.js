const getRemainTime = deadline => {
    let now = new Date(),
        reamainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(reamainTime % 60)).slice(-2),
        remainMinuts = ('0' + Math.floor(reamainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(reamainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(reamainTime / (3600 * 24))
    return {
        reamainTime,
        remainSeconds,
        remainMinuts,
        remainHours,
        remainDays
    }
}

const countDown = (deadline, element, message) => {
    const elemt = document.getElementById(element)
    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline)
        elemt.innerHTML = `
        <div id="timedown">
          <div class="days">${t.remainDays}<div class="text">Días</div></div>
          <div class="hours">${t.remainHours}<div class="text">Horas</div></div>
          <div class="minuts">${t.remainMinuts}<div class="text">Minutos</div></div>
          <div class="seconds">${t.remainSeconds}<div class="text">Segundos</div></div>
        </div>
        `
        if (t.reamainTime <= 3) {
            elemt.classList.add('timedown-out')
            if (t.reamainTime <= 1) {
                clearInterval(timerUpdate)
                elemt.innerHTML = message
            }
        }
    }, 1000)
}

countDown('Dec 18 2020 17:40:00 GMT-0500', 'main', '<div class="time-over"><img src="../Img/timedown.png"></div>')