import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import axios from 'axios';

export const ProductList = () => {

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Error', err);
      });

    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container" style={{ marginTop: '30px' }}>
      <ProductComponent />
    </div>
  );
};
