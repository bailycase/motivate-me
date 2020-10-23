import React, { ReactComponentElement, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useSprings, animated, useSpring } from 'react-spring';
import { reduceEachTrailingCommentRange } from 'typescript';

interface Props {
  listItems: Array<ListItem>;
}

type ListItem = { title: string; Icon?: any };

interface StyledListItemProps {
  active: boolean;
  second?: boolean;
  first?: boolean;
}
interface ListItemProps {
  isActive: boolean;
  icon: any;
  clickCallback: any;
  index: number;
  title: string;
  activeIndex: number;
}
const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 25px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcedff;
  padding: 0;
`;

const ListItemStyled = styled(animated.div)<StyledListItemProps>`
  font-family: Roboto, sans-serif;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
  font-size: 24px;
  color: ${(props) =>
    props.active ? props.theme.palette.textStrong : 'white'};
  background-color: ${(props) => (props.active ? '#DCEDFF' : '#657ed4')};
  border-radius: ${(props) => props.active && '50px 0 0 50px'};
  border-radius: ${(props) => props.second && '0 50px 0 0'};
  border-radius: ${(props) => props.first && '0 0 50px 0'};
  z-index: 20;
  &:before {
    content: '';
    width: 125px;
    height: ${(props) => (props.active ? '0' : '100px')};
    background-color: #657ed4;
    left: 0;
    margin-top: 145px;
    position: absolute;
    z-index: 0;
  }
`;

const ListItem = (props: ListItemProps) => {
  const { isActive, icon, clickCallback, index, title, activeIndex } = props;
  const Icon = icon;
  const springAnimation = useSpring({
    transform: isActive ? 'translateX(0px)' : 'translateX(100px)',
    config: { duration: 150 },
  });
  return (
    <ListItemStyled
      active={isActive}
      second={activeIndex + 1 === index}
      first={activeIndex - 1 === index}
      onClick={() => clickCallback(index)}
      style={isActive ? { ...springAnimation } : {}}
    >
      <Icon color={isActive && '#657ed4'} />
      <p>{title}</p>
    </ListItemStyled>
  );
};

const List = ({ listItems }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const items = listItems.map(({ Icon, title }, index) => {
    const isActive = activeIndex === index;
    if (index === 0 || listItems.length - 1 === index) {
      return (
        <ListItemStyled
          key={title}
          active={false}
          second={activeIndex + 1 === index}
          first={activeIndex - 1 === index}
        />
      );
    }
    return (
      <ListItem
        key={title}
        isActive={isActive}
        icon={Icon}
        clickCallback={setActiveIndex}
        activeIndex={activeIndex}
        index={index}
        title={title}
      />
    );
  });
  return <StyledList>{items}</StyledList>;
};

export default List;
