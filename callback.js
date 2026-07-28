function register(cb){
    setTimeout(() => {
        console.log("Register here");
        cb();
    }, 10000);
}
function login(cb){
    setTimeout(() => {
        console.log("login here");
        cb();
    }, 5000);
}
function getData(cb){
    setTimeout(() => {
        console.log("Fetch Data from Db");
        cb();
    }, 3000);
}
function displayData(){
    setTimeout(() => {
        console.log("display Data");
    }, 6000);
}
register(() => {
    login(() => {
        getData(() => {
            displayData();
        });
    });
});
console.log("Call Another application");