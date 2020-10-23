import React from 'react';
import styled from 'styled-components';
import Card from '../organisms/Card/Card';
import BarChart from '../organisms/Graphs/BarChart/BarChart';
import { ParentSize } from '@visx/responsive';
import IconCard from '../templates/IconCard';
import PieChart from '../organisms/Graphs/PieChart/PieChart';

const StyledDashboard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const DashboardContent = styled.div`
  width: 100%;
  height: 90%;
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  height: 35%;
`;
const MidSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  min-height: 45%;
  height: 100%;
`;

const data = {
  habits: [
    [{}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    [],
    [],
    [],
  ],
};

const Dashboard = () => {
  return (
    <StyledDashboard>
      <DashboardContent>
        <TopSection>
          <IconCard />
          <Card shrink={2} direction='column'>
            <Card.Head direction='row'>
              {/* <Text color={'black'} size={'1.2vw'}>
                {format(date, 'E')}
              </Text> */}
              {/* <Text color={'black'} size={'1.2vw'}>
                {format(date, 'co')}
              </Text> */}
            </Card.Head>
            <Card.Body>
              <ParentSize>
                {(parent) => (
                  <PieChart height={parent.height} width={parent.width} />
                )}
              </ParentSize>
            </Card.Body>
          </Card>
        </TopSection>
        <MidSection>
          <Card>
            <ParentSize>
              {(parent) => (
                <BarChart
                  width={parent.width}
                  height={parent.height}
                  data={data}
                />
              )}
            </ParentSize>
          </Card>
        </MidSection>
        {/* <BottomSection>
        <Card />
        <Card />
        <Card />
      </BottomSection> */}
      </DashboardContent>
      {/* <RightSideBar /> */}
    </StyledDashboard>
  );
};
export default Dashboard;
