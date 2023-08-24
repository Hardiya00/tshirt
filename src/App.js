import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderedItems, setOrderedItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Cool T-Shirt 1',
      description: 'A stylish and comfortable t-shirt.',
      price: 20,
      sizes: ['Small', 'Medium', 'Large'],
      image: 'timages/tshirt01.jpg', // Image path relative to public directory
    },
    {
      id: 2,
      name: 'Cool T-Shirt 2',
      description: 'Another cool t-shirt design.',
      price: 25,
      sizes: ['Small', 'Medium', 'Large'],
      image: 'timages/tshir0t2.jpg', // Image path relative to public directory
    },
    // Add more products here
  ];
  
  const addToCart = (productId, size) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems([...cartItems, { ...productToAdd, size }]);
      setTotal(total + productToAdd.price);
    }
  }

  const removeFromCart = (productId) => {
    const removedProduct = cartItems.find((item) => item.id === productId);
    if (removedProduct) {
      setTotal(total - removedProduct.price);
    }
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handleOrder = () => {
    setOrderedItems(cartItems);
    setCartItems([]);
    setTotal(0);
  };

  const handleCancel = () => {
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div className="app">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} total={total} />
      <div className="buttons">
        <button onClick={handleOrder}>Order</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      <div className="ordered-items">
        <h2>Ordered Items</h2>
        <ul>
          {orderedItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Size: {item.size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
