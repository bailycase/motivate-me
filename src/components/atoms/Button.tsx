import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  icon?: React.ReactElement;
}

interface StyledButtonProps extends Props {}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.theme.palette.highlight};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  border: none;
  border-radius: 10px;
  position: relative;
  padding: 0;
  display: flex;
`;

const IconContainer = styled.div`
  margin: auto;
  height: 25px;
  width: 25px;
`;

const Button = (props: Props) => {
  return (
    <StyledButton {...props}>
      {props.icon && <IconContainer>{props.icon}</IconContainer>}
    </StyledButton>
  );
};

export default Button;
