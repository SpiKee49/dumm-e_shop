import React from 'react';
import Title from '../Header/Title';

function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-row w-full max-w-[60%] md:max-w-[90%] mx-auto justify-evenly gap-10 text-sm text-gray-600">
        <div className="w-[300px]">
          <Title className="text-2xl mb-4">
            Dumm-e <span className="text-black">shop</span>
          </Title>
          <p>
            Bachira is an online store dealing with all
            product Bachira provide cheap, high quality,
            products to customers
          </p>
        </div>
        <div>
          <ul>
            <li className="text-base font-bold text-black mb-4">
              For Beginner
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              About
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Career
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Promotion
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-base font-bold text-black mb-4">
              Overview
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Products
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Categories
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-base font-bold text-black mb-4">
              Explore Us
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Our Carrer
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Privacy
            </li>
            <li className="hover:underline hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-base font-bold text-black mb-4">
              Contact Us
            </li>
            <li>support@dumme.com</li>
            <li>+421 919 912 920</li>
            <li>Bratislava, Slovakia</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 p-10">
        Copyright 2024 All rights reserved by René Bukovina
      </p>
    </footer>
  );
}

export default Footer;
