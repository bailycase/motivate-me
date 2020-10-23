import React from 'react';
import styled from 'styled-components';
import Header from '../atoms/Header';
import { FlexColumn, FlexRow } from '../atoms/Helpers';
import Text from '../atoms/Text';
import HabitSearch from '../templates/HabitSearch';
import TodoItem from '../templates/HabitItem';

interface FilterTextProps {
  active?: boolean;
}
const HabitsContainer = styled(FlexColumn)`
  height: 100%;
`;

const HabitHeader = styled.div`
  flex-grow: 3;
  display: flex;
  height: 100px;
  width: 80%;
  align-self: center;
  align-items: flex-end;
`;
const Seperator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid#e5e5e5;
`;
const ActiveIndicator = styled.div`
  width: 100%;
  position: relative;
  bottom: -4px;
  border-bottom: 3px solid ${(props) => props.theme.palette.highlight};
`;
const FilterTextContainer = styled(FlexColumn)`
  align-items: center;
  width: 40%;
`;
const FilterContainer = styled(FlexRow)`
  width: 25%;
  align-self: flex-end;
  justify-self: flex-end;
  justify-content: space-around;
`;
const FilterText = styled(Text)<FilterTextProps>`
  font-size: 1vw;
  color: ${(props) =>
    props.active
      ? props.theme.palette.highlight
      : props.theme.palette.textSoft};
`;
const HabitContent = styled.div`
  width: 80%;
  height: 100%;
  align-self: center;
  padding: 15px;
  overflow-y: scroll;
`;

const HabitCards = styled.div`
  height: 75%;
  box-sizing: border-box;
  padding: 20px;
`;

const Habits = () => {
  return (
    <HabitsContainer>
      <HabitHeader>
        <Header size={'2vw'} style={{ flexGrow: 1 }}>
          Habits
        </Header>
        <FilterContainer>
          <FilterTextContainer>
            <FilterText active>Active</FilterText>
            <ActiveIndicator />
          </FilterTextContainer>
          <FilterTextContainer>
            <FilterText active={false}>Finished</FilterText>
            {/* <ActiveIndicator  /> */}
          </FilterTextContainer>
        </FilterContainer>
      </HabitHeader>
      <Seperator />
      <HabitContent>
        <HabitSearch />
        <Text>Today</Text>
        <HabitCards>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </HabitCards>
      </HabitContent>
    </HabitsContainer>
  );
};

export default Habits;
