import { FC } from 'react';

import { TIcon } from '@/assets/icons/types/TIcon';

const IcBusiness: FC<TIcon> = ({ className, onClick }) => {
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
        d='M8.33333 10C7.8731 10 7.5 10.3731 7.5 10.8333C7.5 11.2936 7.8731 11.6667 8.33333 11.6667H11.6667C12.1269 11.6667 12.5 11.2936 12.5 10.8333C12.5 10.3731 12.1269 10 11.6667 10H8.33333Z'
        fill='#5D5F69'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.66797 6.66667C1.66797 7.28357 2.00314 7.82219 2.5013 8.11037V15.8333C2.5013 16.7538 3.24749 17.5 4.16797 17.5H15.8346C16.7551 17.5 17.5013 16.7538 17.5013 15.8333V8.11037C17.9995 7.82219 18.3346 7.28357 18.3346 6.66667V4.16667C18.3346 3.24619 17.5885 2.5 16.668 2.5H3.33464C2.41416 2.5 1.66797 3.24619 1.66797 4.16667V6.66667ZM3.33464 4.16667V6.66667H16.668V4.16667H3.33464ZM15.8346 8.33333H4.16797V15.8333H15.8346V8.33333Z'
        fill='#5D5F69'
      />
    </svg>
  );
};

export default IcBusiness;
