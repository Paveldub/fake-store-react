import React from 'react';
import { useSelector } from 'react-redux';

export const ProductList = () => {
  const products = useSelector(state => state.state)

  return (
    <div className="">
      <h1>Product List</h1>
    </div>
  )
}

