import { Product } from '../../types';
import ProductTile from './ProductTile';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  products: Product[];
  numberOfProducts: number;
}

function ProductSlider(props: Props) {
  const { products, numberOfProducts } = props;
  const calculatedWidth = (100 / 6 - 1).toFixed();
  console.log(calculatedWidth);

  const styles = twMerge([
    'max-w-[80%]',
    'flex',
    'flex-row',
    'mx-auto',
    'py-10',
    'overflow-hidden',
    `gap-[1%]`,
  ]);

  return (
    <div className={styles}>
      {products.map(product => (
        <ProductTile
          product={product}
          className={`w-[${calculatedWidth}%]`}
        />
      ))}
    </div>
  );
}

export default ProductSlider;
