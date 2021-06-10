// var semaforoDiff = 0;
var max;
var mine;
var attemptArr = [];
start();
var printOutput = '';
printOutput = document.getElementById('output').innerHTML;

function start(){
    document.getElementById("inizia").addEventListener('click' , diff);
}
// console.log(max);



function diff(){
    
       
    if(document.getElementById("facile").checked == true){
        max = 100;
    }
    else if(document.getElementById("medio").checked == true){
        max = 80;
    }
    else if(document.getElementById("difficile").checked == true){
        max = 50;
    }
    document.getElementById("diff").classList.add("_hidden");  
    document.getElementById("input").classList.remove("_hidden");  
    console.log(max);
    

    document.getElementById('label').innerHTML = 'Inserisci un numero da 1 a ' + max;
    
    mine = getRandomArr(max);
    console.log(mine);
    document.getElementById('inviatentativo').addEventListener('click' , getValue );
}

function getRandomArr(massimo){
    var randomArr = [];
    for(var i = 0; i < 16; i++){
        var numR = Math.floor(Math.random()* massimo) 
        randomArr.push(numR);
    }
    return randomArr;
}

function getValue(){
    document.getElementById("console").classList.remove("_hidden")
    var attempt = parseInt(document.getElementById('attempt').value);
    if(attempt < 0 || attempt > max){
        document.getElementById('output').innerHTML += "<li class='text-center'>Puoi inserire solo numeri fino a " + max + "</li>";
    }
    else{
        if(mine.includes(attempt)){
            
            document.getElementById('inviatentativo').removeEventListener('click' , getValue , false );
            
            document.getElementById("input").classList.add("_hidden");  
            
            document.getElementById("console").classList.add("_hidden")
            document.getElementById("persa").classList.remove("_hidden"); 
            document.getElementById('fine').innerHTML = "OPS! Sei esploso al tentativo numero " + (attemptArr.length+1);
            document.getElementById('output').innerHTML = "";
            document.getElementById('riprova').addEventListener('click' , beforeStart);

        }
        else if(attemptArr.includes(attempt)){
            document.getElementById('output').innerHTML += "<li class='text-center _yellow'>Occhio hai già inserito inserito questo numero.</li>";
            
        }
        else if (isNaN(attempt)){
            document.getElementById('output').innerHTML += "<li class='text-center _red'>Non credo tu abbia davvero inserito un numero, ritenta.</li>";
        }
        else{
            attemptArr.push(attempt);
            document.getElementById('output').innerHTML += "<li class='text-center _green'>Hai inserito il numero " + attempt + ". <strong>Tentativo numero " + attemptArr.length + "</strong></li>";
        }
        }
    document.getElementById('attempt').value = "";
    console.log(attemptArr);
    
}

function beforeStart(){
    document.getElementById("diff").classList.remove("_hidden");  
    attemptArr = [];
    document.getElementById("persa").classList.add("_hidden"); 
    start()
}