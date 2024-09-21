import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcCalendar: FC<TIcon> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='23'
      height='22'
      viewBox='0 0 23 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.79167 20.1666H18.2083C19.2654 20.1666 20.125 19.3444 20.125 18.3333V5.49998C20.125 4.4889 19.2654 3.66665 18.2083 3.66665H16.2917V1.83331H14.375V3.66665H8.625V1.83331H6.70833V3.66665H4.79167C3.73462 3.66665 2.875 4.4889 2.875 5.49998V18.3333C2.875 19.3444 3.73462 20.1666 4.79167 20.1666ZM18.8182 5.23808V18.8571H4.18182V5.23808H18.8182Z'
        fill='#1E81CE'
      />
      <path
        d='M6.27295 15.7143V17.8095H8.36386V15.7143H6.27295Z'
        fill='#1E81CE'
      />
      <path
        d='M10.4546 15.7143V17.8095H12.5455V15.7143H10.4546Z'
        fill='#1E81CE'
      />
      <path
        d='M14.6362 15.7143V17.8095H16.7271V15.7143H14.6362Z'
        fill='#1E81CE'
      />
      <path
        d='M14.6362 11.5238V13.619H16.7271V11.5238H14.6362Z'
        fill='#1E81CE'
      />
      <path
        d='M14.6362 7.33331V9.42855H16.7271V7.33331H14.6362Z'
        fill='#1E81CE'
      />
      <path
        d='M10.4546 7.33331V9.42855H12.5455V7.33331H10.4546Z'
        fill='#1E81CE'
      />
      <path
        d='M6.27295 7.33331V9.42855H8.36386V7.33331H6.27295Z'
        fill='#1E81CE'
      />
      <path
        d='M6.27295 11.5238V13.619H8.36386V11.5238H6.27295Z'
        fill='#1E81CE'
      />
      <path
        d='M10.4546 11.5238V13.619H12.5455V11.5238H10.4546Z'
        fill='#1E81CE'
      />
    </svg>
  );
};

export default IcCalendar;
