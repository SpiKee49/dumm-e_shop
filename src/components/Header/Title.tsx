import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Title(props: Props) {
  const { children, className } = props;
  const styles = twMerge(
    'text-emerald-700',
    'font-bold',
    'text-5xl',
    className
  );

  return <p className={styles}>{children}</p>;
}

export default Title;
