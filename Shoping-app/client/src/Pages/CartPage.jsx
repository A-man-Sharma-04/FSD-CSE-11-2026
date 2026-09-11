import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, cartCount, updateQuantity, removeFromCart, clearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? (subtotal > 2000 ? 0 : 99) : 0;
  const grandTotal = subtotal + shipping;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} />
      
      <main className="cart-page">
        <div className="cart-container">
          <h2>Your Shopping Cart</h2>

          {orderPlaced ? (
            <div className="order-success-box">
              <span className="success-icon">🎉</span>
              <h3>Order Placed Successfully!</h3>
              <p>Thank you for your purchase. Your order is being processed.</p>
              <Link to="/" className="continue-shopping-btn" onClick={() => setOrderPlaced(false)}>
                Back to Product Catalog
              </Link>
            </div>
          ) : cart.length === 0 ? (
            <div className="empty-cart-box">
              <span className="empty-cart-icon">🛒</span>
              <h3>Your cart is currently empty</h3>
              <p>Looks like you haven't added any items to your shopping cart yet.</p>
              <Link to="/" className="continue-shopping-btn">
                Browse Product Catalog
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id || item.title} className="cart-item-card">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&auto=format&fit=crop&q=80"}
                      alt={item.title}
                      className="cart-item-thumb"
                    />
                    <div className="cart-item-info">
                      <h4>{item.title}</h4>
                      {item.category && <span className="cart-item-cat">{item.category}</span>}
                      <div className="cart-item-unit-price">₹{item.price.toLocaleString('en-IN')}</div>
                    </div>

                    <div className="cart-qty-controls">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id || item.title, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id || item.title, 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item-subtotal">
                      ₹{(item.price * (item.quantity || 1)).toLocaleString('en-IN')}
                    </div>

                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id || item.title)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping Fee</span>
                  <span>{shipping === 0 ? <strong className="free-shipping">FREE</strong> : `₹${shipping}`}</span>
                </div>
                {subtotal < 2000 && subtotal > 0 && (
                  <p className="free-shipping-hint">Add ₹{(2000 - subtotal).toLocaleString('en-IN')} more for FREE delivery!</p>
                )}
                <hr />
                <div className="summary-row total-row">
                  <span>Total Amount</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>

                <button type="button" className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
