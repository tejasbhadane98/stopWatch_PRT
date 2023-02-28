let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let castElement = document.getElementById("castbtn");

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ms = document.getElementById("ms");


let hour = 0;
let minute = 0;
let second = 0;
// let milliSec = 0;
let count =0;
let castIndex = 1;
let output = false;

resetButton.addEventListener("click", function(){
    output = false;
    hour=0;
    minute=0;
    second=0;
    milliSec=0;
    count=0;

    hr.textContent="00";
    min.textContent="00";
    sec.textContent="00";
    ms.textContent="000"
    castElement.innerHTML = ""
    castIndex =1;
    
})
startButton.addEventListener("click", function(){
    output = true;
    time();
})

pauseButton.addEventListener("click", function(){
    output = false;
    
})

function cast(){
    let castMs= ms.innerHTML;
    let castSec = sec.innerHTML;
    let castMin = min.innerHTML
    let castHour = hr.innerHTML
    castElement.innerHTML = castElement.innerHTML + `<div>Cast ${castIndex}: ${castHour}: ${castMin}:${castSec}:${castMs} </div>`
    castIndex = castIndex + 1
}

function time(){
    if(output){
        count++;

        if(count==100){
            second++;
            count=0;
        }
        if(second==60){
            minute++;
            second=0;
        }
        if(minute==60){
            hour++;
            minute=0;
            second=0;
    
        }
    
        let hrans = hour;
        let minans = minute;
        let secans = second;
        let countans = count;
    
        if(hour<10){
            hrans = "0"+hrans;
        }
    
        if(minute<10){
            minans = "0"+minans;
        }
        if(second<10){
            secans = "0"+secans;
        }
        if(count<100){
            countans = "0"+countans;
        }
    
        // document.getElementById("hr").innerHTML= hrans;
        // document.getElementById("min").innerHTML= minans;
        // document.getElementById("sec").innerHTML= secans;
        // document.getElementById("ms").innerHTML= msString;
        // setTimeout(time, 10)
        hr.textContent = hrans;
        min.textContent = minans;
        sec.textContent = secans;
        ms.textContent = countans;

        setTimeout(time, 10)
        

    }
    
}





