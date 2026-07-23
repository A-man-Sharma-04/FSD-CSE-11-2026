const a=[1,2,3,4,5,6,7,8,9,10];
const even=a.filter((i)=>i%2==0);
console.log(even);
const square=even.map((i)=>i*i);
console.log(square);
const sum=square.reduce((acc,i)=>acc+i,0);
console.log(sum);