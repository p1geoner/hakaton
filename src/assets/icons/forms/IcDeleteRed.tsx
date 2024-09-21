import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcDeleteRed: FC<TIcon> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.525 2.775H7.3C7.42375 2.775 7.525 2.67375 7.525 2.55V2.775H16.075V2.55C16.075 2.67375 16.1763 2.775 16.3 2.775H16.075V4.8H18.1V2.55C18.1 1.55719 17.2928 0.75 16.3 0.75H7.3C6.30719 0.75 5.5 1.55719 5.5 2.55V4.8H7.525V2.775ZM21.7 4.8H1.9C1.40219 4.8 1 5.20219 1 5.7V6.6C1 6.72375 1.10125 6.825 1.225 6.825H2.92375L3.61844 21.5344C3.66344 22.4934 4.45656 23.25 5.41563 23.25H18.1844C19.1463 23.25 19.9366 22.4963 19.9816 21.5344L20.6763 6.825H22.375C22.4988 6.825 22.6 6.72375 22.6 6.6V5.7C22.6 5.20219 22.1978 4.8 21.7 4.8ZM17.9678 21.225H5.63219L4.95156 6.825H18.6484L17.9678 21.225Z'
        fill='#C95E59'
      />
    </svg>
  );
};

export default IcDeleteRed;
