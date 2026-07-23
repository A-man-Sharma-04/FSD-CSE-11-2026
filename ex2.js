function sum(a,b) {
    return a+b;
}
console.log("Sum of 10 and 20 is:", sum(10,20));
//agar sirf ek hi argument dia hota toa js dusra arg khud se undefined kar deta , code run karta but undefined result ko not a Number(NaN) dikhata
const sum1=(a=0,b=0)=>a+b;// arrow function
console.log("Sum of 10 and 20 is:", sum1(10,20));