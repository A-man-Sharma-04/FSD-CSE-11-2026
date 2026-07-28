function register(){
    waitfordelay(10000);
    console.log("Register here")
}
function login(){
    waitfordelay(5000);
    console.log("login here")
}
function getData(){
    waitfordelay(3000);
    console.log("Fetch Data from Db")
}
function displayData(){
    waitfordelay(6000);
    console.log("display Data")
}
function waitfordelay(delay){
const mt=Date.now()+delay;
while(Date.now()<mt){} 
};
register();
login();
getData();
displayData();
console.log("Call Another application")