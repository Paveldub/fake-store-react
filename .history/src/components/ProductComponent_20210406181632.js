import React from 'react';
import { useSelector } from 'react-redux';


export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        {products.map((item) => {
          <div className="card">
            <div className="image">{item.image}</div>
            <div className="content">
              <div className="header"></div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
