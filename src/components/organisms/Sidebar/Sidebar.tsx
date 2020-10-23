import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  open?: boolean;
  children: ReactChild | React.ReactChildren;
  width?: string;
}
interface StyledSidebarProps {
  width?: string;
}
interface SidebarContentProps {
  fill?: boolean;
  noBorder?: boolean;
  color?: string;
}
const StyledSidebar = styled.div<StyledSidebarProps>`
  width: ${(props) => (props.width ? props.width : '15%')};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<SidebarContentProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.palette.textStrong};
  display: flex;
  border-top-right-radius: ${(props) => (props.noBorder ? '0' : '45px')};
  display: flex;
  flex-direction: column;
`;
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`;
const Header = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  align-self: center;
  margin-top: auto;
  width: 60%;
`;

const Sidebar = ({ open = true, children, width }: SidebarProps) => {
  return <StyledSidebar width={width}>{children}</StyledSidebar>;
};

Sidebar.Header = Header;
Sidebar.Content = Content;
Sidebar.ContentHeader = ContentHeader;
Sidebar.Footer = Footer;

export default Sidebar;
