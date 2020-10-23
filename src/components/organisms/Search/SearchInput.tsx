import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  padding: 10px;
  color: ${(props) => props.theme.palette.textSoft};
`;

const SearchInput = () => {
  return <StyledInput placeholder={'Search for habits...'}></StyledInput>;
};

export default SearchInput;
