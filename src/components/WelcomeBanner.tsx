import Button from './Button';
import React from 'react';

function WelcomeBanner() {
  return (
    <div className="flex flex-row max-w-[70%] mx-auto py-28 justify-between">
      <section className="w-[30%] flex flex-col justify-start gap-10">
        <h1 className="text-5xl font-bold">
          Best Place to Buy <br />
          <span className="text-emerald-700">
            Everything
          </span>
        </h1>
        <span className="text-xl">
          At Bachira, you can shop for all your favorite
          beauty brands, clothes, household products and
          more at a single place.
        </span>
        <Button value="Shop" primary />
      </section>
      <section className="flex-1 flex justify-start items-start">
        <img src="./banner-image.png" alt="banner-image" />
      </section>
    </div>
  );
}

export default WelcomeBanner;
