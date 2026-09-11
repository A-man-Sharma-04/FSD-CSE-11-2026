import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="Navbar">
      <div className="nav-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          🏠 Home Catalog
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          📦 Orders
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          ⚙️ Settings
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          👤 Profile
        </NavLink>
        <NavLink to="/logout" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          🚪 Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;