import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcPencil: FC<TIcon> = ({ className, onClick }) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.32117 9.92829C6.0086 10.2408 5.83301 10.6647 5.83301 11.1068V13.3331C5.83301 13.7933 6.20611 14.1665 6.66634 14.1665H8.89267C9.33467 14.1665 9.75859 13.9908 10.0712 13.6783L17.9878 5.76159C18.6387 5.11072 18.6387 4.05544 17.9878 3.40457L16.5948 2.01159C15.944 1.36072 14.8887 1.36072 14.2378 2.01159L6.32117 9.92829ZM8.89267 12.4998H7.49967V11.1068L15.4163 3.1901L16.8093 4.58309L8.89267 12.4998Z'
        fill='#B4B4B9'
      />
      <path
        d='M8.33366 3.33333C8.33366 3.79358 7.96057 4.16668 7.50033 4.16668H3.33366V16.6667H15.8337V12.5001C15.8337 12.0398 16.2067 11.6667 16.667 11.6667C17.1272 11.6667 17.5003 12.0398 17.5003 12.5001V16.6667C17.5003 17.5871 16.7542 18.3334 15.8337 18.3334H3.33366C2.41318 18.3334 1.66699 17.5871 1.66699 16.6667V4.16668C1.66699 3.2462 2.41318 2.5 3.33366 2.5H7.50033C7.96057 2.5 8.33366 2.8731 8.33366 3.33333Z'
        fill='#B4B4B9'
      />
    </svg>
  );
};

export default IcPencil;
