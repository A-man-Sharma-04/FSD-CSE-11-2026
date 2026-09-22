const CartPage = ({ cart, cartCount, updateQuantity, removeFromCart, clearCart }) => {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id || item.title}>
                <span>{item.title}</span>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id || item.title, 1)}>+</button>
                <button onClick={() => updateQuantity(item.id || item.title, -1)}>-</button>
                <button onClick={() => removeFromCart(item.id || item.title)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
