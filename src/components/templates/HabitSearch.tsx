import React from 'react';
import styled from 'styled-components';
import AddLogo from '../../assets/Add';
import Button from '../atoms/Button';
import { FlexRow } from '../atoms/Helpers';
import SearchInput from '../organisms/Search/SearchInput';

interface Props {}

const HabitSearchContainer = styled(FlexRow)`
  align-items: center;
  justify-content: space-around;
  height: 50px;
  padding-bottom: 50px;
`;

const HabitSearch = (props: Props) => {
  return (
    <HabitSearchContainer>
      <SearchInput />
      <Button width={'60px'} icon={<AddLogo />} />
    </HabitSearchContainer>
  );
};

export default HabitSearch;
