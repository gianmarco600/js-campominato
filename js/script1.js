// prova mk2

document.getElementById("inizia").addEventListener("click" , faiTutto);

function faiTutto(){
    var playerTries = [];
    max = diff();
    min = 1;
    console.log(max);
    var num;
    var mines = randomArr(max , 16);
    console.log(mines);
    var min = 1 ;
    
    
    getInput();
    
}

function diff(){
    var max;
    if (document.getElementById("facile").checked == true){
        max = 100;
        
    }
    else if (document.getElementById("medio").checked == true){
        max = 80;
    
    }
    else if (document.getElementById("difficile").checked == true){
        max = 50;

    }
    return max;
}

// genera un numero random
function getRandom(max){
    return Math.floor(Math.random()* max)
}

// genera una lista di numeri random con input massimo, minimo e la lunghezza desiderata della lista; La lista sara priva di ripetizioni
function randomArr( max , diff){
    var arr = [];
    while (arr.length < diff){
        var numRandom = getRandom( max);
        if (!arr.includes(numRandom)){
            arr.push(numRandom);
            
        }
    }
    return arr;
}

// aspetta un input al giocatore e ritorna il numero scelto
function getInput(){
    document.getElementById('inviatentativo').addEventListener('click' , askInput);
}

function askInput(){
    var attempt = parseInt(document.getElementById("attempt").Value);
    inputCheck(attempt);
    // console.log('tentativo inserito:' , attempt);
    num = attempt;
    gioca();
}

function inputCheck(input){
    if (  input > max || input < 1 || isNaN(input) ){
        alert('ho detto da 1 a 100');
        gioca();
    }
}