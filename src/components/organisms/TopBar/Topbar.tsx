import React from 'react';
import styled from 'styled-components';
import LogoutLogo from '../../../assets/Logout';
import MotivateLogo from '../../../assets/Motivate';
import Header from '../../atoms/Header';
import { FlexRow } from '../../atoms/Helpers';
import Text from '../../atoms/Text';

const StyledTopbar = styled.div`
  width: 100vw;
  background-color: white;
  height: 75px;
  display: flex;
  align-items: center;
  box-shadow: 1px 13px 23px rgba(0, 0, 0, 0.2);
  border-radius: 0px;
  z-index: 1000;
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.softHighlight};
  color: ${(props) => props.theme.palette.highlight};
`;

const RightContainer = styled(FlexRow)`
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;

const ProfileContainer = styled(FlexRow)`
  width: 200px;
`;
const Topbar = () => {
  return (
    <StyledTopbar>
      <FlexRow align={'center'} grow={1}>
        <MotivateLogo />
        <Header>Motivate.</Header>
        <Header color={'#3A86FF'}>me</Header>
      </FlexRow>
      <RightContainer>
        <ProfileContainer align={'center'} justify={'space-around'}>
          <ProfilePicture>
            <Text color={'highlight'} size={'20px'}>
              BC
            </Text>
          </ProfilePicture>
          <Text size={'25px'}>Baily Case</Text>
        </ProfileContainer>
        <LogoutLogo />
      </RightContainer>
    </StyledTopbar>
  );
};

export default Topbar;
