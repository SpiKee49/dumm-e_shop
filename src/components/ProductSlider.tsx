import { Product } from '../../types';
import React from 'react';

interface Props {
  product: Product;
}

function ProductSlider(props: Props) {
  const { product } = props;
  return (
    <div className="w-full flex flex-row">
      <div className="rounded-md border-gray-500 flex flex-col">
        <img src={product.thumbnail} />
        <div>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
