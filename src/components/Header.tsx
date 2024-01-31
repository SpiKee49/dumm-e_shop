import Button from './Button';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-center items-center font-monrope p-14 [&>*]:flex-1">
      <p className="text-emerald-700 font-bold text-5xl mr-auto">
        Dumm-e <span className="text-black">shop</span>
      </p>
      <Menu />
      <Login />
    </div>
  );
}

function Menu() {
  return (
    <div className="flex justify-center items-center gap-10 text-xl font-[200]">
      <Button className="flex-1" value="Products" />
      <Button className="flex-1" value="Categories" />
      <Button className="flex-1" value="Brands" />
      <Button className="flex-1" value="About" />
    </div>
  );
}

function Login() {
  return (
    <div className="flex justify-end items-center gap-10 ml-auto">
      <Button value="Login" />
      <Button value="Register" primary />
    </div>
  );
}

export default Header;
