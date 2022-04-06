

const startBtn = document.getElementById("button-start")
const restartBtn = document.getElementById("button-reset");

let s = document.getElementById('seconds');
let m = document.getElementById('minuten');
let h =  document.getElementById('stunden');


let startTimer = null;


function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0
        m.value = 0 
        s.value = 0
    }else if (s.value !=0 ) {
        s.value--;
    }else if (m.value != 0 && s.value ==0 ) {
        s.value = 59;
        m.value--;
    }else if (h.value != 0 && m.value ==0 ) {
        m.value = 59;
        h.value--;
    }
    return;
}

function stopTimer() {
    clearInterval(startTimer)
    
}


startBtn.addEventListener("click",function (){
    // runTheClock = setInterval(tick, 1000);
    function startTheTime() {
        startTimer = setInterval(function() {
            timer();
        }, 1000)
    }startTheTime()
})


restartBtn.addEventListener("click",function () {
    h.value = 0
    m.value = 0 
    s.value = 0
    stopTimer()
});

