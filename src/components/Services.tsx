import {
  FaClock,
  FaHandshakeSimple,
  FaTruckFast,
} from 'react-icons/fa6';

import { IconContext } from 'react-icons';
import React from 'react';
import Title from './Header/Title';

function Services() {
  return (
    <section className="my-[200px]">
      <IconContext.Provider
        value={{
          className: 'text-emerald-700',
          size: '100px',
        }}
      >
        <Title className="text-center font-semibold">
          <span className="text-gray-800">Why Choose</span>{' '}
          Dumm-e?
        </Title>
        <div className="flex flex-row justify-center items-center mt-10 gap-28">
          <div className="flex flex-col justify-center items-center max-w-[400px] text-center gap-5">
            <FaTruckFast />
            <h2 className="text-3xl font-bold">
              Free Delivery
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetu
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[400px] text-center gap-5">
            <FaHandshakeSimple />
            <h2 className="text-3xl font-bold">
              Trusted Platform
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetu
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[400px] text-center gap-5">
            <FaClock />
            <h2 className="text-3xl font-bold">
              Here For You
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetu
              adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
}

export default Services;
