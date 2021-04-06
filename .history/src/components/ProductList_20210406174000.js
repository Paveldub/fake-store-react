import React from 'react';
import { useSelector } from 'react-redux';
import { ProductComponent } from './ProductComponent';

export const ProductList = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <div className="ui grid container"  style={{marginTop: '30px'}}>
      <ProductComponent />
    </div>
  )
}

