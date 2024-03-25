import { Product } from '../../types';
import axios from './axios';

export async function getRandomProducts(
  numberOfProducts: number
) {
  const max = 100;
  const min = 0;

  const randomIds = Array.from(
    { length: numberOfProducts },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

  const products = await Promise.all(
    randomIds.map(async id => {
      return (await axios.get(`/product/${id}`))
        .data as Product;
    })
  );

  return products;
}
