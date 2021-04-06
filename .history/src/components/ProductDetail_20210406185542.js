import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const fetchProductDetail = () => {
    const re
  }

  console.log(productId);
  return (
    <div className="">
      <h1>Product Details</h1>
    </div>
  );
};
