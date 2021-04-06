import React from 'react';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header"></div>
              <div className="meta price">$ {product.price}</div>
              <div className>{product.category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return [renderList];
};
