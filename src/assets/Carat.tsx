import React from 'react';

interface CaratLogoProps {
  color?: string;
}

const CaratLogo = (props: CaratLogoProps) => {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='rotate(180)'
    >
      <path
        d='M7.50042 11.7752C7.23159 11.7752 6.96279 11.6726 6.75783 11.4677L0.30817 5.01797C-0.102113 4.60769 -0.102113 3.94248 0.30817 3.53237C0.718286 3.12225 1.38336 3.12225 1.79367 3.53237L7.50042 9.23944L13.2072 3.53257C13.6175 3.12245 14.2825 3.12245 14.6926 3.53257C15.103 3.94268 15.103 4.60789 14.6926 5.01817L8.243 11.4679C8.03794 11.6728 7.76915 11.7752 7.50042 11.7752Z'
        fill='#5A73CE'
      />
    </svg>
  );
};

export default CaratLogo;
