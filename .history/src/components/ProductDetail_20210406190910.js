import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const productsId = useSelector((state) => state.selectedProduct.product);

  console.log(productsId);

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('ERROR', err);
      });
    
    dispatch(selectedProduct(response.data));
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
