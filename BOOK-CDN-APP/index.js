function Book(){
    const image=React.createElement("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81q77Q39nEL.jpg&f=1&nofb=1&ipt=effa68ef057b7a4ba694e64dd8989b0367bd070aa1999d17dc469c9e192243e3",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},"Title:ReactJS");
    const price=React.createElement("h2",{style:{color:"green"}},"Price:465/-");
    const btn=React.createElement("button",{style:{color:"blue"}},"Add to Cart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const bookdata=[{image:"",title:"ReactJs",price:"465/-"},
                {image:"",title:"NodeJs",price:"567/-"},
                {image:"",title:"ExpressJs",price:"763/-"},
];
function App(){
    const bookstore=bookdata.map((book)=>{
        return Book();
    })
    const div=React.createElement("div",{className:"bookstore"},bookstore);
    return div;
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());
