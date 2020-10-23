import React from 'react';

interface LogoutLogoProps {
  color?: string;
}

const LogoutLogo = (props: LogoutLogoProps) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* <g clip-path='url(#clip0)'> */}
      <g>
        <path
          d='M12.4585 22.8821H3.1146C2.5415 22.8821 2.07642 22.417 2.07642 21.8439V3.15618C2.07642 2.58309 2.54155 2.118 3.1146 2.118H12.4585C13.0326 2.118 13.4967 1.65394 13.4967 1.07982C13.4967 0.505695 13.0326 0.0415344 12.4585 0.0415344H3.1146C1.39741 0.0415344 0 1.439 0 3.15618V21.8439C0 23.5611 1.39741 24.9585 3.1146 24.9585H12.4585C13.0326 24.9585 13.4967 24.4944 13.4967 23.9203C13.4967 23.3462 13.0326 22.8821 12.4585 22.8821Z'
          fill='#3A86FF'
        />
        <path
          d='M24.6906 11.7608L18.3783 5.53153C17.9713 5.1287 17.3131 5.13392 16.9103 5.54193C16.5075 5.94994 16.5116 6.60711 16.9207 7.00995L21.4317 11.4618H9.34385C8.76973 11.4618 8.30566 11.9258 8.30566 12.4999C8.30566 13.0741 8.76973 13.5382 9.34385 13.5382H21.4317L16.9207 17.99C16.5117 18.3928 16.5085 19.05 16.9103 19.458C17.1138 19.6636 17.3816 19.7674 17.6495 19.7674C17.9132 19.7674 18.1769 19.6677 18.3783 19.4683L24.6906 13.2391C24.8879 13.0439 25 12.7781 25 12.4999C25 12.2218 24.8889 11.957 24.6906 11.7608Z'
          fill='#3A86FF'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='25' height='25' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoutLogo;