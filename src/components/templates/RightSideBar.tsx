import React from 'react';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import { RoundProfilePicture } from '../atoms/RoundProfilePicture';
import List from '../organisms/Sidebar/List';
import Sidebar from '../organisms/Sidebar/Sidebar';
import HomeLogo from '../../assets/Home';

interface Props {}

const RightSideBar = (props: Props) => {
  return (
    <Sidebar width={'25%'}>
      <Sidebar.Content fill noBorder color={'white'}></Sidebar.Content>
    </Sidebar>
  );
};

export default RightSideBar;
