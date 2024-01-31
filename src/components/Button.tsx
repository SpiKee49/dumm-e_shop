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
    primary ? 'bg-emerald-700 text-white' : 'bg-white',
    'py-3',
    'px-7',
    'rounded-md',
    'hover:brightness-75',
    'transition-all ease-in delay-150',
    'font-bold',
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
