import LoginButtons from '../LoginButtons';
import Menu from './Menu';
import React from 'react';
import Title from './Title';

function Header() {
  return (
    <div className="flex justify-center items-center font-monrope p-14 [&>*]:flex-1">
      <Title>
        Dumm-e <span className="text-black">shop</span>
      </Title>
      <Menu />
      <LoginButtons />
    </div>
  );
}

export default Header;
