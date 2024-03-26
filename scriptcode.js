let timerdescps=["Study : 25 minutes Break : 5 minutes",
"2 minutes cooking and then 8 minutes rest",
"Soak for 1 minute",
"Keep Pushing",
"20 seconds between sets",
"Take a rest for 2 and a half minutes"
]

let studyBtn=document.getElementById("Study");
let foodBtn=document.getElementById("Food");
let fitBtn=document.getElementById("Fitness");
let pomBtn=document.getElementById("Pomodoro");
let soyBtn=document.getElementById("Soya");
let tofuBtn=document.getElementById("Tofu");
let cardioBtn=document.getElementById("Cardio");
let gymBtn=document.getElementById("Gym");
let restBtn=document.getElementById("Rest");
// let resetBtn=document.getElementById("Reset");
let returnContainer=document.getElementById("Return");
let descElt=document.getElementById("description");
let timerElt=document.getElementById("timerValue");
let workoutsElt=document.getElementById("workouts");
let gapElt=document.getElementById("gap");

let studyBtns=[pomBtn];
let foodBtns=[soyBtn,tofuBtn];
let fitBtns=[cardioBtn,gymBtn];


function studyButton(){
    studyBtn.classList.toggle("d-none");
    foodBtn.classList.toggle("d-none");
    fitBtn.classList.toggle("d-none");
    returnContainer.classList.toggle("d-none");
    for(let btn of studyBtns)
    {
        btn.classList.toggle("d-none");
    }
}

function foodButton(){
    studyBtn.classList.toggle("d-none");
    foodBtn.classList.toggle("d-none");
    fitBtn.classList.toggle("d-none");
    returnContainer.classList.toggle("d-none");
    for(let btn of foodBtns)
    {
        btn.classList.toggle("d-none");
    }
}

function fitButton(){
    studyBtn.classList.toggle("d-none");
    foodBtn.classList.toggle("d-none");
    fitBtn.classList.toggle("d-none");
    returnContainer.classList.toggle("d-none");
    for(let btn of fitBtns)
    {
        btn.classList.toggle("d-none");
    }
    restBtn.classList.toggle("d-none");
    workoutsElt.classList.toggle("d-none");
    gapElt.classList.toggle("d-none");
}

let counter_min=null,counter_sec=null;
let uniqueId=null;

function pomodoro(event){
    for(let btn of studyBtns)
    {
        btn.classList.toggle("d-none");
    }
    // resetBtn.classList.toggle("d-none");
    timerValue.classList.toggle("d-none");
    descElt.classList.toggle("d-none");
    descElt.textContent=timerdescps[0];
    counter_min=25;counter_sec=0;
    timerElt.textContent="Study : "+counter_min+" minutes and "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            if(counter_min===0)
            {
                timerElt.textContent="Break : "+5+" minutes and "+0+" seconds";
                clearInterval(uniqueId);
                counter_min=5;counter_sec=0;
                uniqueId=setInterval(function(){
                    counter_sec=counter_sec-1;
                    if(counter_sec<0)
                    {
                        if(counter_min===0)
                        {
                            timerElt.textContent="30 minutes of Studying Done!!!";
                            clearInterval(uniqueId);
                        }
                        else
                        {
                            counter_min-=1;
                            counter_sec=59;
                            timerElt.textContent="Break : "+counter_min+" minutes and "+counter_sec+" seconds";
                        }
                    }
                    else
                    {
                        timerElt.textContent="Break : "+counter_min+" minutes and "+counter_sec+" seconds";
                    }
                },1000);
            }
            else
            {
                counter_min-=1;
                counter_sec=59;
                timerElt.textContent="Study : "+counter_min+" minutes and "+counter_sec+" seconds";
            }
        }
        else
        {
            timerElt.textContent="Study : "+counter_min+" minutes and "+counter_sec+" seconds";
        }
    },1000);
}

function soya(){
    for(let btn of foodBtns)
    {
        btn.classList.toggle("d-none");
    }
    // resetBtn.classList.toggle("d-none");
    timerValue.classList.toggle("d-none");
    descElt.classList.toggle("d-none");
    descElt.textContent=timerdescps[1];
    counter_min=2;counter_sec=0;
    timerElt.textContent="Cook for "+counter_min+" minutes and "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            if(counter_min===0)
            {
                clearInterval(uniqueId);
                counter_min=8;counter_sec=0;
                timerElt.textContent="Leave for "+counter_min+" minutes and "+counter_sec+" seconds";
                uniqueId=setInterval(function(){
                    counter_sec=counter_sec-1;
                    if(counter_sec<0)
                    {
                        if(counter_min===0)
                        {
                            timerElt.textContent="Soya Ready!!!";
                            clearInterval(uniqueId);
                        }
                        else
                        {
                            counter_min-=1;
                            counter_sec=59;
                            timerElt.textContent="Leave for "+counter_min+" minutes and "+counter_sec+" seconds";
                        }
                    }
                    else
                    {
                        timerElt.textContent="Leave for "+counter_min+" minutes and "+counter_sec+" seconds";
                    }
                },1000);
            }
            else
            {
                counter_min-=1;
                counter_sec=59;
                timerElt.textContent="Cook for "+counter_min+" minutes and "+counter_sec+" seconds";
            }
        }
        else
        {
            timerElt.textContent="Cook for "+counter_min+" minutes and "+counter_sec+" seconds";
        }    
    },1000);
}

