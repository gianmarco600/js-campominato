// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

var max = 101 ;
var min = 1 ;
var playerTries = [];
var mode = 16;
var mines = randomArr( 1 , 101 , mode);
console.log(mines);

gioca();

function gioca(){
    var num = askInput();
    console.log('lista numeri inseriti: ' , playerTries,'numero tentativi: ', playerTries.length);


    console.log('hai scelto: ' , num);
    while (ruleChecker(num)){
        playerTries.push(num);
        console.log('lista numeri inseriti: ' , playerTries,'numero tentativi: ', playerTries.length);
        num = askInput();
    }
}



// funzioni----------------------------------------------------------

// genera un numero random
function getRandom(max , min){
    return Math.floor(Math.random()* (max - min) + min)
}

// genera una lista di numeri random con input massimo, minimo e la lunghezza desiderata della lista; La lista sara priva di ripetizioni
function randomArr( max , min , diff){
    var arr = [];
    while (arr.length < diff){
        var numRandom = getRandom( max , min);
        if (!arr.includes(numRandom)){
            arr.push(numRandom);
            
        }
    }
    return arr;
}

// chiede un input al giocatore e ritorna il numero scelto
function askInput(){
    var attempt = parseInt(prompt('inserisci un numero da 1 a 100'));
    inputCheck(attempt);
    // console.log('tentativo inserito:' , attempt);
    return attempt;
    
}

// controlla che l'input della funzione rispetti le regole fornite dai valori max e min
function inputCheck(input){
    if (  input >= max || input < min || isNaN(input) ){
        alert('ho detto da 1 a 100');
        gioca();
    }
}

function ruleChecker(playerNumb){
    while (playerTries.length < (100 - mines.length )){

        if ( !mines.includes(playerNumb)){
            if(!playerTries.includes(playerNumb)){
            return true;
            }
            else{
                alert('hai inserito gia questo numero');
                gioca();
            }
        }
        else{
            console.log('hai preso una bomba')
            alert('hai perso! Numero tentativi: ' + playerTries.length );
            playerTries = []
            gioca();
            return false;
        }
    }
}