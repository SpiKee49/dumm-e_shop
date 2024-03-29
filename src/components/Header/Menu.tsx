import React from 'react';
import Button from '../Button';

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

export default Menu;
