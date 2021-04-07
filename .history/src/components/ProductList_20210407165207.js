import React, { useEffect } from 'react';
import { ProductComponent } from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

export const ProductList = () => {

  const options = {
    method: 'GET',
    url: 'https://neobi.p.rapidapi.com/api/producers',
    params: { rev: 'v1.9', count: '5', page: '1' },
    headers: {
      'x-rapidapi-key': '8234017c37mshd440df16a123d63p1007efjsn2e4797609776',
      'x-rapidapi-host': 'neobi.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      instance
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
