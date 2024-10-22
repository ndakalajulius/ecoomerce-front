import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
    </div>
  );
};

export default Product;
