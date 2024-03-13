const timeEL = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervalo = 0;
let timer = 0;
let marks = [];
const formatTime = (time) =>{
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor ((time % 6000) / 100);
    const hundredths = time % 100;
    
    return `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}: ${hundredths.toString().padStart(2, '0')}`;
}

const addMarkToList = (markIndex, marktime)=>{
    marksList.innerHTML = `<p> Marca ${markIndex}: ${formatTime(markTime)}`
}
const marktime = () =>{
    marks.push(time);
    addMarkToList(marks.length,timer)
}

const toggleTimer = ()=>{
    const button = document.getElementById('power');
    const action = button.getAttribute('action');
    
    clearInterval (intervalo);

    if(action == 'start' || action == 'continue' ){
        intervalo = setInterval (() =>{
            timer += 1;
            setTimer(timer);
        }, 10);
        button.setAttribute('action', 'pause')
        button.innerHTML = '<i class="fas fa-pause"></i>';
    }
    else if (action == 'pause'){
        button.setAttribute('action' , 'continue');
        button.innerHTML = '<i class="fas fa-play"></i>';
    }

}
const resetTimer = ()=>{
    clearInterval(intervalo);
    timer=0;
    marks = [];
    setTimer(timer);
    marksList.innerHTML = '';
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fas fa-play"></i>';
}
const setTimer = (time) =>{
    timeEL.innerHTML = formatTime(time);
}

document.getElementById('power').addEventListener('click', toggleTimer);
document.getElementById('marks-list').addEventListener('click', marktime);
document.getElementById('reset').addEventListener('click', resetTimer);