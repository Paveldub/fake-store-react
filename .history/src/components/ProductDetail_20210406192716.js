import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { Preloader } from '../common/preloader/preloader';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  
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
    if (productId && productId !== '') fetchProductDetail();
  }, [productId]);

 
    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? <Preloader /> : <Preloader />}
      </div>
    );

};
