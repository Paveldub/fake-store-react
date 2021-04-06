import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('ERROR', err);
      });
    
    console.log(response);
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div className="">
      <h1>Product Details</h1>
    </div>
  );
};
