import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  clickEvent?: () => void;
  primary?: boolean;
  value: string;
  className?: string;
}

function Button(props: Props) {
  /* COMPONENT PROPS */
  const { className, clickEvent, primary, value } = props;

  /* COMPONENT STYLES */
  const styles = twMerge(
    'py-3',
    'px-7',
    'rounded-md',
    'transition-all ease-in duration-150',
    'font-bold',
    'text-gray-800',
    primary ? 'hover:bg-emerald-900' : 'hover:bg-gray-100',
    primary ? 'bg-emerald-700 text-white' : 'bg-white',
    className
  );

  /* COMPONENT TEMPLATE */
  return (
    <button className={styles} onClick={clickEvent}>
      {value}
    </button>
  );
}

export default Button;
