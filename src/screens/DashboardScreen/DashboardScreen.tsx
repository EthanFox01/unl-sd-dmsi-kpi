import React, { useState } from 'react';

import Layout from '@wedgekit/layout';
import Button from "@wedgekit/button";

import SidebarDiv from './styles/SidebarDiv'
import HeaderWrapper from './styles/HeaderWrapper'
import ChartSelectWrapper from './styles/ChartSelectWrapper';
import MainPageWrapper from './styles/MainPageWrapper';

const DashboardScreen = () => {

    const handleChartClick = () => {
        alert("This should be the chart viewer screen");
    }

    const handleImportDataClick = () => {
        alert("This should be the file upload screen");
    }

    return (
        <Layout.App 
            // header={<HeaderContainer>Header</HeaderContainer>}
            resource={<SidebarDiv>
                        <Button onClick={handleImportDataClick}>Import Data</Button>
                    </SidebarDiv>}
            resourceMounted
            resourceType="drawer"
            drawerLeft
            drawerWidth="10vw"
        >
            {() => <MainPageWrapper>
                <h1>Charts</h1>
                <Layout.Grid
                    areas={['chart1 chart2 chart3']}
                    columns={['']}
                    rows={['50vh']}
                    // areasLg={['chart1 chart2', 'chart3 .']}
                    rowsLg={['40vh', '40vh', '40vh']}
                    areasMd={['chart1', 'chart2', 'chart3']}
                    rowsMd={['65vh', '65vh', '65vh']}
                    areasSm={['chart1', 'chart2', 'chart3']}
                    rowsSm={['50vh', '50vh', '50vh']}
                >
                    <Layout.Section area="chart1">
                        <ChartSelectWrapper onClick={handleChartClick}>
                            <HeaderWrapper>
                                <h3>Pie Chart</h3>
                                <h1>Title</h1>
                                <h4>Secondary text</h4>
                            </HeaderWrapper>
                            <br></br>
                            <img 
                                src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
                                alt="Pie Chart"
                                style={{ width: '100%' }}
                            />
                        </ChartSelectWrapper>
                    </Layout.Section>
                    <Layout.Section area="chart2">
                        <ChartSelectWrapper onClick={handleChartClick}>
                            <HeaderWrapper>
                                <h3>Pie Chart</h3>
                                <h1>Title</h1>
                                <h4>Secondary text</h4>
                            </HeaderWrapper>
                            <br></br>
                            <img 
                                src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
                                alt="Pie Chart"
                                style={{ width: '100%' }}
                            />
                        </ChartSelectWrapper>
                    </Layout.Section>
                    <Layout.Section area="chart3">
                        <ChartSelectWrapper onClick={handleChartClick}>
                            <HeaderWrapper>
                                <h3>Pie Chart</h3>
                                <h1>Title</h1>
                                <h4>Secondary text</h4>
                            </HeaderWrapper>
                            <br></br>
                            <img 
                                src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg"
                                alt="Pie Chart"
                                style={{ width: '100%' }}
                            />
                        </ChartSelectWrapper>
                    </Layout.Section>
                </Layout.Grid>
            </MainPageWrapper>}
        </Layout.App>
    );
}

export default DashboardScreen;
