import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcUpload: FC<TIcon> = ({ className, onClick }) => {
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
      <g clip-path='url(#clip0_2923_15378)'>
        <mask
          id='mask0_2923_15378'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='20'
          height='20'
        >
          <path d='M20 0L0 0L0 20L20 20L20 0Z' fill='#111111' />
        </mask>
        <g mask='url(#mask0_2923_15378)'>
          <path
            d='M2.5 10.0033L2.5 17.5L17.5 17.5L17.5 10M13.75 6.25L10 2.5L6.25 6.25M9.99667 13.3333L9.99667 2.5'
            stroke='#B4B4B9'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_2923_15378'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcUpload;
