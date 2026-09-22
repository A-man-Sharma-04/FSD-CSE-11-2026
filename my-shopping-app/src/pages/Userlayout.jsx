import { Link } from "react-router-dom";

const Userlayout = ({ addToCart, cartCount }) => {
  const toys = [
    { id: 1, title: "Soft Teddy Bear", price: 599, image: "https://images.unsplash.com/photo-1566254985781-1add8648e6bd?w=400&auto=format&fit=crop&q=60" },
    { id: 2, title: "Classic Building Blocks", price: 799, image: "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?w=400&auto=format&fit=crop&q=60" },
    { id: 3, title: "White Plush Bear", price: 449, image: "https://images.unsplash.com/photo-1548037315-6d2daff1dbf7?w=400&auto=format&fit=crop&q=60" },
    { id: 4, title: "Brown Cuddle Bear", price: 699, image: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=400&auto=format&fit=crop&q=60" },
    { id: 5, title: "Giant Teddy Bear", price: 1299, image: "https://images.unsplash.com/photo-1577568315884-9372fbdd39f4?w=400&auto=format&fit=crop&q=60" },
    { id: 6, title: "Happy Plush Friend", price: 799, image: "https://plus.unsplash.com/premium_photo-1703716853446-162cf3e4bc4a?w=400&auto=format&fit=crop&q=60" },
  ];

  return (
    <div>
      <h2>Kids Toys</h2>
      <p>Cart has {cartCount} items</p>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>

      <div className="toy-grid">
        {toys.map((toy) => (
          <div key={toy.id} className="toy-card">
            <img src={toy.image} alt={toy.title} />
            <h3>{toy.title}</h3>
            <p>Price: ₹{toy.price}</p>
            <button onClick={() => addToCart(toy)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlayout;