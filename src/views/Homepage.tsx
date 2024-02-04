import Categories from '../components/Categories';
import Header from '../components/Header';
import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';

function Homepage() {
  return (
    <div>
      <Header />
      <WelcomeBanner />
      <Categories />
    </div>
  );
}

export default Homepage;
