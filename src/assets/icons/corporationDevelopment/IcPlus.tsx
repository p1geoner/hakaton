import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcPlus: FC<TIcon> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.34315 9.99865L15.6569 9.99865'
        stroke='#B4B4B9'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M9.9994 4.34315L9.99939 15.6569'
        stroke='#B4B4B9'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default IcPlus;
