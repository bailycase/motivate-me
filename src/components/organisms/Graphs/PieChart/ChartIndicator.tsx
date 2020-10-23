import React from 'react';
import styled from 'styled-components';
import Header from '../../../atoms/Header';
import Text from '../../../atoms/Text';
import { Seperator } from '../../../atoms/Seperator';

interface Props {
  centerY: number;
  centerX: number;
}

interface PieDataProps {
  left: number;
  top: number;
}
const PieData = styled.div<PieDataProps>`
  position: absolute;
  left: ${(props) => props.left.toString().concat('px')};
  top: ${(props) => props.top.toString().concat('px')};
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChartIndicator = ({ centerX, centerY }: Props) => {
  return (
    <PieData top={centerY - 75} left={centerX - 70}>
      <Header size={'2.5vw'}>100%</Header>
      <Seperator width={'50%'} />
      {/* <Text size={'.8vw'} color={'grey'}> */}
      {/* All tasks complete */}
      {/* </Text> */}
    </PieData>
  );
};

export default ChartIndicator;
