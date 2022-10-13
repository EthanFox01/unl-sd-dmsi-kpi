import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '@wedgekit/layout';
import styled from 'styled-components';
import Button from '@wedgekit/button';

import SidebarDiv from './styles/SidebarDiv';
import MainPageWrapper from './styles/MainPageWrapper';
import HeaderWrapper from './styles/HeaderWrapper';
import ChartSelectWrapper from './styles/ChartSelectWrapper';


const ChartViewerScreen = () => {
  const history = useHistory();

  const handleImportDataClick = () => {
    history.push("/import");
  }

  const handleHomeButtonClick = () => {
    history.push("/");
}

  return (
    <Layout.App
      resource={<SidebarDiv>
        <Button onClick={handleHomeButtonClick}>Home</Button>
        <br></br>
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