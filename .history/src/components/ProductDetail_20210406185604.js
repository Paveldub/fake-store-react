import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/1');
  }

  console.log(productId);
  return (
    <div className="">
      <h1>Product Details</h1>
    </div>
  );
};
