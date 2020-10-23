import React from 'react';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import { RoundProfilePicture } from '../atoms/RoundProfilePicture';
import List from '../organisms/Sidebar/List';
import Sidebar from '../organisms/Sidebar/Sidebar';
import HomeLogo from '../../assets/Home';
import ChecksLogo from '../../assets/Checks';
import LogoutLogo from '../../assets/Logout';
import { FlexRow } from '../atoms/Helpers';

interface Props {}

const items = [
  { title: 'start' },
  { title: 'Home', Icon: HomeLogo },
  { title: 'Habits', Icon: ChecksLogo },
  { title: 'end' },
];
const LeftSideBar = (props: Props) => {
  return (
    <Sidebar width={'20%'}>
      <>
        <Sidebar.Header>
          <Header>Motivate.Me</Header>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.ContentHeader>
            {/* <RoundProfilePicture />
            <Text size={'1.5em'}>Hello, Baily</Text> */}
          </Sidebar.ContentHeader>
          <List listItems={items} />
          <Sidebar.Footer>
            <FlexRow align={'center'} justify={'space-between'}>
              <LogoutLogo />
              <Text>Logout</Text>
            </FlexRow>
          </Sidebar.Footer>
        </Sidebar.Content>
      </>
    </Sidebar>
  );
};

export default LeftSideBar;
