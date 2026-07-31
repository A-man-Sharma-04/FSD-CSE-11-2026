function sum(...num){
    return num.reduce((acc, curr) => acc + curr, 0);
}
const add=(...num)=>{
    let s=0;
    for(let i of num)
    {
        s+=i;
    }
    return s;
}
export {sum,add};