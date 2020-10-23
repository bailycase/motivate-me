import styled from 'styled-components';

interface SeperatorProps {
  width: string;
  color?: string;
}
export const Seperator = styled.div<SeperatorProps>`
  width: ${(props) => props.width};
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(to right, #fdc830, #f37335)'};
  border-radius: 50px;
  height: 10px;
`;
