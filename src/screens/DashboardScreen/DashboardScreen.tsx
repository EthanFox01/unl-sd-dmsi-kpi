import React, { useState } from 'react';

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
        <div>
            <SidebarDiv>
                <button onClick={handleImportDataClick}>Import Data</button>
            </SidebarDiv>
            <MainPageWrapper>
                <h1>Charts</h1>
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
                    />
                </ChartSelectWrapper>
            </MainPageWrapper>
        </div>
    );
}

export default DashboardScreen;
