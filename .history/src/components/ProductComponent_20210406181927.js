import React from 'react';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div className="four column wide" key={product.id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.image} />
            </div>
            <div className="content">
              <div className="header"></div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return [renderList];
};
