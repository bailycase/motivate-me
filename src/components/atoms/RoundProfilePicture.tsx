import React from 'react';
import styled from 'styled-components';
import Header from './Header';

interface Props {}

const ProfileContainer = styled.div`
  width: 75px;
  height: 75px;
  background-color: #dcedff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const RoundProfilePicture = (props: Props) => {
  return (
    <ProfileContainer>
      <Header>BC</Header>
    </ProfileContainer>
  );
};
