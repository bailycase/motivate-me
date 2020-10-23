import React, { FunctionComponent } from 'react';
import styled, {
  AnyStyledComponent,
  StyledComponent,
  StyledComponentBase,
} from 'styled-components';

type flexDirection = 'column' | 'row';

interface CardProps {
  color?: string;
  shrink?: number;
  grow?: number;
  direction?: flexDirection;
}

interface CardHeadProps {
  direction?: flexDirection;
}

type CardType = StyledComponent<'div', any, CardProps> & {
  Head: typeof Head;
  Body: typeof Body;
};

const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction && props.direction};
  border-radius: 25px;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  flex-shrink: ${(props) => props.shrink};
  flex-grow: ${(props) => props.grow};
` as CardType;

const Body = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Head = styled.div<CardHeadProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  width: 90%;
`;

Card.Body = Body;
Card.Head = Head;

export default Card;
