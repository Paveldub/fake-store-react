import React from 'react';

export const ProductComponent = ({ products }) => {
  return (
    <div className="four column wide">
      <div className="ui link cards">
        {props.products.map((item) => {
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
