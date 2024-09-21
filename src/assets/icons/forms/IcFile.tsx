import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcFile: FC<TIcon> = ({ className, onClick }) => {
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
        d='M7.75 10.75H12.25M7.75 13.75H10M4 4V16C4 16.3978 4.15804 16.7794 4.43934 17.0607C4.72064 17.342 5.10218 17.5 5.5 17.5H14.5C14.8978 17.5 15.2794 17.342 15.5607 17.0607C15.842 16.7794 16 16.3978 16 16V7.2565C16 7.05667 15.96 6.85886 15.8825 6.67469C15.805 6.49051 15.6914 6.32368 15.5485 6.184L12.2185 2.9275C11.9383 2.65349 11.5619 2.50005 11.17 2.5H5.5C5.10218 2.5 4.72064 2.65804 4.43934 2.93934C4.15804 3.22064 4 3.60218 4 4V4Z'
        stroke='#B4B4B9'
        stroke-width='1.8'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.5 2.5V5.5C11.5 5.89783 11.658 6.27936 11.9393 6.56066C12.2206 6.84197 12.6022 7 13 7H16'
        stroke='#B4B4B9'
        stroke-width='2'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default IcFile;
