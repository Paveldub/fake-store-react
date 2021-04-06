import React from 'react';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, category } = products;

  console.log(products);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card" key={products.id}>
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
