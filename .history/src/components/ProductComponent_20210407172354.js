import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  console.log(products);

  const renderList = products.map((product) => {
    const { ccc, currency, image } = product;
    return (
      <div className="four wide column" key={ccc}>
        <Link to={`/product/${ccc}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={} />
              </div>
              <div className="content">
                <div className="header">{}</div>
                <div className="meta price">$ {}</div>
                <div className="meta">{}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
