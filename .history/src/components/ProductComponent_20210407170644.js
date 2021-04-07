import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);

  const renderList = products.map((product) => {
    const { ccc, title, image, price, category, email } = product;
    return (
      <div className="four wide column" key={ccc}>
        <Link to={`/product/${ccc}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{email}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
