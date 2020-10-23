import styled from 'styled-components';

interface FlexProps {
  align?: 'center' | 'start' | 'end';
  justify?: 'center' | 'space-between' | 'space-around';
  grow?: number;
  shrink?: number;
}
export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-grow: ${(props) => props.grow};
  flex-shrink: ${(props) => props.shrink};
`;
export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
`;
export const FlexBox = styled.div`
  display: flex;
`;
