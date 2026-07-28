function register(){
    setTimeout(() => {
        console.log("Register here")
    }, 10000);
}
function login(){
    setTimeout(() => {
        console.log("login here")
    }, 5000);
}
function getData(){
    setTimeout(() => {
        console.log("Fetch Data from Db")
    }, 3000);
}
function displayData(){
    setTimeout(() => {
        console.log("display Data")
    }, 6000);
}

register();
login();
getData();
displayData();
console.log("Call Another application")