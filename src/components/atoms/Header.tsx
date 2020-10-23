import styled from 'styled-components';

interface HeaderProps {
  size?: string;
  color?: string;
  weight?: string;
}
const Header = styled.h1<HeaderProps>`
  margin: 0;
  font-size: ${(props) => (props.size ? props.size : '30px')};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => (props.color ? props.color : props.theme.palette.text)};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export default Header;
