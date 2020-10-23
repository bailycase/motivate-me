import React from 'react';
import styled from 'styled-components';
import ChecksLogo from '../../assets/Checks';
import YogaLogo from '../../assets/Yoga';
import Header from '../atoms/Header';
import { FlexBox, FlexColumn, FlexRow } from '../atoms/Helpers';
import Text from '../atoms/Text';
import Card from '../organisms/Card/Card';

interface Props {}

const RightBlock = styled(FlexColumn)`
  width: 60%;
  font-size: 20px;
`;
const Container = styled(FlexRow)`
  padding: 25px;
`;
const IconCard = (props: Props) => {
  return (
    <Card>
      <Container align={'center'}>
        <ChecksLogo color={'red'} />
        <RightBlock>
          <FlexRow>
            <Header size='2vw'>Hi,</Header>
            &nbsp;
            <Header size='2vw'>Baily!</Header>
          </FlexRow>
          <Text size='.8vw'>
            You have only 3 habits left to complete today. You have already
            completed.
          </Text>
        </RightBlock>
      </Container>
    </Card>
  );
};

export default IconCard;
