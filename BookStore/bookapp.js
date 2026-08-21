const bookData=
    [
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 465}, 
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 500}, 
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 600}, 
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 700}, 
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 800}, 
        {image:"https://m.media-amazon.com/images/I/6132FVQ5ZQL._SL1499_.jpg", price : 900}
    ];
function Book(props){
const div=document.createElement("div");
div.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src",""+props.image);
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const h2=document.createElement("h2");
h2.innerHTML="Price: INR "+props.price;
const bt=document.createElement("button");
bt.innerText="Add to Cart";
bt.onclick=()=>{addToCart(props.price)};
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
const cart=[];
function addToCart(data){
    cart.push(data);
    console.log(data,"data added successfully");
    alert("book added successfully");
}
const bookstore=bookData.map((i)=>Book(i));
const parent=document.getElementById("root");
for(b of bookstore){
    parent.appendChild(b);
}