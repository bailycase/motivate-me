import styled from 'styled-components';

interface TextProps {
  size?: string;
  color?: 'highlight' | 'softHightlight' | 'text';
}

const Text = styled.p<TextProps>`
  margin: 0px;
  text-align: justify;
  width: auto;
  font-size: ${(props) => (props.size ? props.size : '2rem')};
  font-family: 'Roboto', sans-serif;
  color: ${(props) =>
    props.color
      ? `props.theme.palette.${props.color}`
      : props.theme.palette.text};
  font-weight: 400;
`;

export default Text;
