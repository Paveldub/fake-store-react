import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

export const ProductList = () => {

  const dispatch = useDispatch();

  const options = {
    method: 'GET',
    url: 'https://neobi.p.rapidapi.com/api/products',
    params: { rev: 'v1.9', count: '5', htmlDescription: '0', page: '1' },
    headers: {
      'x-rapidapi-key': '8234017c37mshd440df16a123d63p1007efjsn2e4797609776',
      'x-rapidapi-host': 'neobi.p.rapidapi.com',
    },
  };

  const fetchProducts = async () => {
    const response = await axios
      .request(options)
      .catch(function (error) {
        console.error(error, 'error');
      });
    
    // console.log(response.data);
    
    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="ui grid container" style={{ marginTop: '30px' }}>
      <ProductComponent />
    </div>
  );
};
