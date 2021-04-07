import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
} from '../redux/actions/productActions';
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams();

  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;
  
  const dispatch = useDispatch();

  const options = {
    method: 'GET',
    url: `https://neobi.p.rapidapi.com/api/products/${productId}`,
    params: { rev: 'v1.9' },
    headers: {
      'x-rapidapi-key': '8234017c37mshd440df16a123d63p1007efjsn2e4797609776',
      'x-rapidapi-host': 'neobi.p.rapidapi.com',
    },
  };

  const fetchProductDetail = async () => {
    const response = axios
      .request(options)
      .catch(function (error) {
        console.error(error);
      });
    
    console.log(response);
    
    dispatch(selectedProduct(response));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();

  }, []);

 
    return (
      <div className="ui grid container">
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                <img className="ui fluid image" src={image} alt="test"/>
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );

};
