function Book() {
    return (
        <div>
            <img src="" width={100} height={100} alt="Book Image"/>
            <h2>Title: ReactJS</h2>
            <h2>Price: 465</h2>
            <button>Add to Cart</button>
        </div>
    );
}
function App() {
    return (
        <div>
            <h1><center>Book Store</center></h1>
            <Book/>
        </div>
    );
}
const parebt=document.getElementById("root");
const root=ReactDOM.createRoot(parebt);
root.render(<App />);