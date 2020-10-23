import React from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import styled from 'styled-components';
import { GradientOrangeRed } from '@visx/gradient';
import ChartIndicator from './ChartIndicator';

interface Props {
  height: number;
  width: number;
}

const PieContainer = styled.svg`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const PieChart = ({ height, width }: Props) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) * 0.95;
  return (
    <Container>
      <ChartIndicator centerX={centerX} centerY={centerY} />
      <PieContainer>
        <GradientOrangeRed id='gradient' />
        <Group top={centerY} left={centerX}>
          <Arc
            data={[2]}
            fill="url('#gradient')"
            radius={centerY / 6}
            innerRadius={radius - 10}
            outerRadius={radius}
            startAngle={0}
            endAngle={7}
          />
        </Group>
      </PieContainer>
    </Container>
  );
};

export default PieChart;
