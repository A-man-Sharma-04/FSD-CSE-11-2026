import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlayout from "./Pages/Userlayout";
import CartPage from "./Pages/CartPage";
import OrdersPage from "./Pages/OrdersPage";
import SettingsPage from "./Pages/SettingsPage";
import ProfilePage from "./Pages/ProfilePage";
import LogoutPage from "./Pages/LogoutPage";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => (i.id && i.id === item.id) || i.title === item.title);
      if (existing) {
        return prevCart.map((i) =>
          (i.id && i.id === item.id) || i.title === item.title
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (idOrTitle) => {
    setCart((prevCart) => prevCart.filter((item) => (item.id || item.title) !== idOrTitle));
  };

  const updateQuantity = (idOrTitle, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if ((item.id || item.title) === idOrTitle) {
            const newQty = (item.quantity || 1) + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="app-root">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Userlayout addToCart={addToCart} cartCount={totalCartCount} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                cartCount={totalCartCount}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/orders" element={<OrdersPage cartCount={totalCartCount} />} />
          <Route path="/settings" element={<SettingsPage cartCount={totalCartCount} />} />
          <Route path="/profile" element={<ProfilePage cartCount={totalCartCount} />} />
          <Route path="/logout" element={<LogoutPage cartCount={totalCartCount} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;