import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

export const ProductList = () => {

  const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neobi.p.rapidapi.com/api/producers',
    headers: {
      'API-KEY': 'db0e5b87-b625-4714-9371-afb368cd0443',
    },
  });

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://neobi.p.rapidapi.com/api/producers')
      .catch((err) => {
        console.log('Error', err);
      });

    console.log(response);

    // dispatch(setProducts(response.data));
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
