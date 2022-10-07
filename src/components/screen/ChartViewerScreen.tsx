import React from 'react'
import Layout from '@wedgekit/layout';
import styled from 'styled-components';
import Button from '@wedgekit/button';

const SidebarDiv = styled.div`
    height: 100%;
    width: 150px;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 40px;
    background: gray;
`;

const MainPageWrapper = styled.div`
  margin-left: 10%;
`;

const ChartSelectWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid lightgray;
  margin-left: 5%;
  margin-right: 5%;
`;

const handleImportDataClick = () => {
  alert("This should be the file upload screen");
}

function ChartViewerScreen() {
  return (
    <Layout.App
    resource={<SidebarDiv>
        <Button onClick={handleImportDataClick}>Import Data</Button>
    </SidebarDiv>}
    resourceMounted
    resourceType="drawer"
    drawerLeft
    drawerWidth="10vw"
  >
    {() => <MainPageWrapper>
      <h1>Chart</h1>
      <Layout.Grid
      areas={['chart']}
      columns={[]}
      rows={['70vh']}
      rowsLg={['60vh']}
      areasMd={['chart']}
      rowsMd={['85vh']}
      areasSm={['chart']}
      rowsSm={['70vh']}
      >
        <Layout.Section area="chart">
          <ChartSelectWrapper>
            <HeaderWrapper>
              <h3>Pie Chart</h3>
              <h1>Title</h1>
              <h4>Secondary text</h4>
            </HeaderWrapper>
            <br></br>
            <img 
              alt="Pie Chart" 
              src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
            />
          </ChartSelectWrapper>        
        </Layout.Section>
      </Layout.Grid>
    </MainPageWrapper>
    }
  </Layout.App>
  )
}

export default ChartViewerScreen