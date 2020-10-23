import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import Topbar from '../src/components/organisms/TopBar/Topbar';
import { FlexColumn, FlexRow } from '../src/components/atoms/Helpers';
import IconCard from '../src/components/templates/IconCard';
import Card from '../src/components/organisms/Card/Card';
import Habits from '../src/components/sections/Habits';

const AppContainer = styled(FlexRow)`
  width: 100%;
  height: 100%;
`;
const Container = styled(FlexColumn)`
  width: 100%;
  height: 100%;
`;
const LeftContainer = styled(FlexColumn)`
  height: 75%;
  width: 25%;
  box-sizing: border-box;
  padding: 15px;
  justify-content: space-around;
`;
const CenterContainer = styled.div`
  height: 100%;
  border-left: 0.5px solid #e5e5e5;
  width: 50%;
`;
const RightContainer = styled.div`
  height: 100%;
  width: 25%;
`;
function App() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <Container>
          <Topbar />
          <AppContainer>
            <LeftContainer>
              <IconCard />
              <Card>
                <img
                  src='/Calendar.png'
                  height='75%'
                  width='75%'
                  alt='calendar'
                />
              </Card>
            </LeftContainer>
            <CenterContainer>
              <Habits />
            </CenterContainer>
            <RightContainer />
          </AppContainer>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
