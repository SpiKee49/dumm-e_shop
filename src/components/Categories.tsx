import React from 'react';
import Title from './Title';

function Categories() {
  return (
    <>
      <Title className="text-center mb-6">Categories</Title>
      <div className="mx-auto w-4/5 flex flex-row justify-center items-center [&>*]:flex-1 h-[600px]">
        <section className="flex flex-col justify-center items-center [&>*]:flex-1 h-full">
          <div className="bg-green-400 rounded-3xl w-full m-3 bg-cover bg-[url(./clothes.webp)] hover:scale-105 transition-all duration-100 group/card">
            <div className="bg-gradient-to-b from-black/75 rounded-t-3xl text-white font-bold text-2xl pl-10 pt-10 h-2/3">
              <h1>Clothes</h1>
              <p className="text-sm w-2/3 font-normal opacity-0 group-hover/card:opacity-100 transition-all duration-150 ">
                Buy high quality clothes from top brands
                with best prices on the market
              </p>
            </div>
          </div>
          <div className="bg-green-400 rounded-3xl w-full m-3 bg-cover bg-[url(./skincare.webp)] hover:scale-105 transition-all duration-100  group/card">
            <div className="bg-gradient-to-b from-black/75 rounded-t-3xl text-white font-bold text-2xl pl-10 pt-10 h-2/3">
              <h1>Skincare</h1>
              <p className="text-sm w-2/3 font-normal opacity-0 group-hover/card:opacity-100 transition-all duration-150 ">
                Buy high quality skincare products from top
                brands with best prices on the market
              </p>
            </div>
          </div>
        </section>
        <section className="h-full flex">
          <div className="bg-green-400 rounded-3xl flex-1 m-3 ml-6 bg-cover bg-[url(./electronics.jpg)] hover:scale-105 transition-all group/card">
            <div className="bg-gradient-to-b from-black/75 rounded-t-3xl text-white font-bold text-2xl pl-10 pt-10 h-2/3">
              <h1>Electronics</h1>
              <p className="text-sm w-2/3 font-normal opacity-0 group-hover/card:opacity-100 transition-all duration-150 ">
                Buy high quality clothes from top brands in
                best prices on the market
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Categories;
