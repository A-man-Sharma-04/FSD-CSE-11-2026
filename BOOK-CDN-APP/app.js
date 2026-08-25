import Book from "./book.js";
const bookdata=[{image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81q77Q39nEL.jpg&f=1&nofb=1&ipt=effa68ef057b7a4ba694e64dd8989b0367bd070aa1999d17dc469c9e192243e3",title:"ReactJs",price:"465/-"},
                {image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81wKMqEv6LL._SL1450_.jpg&f=1&nofb=1&ipt=9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4",title:"NodeJs",price:"567/-"},
                {image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.harrypotterfanzone.com%2Fhalf-blood-prince-us-childrens-edition-2013-1050x0-c-default.jpg&f=1&nofb=1&ipt=ed2c47e1a3652294726dd7984ab53c5eb6ca3b53b3a709701b74af999728708d",title:"ExpressJs",price:"763/-"},
                {image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcharlotteglaze.com%2Fwp-content%2Fuploads%2F2025%2F04%2Fharry-potter-and-the-half-blood-prince.jpg&f=1&nofb=1&ipt=06509ee19cec80b1f704f6061bc3721d21b9711c2446a34f0fdcfacc9968ee95",title:"MongoDB",price:"876/-"},
                {image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgcdn.stablediffusionweb.com%2F2024%2F11%2F21%2Fde0ce6d1-8189-4a59-affd-2f0f5ffc5c66.jpg&f=1&nofb=1&ipt=1f39b072ce9b427985e88773978f25e542858b9bfae8b41aef53652baed7b277",title:"JavaScript",price:"345/-"},
                {image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.chulabook.com%2Fimages%2Fpid-135307.jpeg&f=1&nofb=1&ipt=72b4300a6df8a9f4a5423e43b4b92858e45db8050468fe1e035306cebda4b268",title:"HTML",price:"234/-"}
];
function App(){
    const bookstore=bookdata.map((book)=>{
        return Book(book);
    })
    const div=React.createElement("div",{className:"bookstore"},bookstore);
    return div;
}
export default App;