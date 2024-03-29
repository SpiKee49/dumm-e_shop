import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Product } from '../../types';
import ProductSlider from '../components/ProductSlider';
import Services from '../components/Services';
import WelcomeBanner from '../components/WelcomeBanner';
import { getRandomProducts } from '../api/calls';

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetching initial data
    (async () => {
      setProducts(await getRandomProducts(9));
    })();
  }, []);

  return (
    <div>
      <Header />
      <WelcomeBanner />
      <Categories />
      <Services />
      <ProductSlider
        products={products}
        numberOfProducts={6}
      />
      <Footer />
    </div>
  );
}

export default Homepage;
