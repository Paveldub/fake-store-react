import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

export const ProductList = () => {

  const products = useSelector(state => state)

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Error', err);
      });

    dispatch(setProducts(response.data));
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
