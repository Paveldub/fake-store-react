import React from 'react';
import { useSelector } from 'react-redux';

export const ProductComponent = (props) => {

  console.log(props.products);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
