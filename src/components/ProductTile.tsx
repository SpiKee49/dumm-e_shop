import { Product } from '../../types';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  product: Product;
  className?: string;
}

function ProductTile(props: Props) {
  const { product, className } = props;

  const styles = twMerge(
    'rounded-md',
    'border-gray-300',
    'flex',
    'flex-col',
    'gap-5',
    'border-2',
    'p-5',
    className
  );

  return (
    <div className={styles}>
      <div className="max-h-[50%]">
        <img
          src={product.thumbnail}
          className="h-full w-auto mx-auto"
        />
      </div>
      <div className="flex-1 flex flex-col [&>*]:flex-1">
        <div>
          <p className="text-xl font-bold text-emerald-700">
            {product.title}
          </p>
          <p className="text-xs text-gray-400">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-md text-gray-400">
            ${(Number(product.price) * 1.2).toFixed(2)} with
            VAT
          </p>
          <p className="text-2xl font-bold text-gray-700">
            ${product.price}.99
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
