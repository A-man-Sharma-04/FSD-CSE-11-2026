function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register here");
            resolve();
        }, 10000);
    })
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here");
            resolve();
        }, 5000);
    });
}
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch Data from Db");
            resolve();
        }, 3000);
    });
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display Data");
            resolve();
        }, 6000);
    });
}
/*
register().then(login).then(getData).then(displayData).catch((err) => {
    console.log(err);
});
console.log("Call Another application");*/

async function test()
{
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err)
    {
        console.log(err);
    }
}
test();
console.log("Call Another application");