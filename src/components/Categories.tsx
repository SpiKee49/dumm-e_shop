import React from 'react';
import Title from './Title';

function Categories() {
  return (
    <>
      <Title className="text-center mb-6">Categories</Title>
      <div className="mx-auto w-4/5 flex flex-row justify-center items-center [&>*]:flex-1 h-[600px]">
        <section className="flex flex-col justify-center items-center [&>*]:flex-1 h-full">
          <div className="bg-green-400 rounded-3xl text-center w-full m-3">
            <img
              className="object-cover"
              src="./clothes.webp"
            />
          </div>
          <div className="bg-green-400 rounded-3xl text-center w-full m-3">
            Cosmetics
          </div>
        </section>
        <section className=" h-full flex">
          <div className="bg-green-400 rounded-3xl flex-1 m-3 ml-6">
            Electronics
          </div>
        </section>
      </div>
    </>
  );
}

export default Categories;
