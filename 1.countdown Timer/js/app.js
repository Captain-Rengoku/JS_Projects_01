const endDate = "22 Aug 2025 06:00:00 PM"
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input")

// This is an arrow function
//const clock = () => {

//  }

/*
# 1 day = 24 hrs = 24 x 3600 sec
# 1 hrs = 60 min = 3600 sec
# 1 min = 60 sec
# 1 sec = 1000 mili-seconds
*/

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end - now)/1000; // this will convert the mili-seconds to seconds
    // console.log(diff);


    if (diff < 0) return; // this will ensure that the negative values shall not display on the countdown screen.
    
    // convert into Days
    // console.log(Math.floor(diff/60/60/24)) // diff/60sec/60min/24hrs that will give the total days
    inputs[0].value = Math.floor(diff/60/60/24);

    // convert into Hours
    inputs[1].value = Math.floor(diff/60/60) % 24;

    // convert into Minutes
    inputs[2].value = Math.floor(diff/60) % 60;

    // diff variable already have converted the difference to seconds.
    inputs[3].value = Math.floor(diff) % 60;

}

// initial call
// clock();

// call every second
setInterval(
    () => {
        clock()
    },1000
)

