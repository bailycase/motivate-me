import React from 'react';
import styled from 'styled-components';
import CaratLogo from '../../assets/Carat';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import { FlexColumn, FlexRow } from '../atoms/Helpers';
import Card from '../organisms/Card/Card';
import LogoutLogo from '../../assets/Logout';
import EditLogo from '../../assets/Edit';
import DeleteLogo from '../../assets/Delete';

interface Props {}

const HabitCard = styled(FlexColumn)`
  background-color: white;
  height: 25%;
  border-radius: 10px;
  margin: 10px;
`;

const HabitHeader = styled(FlexRow)`
  height: 60%;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #e5e5e5;
`;

const SubHeader = styled.div`
  height: 40%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

const TimesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 75%;
  width: 75%;
`;
const IconContainer = styled(FlexRow)`
  width: 10%;
  justify-content: space-around;
`;
const TimeContainer = styled.div`
  width: 75px;
  height: 90%;
  background-color: ${(props) => props.theme.palette.softHighlight};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HabitItem = (props: Props) => {
  return (
    <HabitCard>
      <HabitHeader>
        <Header style={{ flexGrow: 1 }} size={'24px'}>
          Drink water
        </Header>
        <CaratLogo />
      </HabitHeader>
      <SubHeader>
        <TimesContainer>
          <TimeContainer>
            <Text size={'.9rem'}>All Day</Text>
          </TimeContainer>
        </TimesContainer>
        <IconContainer>
          <EditLogo />
          <DeleteLogo />
        </IconContainer>
      </SubHeader>
    </HabitCard>
  );
};

export default HabitItem;
