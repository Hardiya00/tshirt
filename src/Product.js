import React, { useState } from 'react';


const Product = ({ id, name, description, price, sizes, image, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className="product">
      <img src={ 'timages/' + image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? 'selected' : ''}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (selectedSize) {
            addToCart(id, selectedSize);
            setSelectedSize('');
          } else {
            alert('Please select a size.');
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
