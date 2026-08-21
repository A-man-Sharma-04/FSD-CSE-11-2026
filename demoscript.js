function addparagraph(){
    const para=document.createElement("p");
    para.innerHTML="<u>this is new para</u>";
    para.style.color="blue";


    const parent = document.getElementById("root");
    parent.appendChild(para);
}

const removeparagraph=()=>{
    const para =document.querySelector("p")
    const parent = document.getElementById("root")
    parent.removeChild(para);
}

const removeallparagraph=()=>{
    const para =document.querySelectorAll("p")
    const parent = document.getElementById("root")
    // for(i of para){
    //     parent.removeChild(i);
    // }
    para.forEach((i) => {
        parent.removeChild(i);
    });
}