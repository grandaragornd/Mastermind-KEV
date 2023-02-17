//Initiate var and objects and DOM
const nickInput=document.getElementById('nick');
const sizeInput=document.getElementById('size');
const gameFormular=document.getElementById('gameFormular');
const error=document.getElementById('error');

//Error checker at game.html
if(sessionStorage.getItem('error')){
    error.innerText=sessionStorage.getItem('error')
    sessionStorage.removeItem('error') // for reload and removal of message!
}

//function from eventhandlers
function checkFormular(event){
    if(nickInput.value.length == 0 ) {
        console.log('Please enter a nickname')
        nickInput.focus();
        event.preventDefault();
        error.innerText="Please enter a nickname!"
        return false
    } else if(sizeInput.value == "0") {
        console.log('Please select a game size')
        nickInput.focus();
        event.preventDefault();
        error.innerText="Please select the gamesize!"
        return false
    }
        //correct information
        userData(nickInput);
        return true;
      
}

// Formular sent


// Event Handlers
gameFormular.addEventListener('submit', checkFormular)
