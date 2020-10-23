import React from 'react';

interface HomeLogoProps {
  color?: string;
}

const HomeLogo = (props: HomeLogoProps) => {
  return (
    <svg
      version='1.1'
      x='0px'
      y='0px'
      width='25px'
      height='25px'
      viewBox='0 0 460.298 460.297'
    >
      <g>
        <path
          fill={props.color ? props.color : 'white'}
          d='M506.188,236.413L297.798,26.65c-0.267-0.27-0.544-0.532-0.826-0.786c-22.755-20.431-57.14-20.504-79.982-0.169
			c-0.284,0.253-0.56,0.514-0.829,0.782L5.872,236.352c-7.818,7.804-7.831,20.467-0.028,28.285
			c7.804,7.818,20.467,7.83,28.284,0.028L50,248.824v172.684c0,44.112,35.888,80,80,80h72c11.046,0,20-8.954,20-20v-163h70v163
			c0,11.046,8.954,20,20,20h70c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
			c0,22.056-17.944,40-40,40h-50v-163c0-11.046-8.954-20-20-20H202c-11.046,0-20,8.954-20,20v163h-52c-22.056,0-40-17.944-40-40
			v-212c0-0.2-0.003-0.399-0.009-0.597L243.946,55.26c7.493-6.363,18.483-6.339,25.947,0.055L422,208.425v113.083
			c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-72.82l15.812,15.917c3.909,3.935,9.047,5.904,14.188,5.904
			c5.097,0,10.195-1.937,14.096-5.812C513.932,256.912,513.974,244.249,506.188,236.413z'
        />
      </g>
    </svg>
  );
};

export default HomeLogo;
