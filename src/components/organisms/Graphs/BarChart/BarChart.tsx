import React, { useState } from 'react';
import { extent, max } from 'd3-array';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath, Circle } from '@visx/shape';
import { Point } from '@visx/point';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { scaleLinear, scaleBand } from '@visx/scale';
import { MarkerCircle } from '@visx/marker';
import {
  interpolateCool,
  interpolatePlasma,
  interpolateRainbow,
  interpolateTurbo,
} from 'd3-scale-chromatic';
import generateDateValue, {
  DateValue,
} from '@visx/mock-data/lib/generators/genDateValue';

import { GridRows, GridColumns } from '@visx/grid';
import styled from 'styled-components';
import Text from '../../../atoms/Text';

export type ChartProps = {
  width: number;
  height: number;
  data: { habits: Array<any> };
};

const Tick = styled.text`
  font-family: Roboto, sans-serif;
  font-weight: 600;
  fill: rgba(189, 192, 209, 0.75);
`;

const CircleText = styled.text`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  fill: white;
`;

const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

const margin = { top: 25, right: 25, bottom: 25, left: 25 };
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function Example({ width, height, data }: ChartProps) {
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.top - margin.bottom;

  const maxHeight = Math.max(
    ...data.habits.map((_, index) => data.habits[index].length)
  );

  // scales
  const yScale = scaleLinear({
    domain: [0, maxHeight + 5],
    range: [yMax, 0],
  });
  const xScale = scaleBand({
    domain: weekdays,
    range: [0, xMax],
    paddingInner: 25,
    padding: 0.6,
  });
  const colorScale = scaleLinear<number>({ range: [0, 1], domain: [0, 1000] });

  const ChartContainer = styled.div`
    align-content: center;
    justify-items: center;
  `;

  const generatePoints = () => {
    const yAmounts: Array<number> = [];
    data.habits.map((habit) => {
      yAmounts.push(habit.length);
    });

    return yAmounts.map((i, index) => {
      return new Point({ x: index, y: i });
    });
  };

  const getY = (d: Point) => d.y;
  const getX = (d: Point) => weekdays[d.x];
  const rowTicks = Array(Math.round(maxHeight / 5) + 2)
    .fill(0)
    .map((_, index) => index * 5);

  const points = generatePoints();
  return (
    <ChartContainer>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <GridRows
            width={xMax - 25}
            left={25}
            scale={yScale}
            stroke={'grey'}
            tickValues={rowTicks}
            alignmentBaseline={'central'}
          />
          <AxisLeft
            scale={yScale}
            tickValues={rowTicks}
            tickComponent={({ x, y, formattedValue }) => (
              <g>
                <Tick x={x - 10} y={y + 5}>
                  {formattedValue}
                </Tick>
              </g>
            )}
            hideAxisLine
            hideTicks
          />
          <AxisBottom
            scale={xScale}
            top={yMax}
            hideAxisLine
            hideTicks
            tickComponent={({ formattedValue, x, y }) => (
              <g>
                <Tick x={x - 30} y={y + 3}>
                  {formattedValue}
                </Tick>
              </g>
            )}
          />
          {points.map((point, index) => {
            if (point.y === 0) return null;
            const centerX = xScale(getX(point));
            const centerY = yScale(getY(point));
            const radius = 25 + clamp(point.y * 1.5, 0, Math.round(xMax / 40));
            const doubleDigit = point.y > 9;
            const textCenterX = doubleDigit
              ? centerX && centerX - 18
              : centerX && centerX - 10;
            return (
              <Group>
                <Circle
                  fill={interpolatePlasma(colorScale(index * 250) || 0)}
                  cx={centerX}
                  cy={centerY}
                  r={radius}
                />
                <CircleText x={textCenterX} y={centerY && centerY + 10}>
                  {point.y}
                </CircleText>
              </Group>
            );
          })}
        </Group>
      </svg>
    </ChartContainer>
  );
}
