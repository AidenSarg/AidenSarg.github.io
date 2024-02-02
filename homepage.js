const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

function getWelcomeMessage() {
    
    if (isMorning) {
        return "Good Morning person!";
    } else if (isAfternoon) {
        return "Good Afternoon!";
    }else {
        return "Good Eveninig!";
    }

  }

const div1 = document.querySelector('#welcome')
div1.textContent = getWelcomeMessage()

//console.log(getWelcomeMessage({welcome }))