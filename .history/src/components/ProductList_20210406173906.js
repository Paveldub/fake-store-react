import React from 'react';
import { useSelector } from 'react-redux';

export const ProductList = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <div className="ui grid container"  style={{marginTop: '30px'}}>
      <h1>Product List</h1>
    </div>
  )
}