function tofu(){
    for(let btn of foodBtns)
    {
        btn.classList.toggle("d-none");
    }
    // resetBtn.classList.toggle("d-none");
    timerValue.classList.toggle("d-none");
    descElt.classList.toggle("d-none");
    descElt.textContent=timerdescps[2];
    counter_min=1;counter_sec=0;
    timerElt.textContent="Soak : "+counter_min+" minutes and "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            if(counter_min===0)
            {
                clearInterval(uniqueId);
                timerElt.textContent="Tofu Ready!!!";
            }
            else
            {
                counter_min-=1;
                counter_sec=59;
                timerElt.textContent="Soak : "+counter_min+" minutes and "+counter_sec+" seconds";
            }
        }
        else
        {
            timerElt.textContent="Soak : "+counter_min+" minutes and "+counter_sec+" seconds";
        }
    },1000);
}

function cardioHelper1(iters,gapValue){
    counter_sec=30;
    timerElt.textContent="Workout for "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            clearInterval(uniqueId);
            iters-=1;
            if(iters>0)
            {
                cardioHelper2(iters,gapValue);
            }
            else
            {
                timerElt.textContent="Cardio Session Done!!!";
            }
        }
        else
        {
            timerElt.textContent="Workout for "+counter_sec+" seconds";
        }
    },1000);
}

function cardioHelper2(iters,gapValue){
    counter_sec=gapValue;
    timerElt.textContent="Breathe for "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            clearInterval(uniqueId);
            cardioHelper1(iters,gapValue);
        }
        else
        {
            timerElt.textContent="Breathe for "+counter_sec+" seconds";
        }
    },1000);
}

function cardio(){
    for(let btn of fitBtns)
    {
        btn.classList.toggle("d-none");
    }
    // resetBtn.classList.toggle("d-none");
    timerValue.classList.toggle("d-none");
    descElt.classList.toggle("d-none");
    workoutsElt.classList.toggle("d-none");
    gapElt.classList.toggle("d-none");
    descElt.textContent=timerdescps[3];
    counter_min=0,counter_sec=30;
    let iters=workoutsElt.value;
    if(iters==="")
    {
        iters=1;
    }
    else
    {
        iters=parseInt(iters);
    }
    let gapValue=gapElt.value;
    if(gapValue==="")
    {
        gapValue=20;
        alert("Enter a valid integer");
    }
    else
    {
        gapValue=parseInt(gapValue);
    }
    cardioHelper1(iters,gapValue);
}

function gym(){
    for(let btn of fitBtns)
    {
        btn.classList.toggle("d-none");
    }
    // resetBtn.classList.toggle("d-none");
    timerValue.classList.toggle("d-none");
    descElt.classList.toggle("d-none");
    workoutsElt.classList.toggle("d-none");
    gapElt.classList.toggle("d-none");
    descElt.textContent=timerdescps[4];
    counter_min=0;counter_sec=20;
    timerElt.textContent="Gap for "+counter_min+" minutes and "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            if(counter_min===0)
            {
                clearInterval(uniqueId);
                timerElt.textContent="Set Done!!!";
            }
            else
            {
                counter_min-=1;
                counter_sec=59;
                timerElt.textContent="Gap for "+counter_min+" minutes and "+counter_sec+" seconds";
            }
        }
        else{
            timerElt.textContent="Gap for "+counter_min+" minutes and "+counter_sec+" seconds";
        }
    },1000);
}

function rest(){
    clearInterval(uniqueId);
    descElt.textContent=timerdescps[5];
    counter_min=2;counter_sec=30;
    timerElt.textContent="Take rest for "+counter_min+" minutes and "+counter_sec+" seconds";
    uniqueId=setInterval(function(){
        counter_sec=counter_sec-1;
        if(counter_sec<0)
        {
            if(counter_min===0)
            {
                clearInterval(uniqueId);
                timerElt.textContent="Rest Over, time to workout";
            }
            else
            {
                counter_min-=1;
                counter_sec=59;
                timerElt.textContent="Take rest for "+counter_min+" minutes and "+counter_sec+" seconds";
            }
        }
        else
        {
            timerElt.textContent="Take rest for "+counter_min+" minutes and "+counter_sec+" seconds";
        }
    },1000);
}


// function backClick(){
//     clearInterval(uniqueId);
//     if (timerValue.classList.contains("d-none")) {
        
//     } else {
//         // Same as home
//         homeClick();
//     }
// }

function homeClick(){
    clearInterval(uniqueId);
    studyBtn.classList.toggle("d-none");
    foodBtn.classList.toggle("d-none");
    fitBtn.classList.toggle("d-none");
    returnContainer.classList.toggle("d-none");
    for(let btn of studyBtns)
    {
        btn.classList.add("d-none");
    }
    for(let btn of foodBtns)
    {
        btn.classList.add("d-none");
    }
    for(let btn of fitBtns)
    {
        btn.classList.add("d-none");
    }
    restBtn.classList.add("d-none");
    timerValue.classList.add("d-none");
    descElt.classList.add("d-none");
    workoutsElt.classList.add("d-none");
    gapElt.classList.add("d-none");
}