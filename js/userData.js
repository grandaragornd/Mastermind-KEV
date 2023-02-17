// user game storage
let nick;
let email;
let size;
let geolocationTxt;
// collection of user data
function userData(nick){
    sessionStorage.setItem('nick', nick.value);
}
function getUserData(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

//validation of user data when entering game
function checkUserData(){
    if(nick==null){
        sessionStorage.setItem('error', 'Please enter a Nickname before starting the game!')
        return false;
    } 
    return true;
    
}

//geolocalitzation

//local storage
function usersHistory(nick){
    let historyStorage = localStorage.getItem('history');
    let history;
    if(historyStorage==null){
        let history=[];
    } else {
        history=JSON.parse(historyStorage);
    }
    let userRegister={
        nickname: nick.value,
        fecha: Date.now()
    }
    history.push(userRegister);
    localStorage.setItem('history', JSON.stringify(history))
}

