import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcDelete: FC<TIcon> = ({ className, onClick }) => {
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
        d='M4 16L16 4'
        stroke='#B4B4B9'
        stroke-width='2'
        stroke-linecap='round'
      />
      <path
        d='M4 4L16 16'
        stroke='#B4B4B9'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default IcDelete;
