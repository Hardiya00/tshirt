import React from 'react';

const Cart = ({ cartItems, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Size: {item.size}
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
