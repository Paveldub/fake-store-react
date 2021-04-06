import React, {useEffect} from 'react';
import { ProductComponent } from './ProductComponent';
import axios from 'axios';

export const ProductList = () => {

  return (
    <div className="ui grid container"  style={{marginTop: '30px'}}>
      <ProductComponent />
    </div>
  )
}

