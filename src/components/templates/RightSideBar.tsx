import React from 'react';
import Sidebar from '../organisms/Sidebar/Sidebar';

const RightSideBar = () => {
  return (
    <Sidebar width={'25%'}>
      <Sidebar.Content fill noBorder color={'white'}></Sidebar.Content>
    </Sidebar>
  );
};

export default RightSideBar;
