import React from 'react'
import Layout from '@wedgekit/layout';
import color from '@wedgekit/color';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: ${color.N700};
  color: ${color.N050};
  padding: 8px;
`;

const ResourceContainer = styled.div`
  background: rgb(255, 101, 23);
  height: 100vh;
  width: 250px
  padding: 10px;
`;

const NotificationContainer = styled.div`
  padding: 8px;
`;

function ChartViewerScreen() {
  return (
    <Layout.App
    resource={<ResourceContainer>
        <a href="https://www.dmsi.com/">
            <img alt="Logo" src="https://scontent.flnk2-1.fna.fbcdn.net/v/t39.30808-6/233324057_4090718344370530_5832627897713875018_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=48qBTZtdvSAAX-DwpGp&_nc_ht=scontent.flnk2-1.fna&oh=00_AT9HtPTjWEmHMTBQSAG0uyrGP3GPzt6GVsic0nBKM5-Bgg&oe=634514AF"
            style={{ maxWidth:"100%", height: "150px", width: '300px', marginTop:'50px', marginBottom: '20px' }}
            />
        </a>
        <button style={{ maxWidth:"100%", padding: '20px', width: '300px', marginBottom: '20px' }}>Charts</button>
            <button style={{ maxWidth:"100%", padding: '20px', width: '300px', marginBottom: '20px'}}>Import Data</button>
            <button style={{ maxWidth:"100%",padding: '20px', width: '300px' }}>Settings</button>
    </ResourceContainer>}
    notifications={<NotificationContainer>
            <button style={{ padding: '20px', width: '150px',  marginLeft:"1000px", marginTop:"10px", verticalAlign: "middle"}}>Download Chart</button>
            <button style={{ padding: '20px', width: '150px', marginLeft:"-250px", marginTop:"-80px", verticalAlign: "middle"}}>Back To Charts</button>  
            <p style={{ textAlign: 'center',  fontSize:'50px',  marginTop:"-80px"}}>Bar Chart</p>
            
        </NotificationContainer>}
    resourceMounted
    resourceType="drawer"
    drawerLeft
    drawerWidth="10vw"
  >
    {() => <div style={{ padding: '40px'}}>
        <img alt="Chart" src=" https://user-images.githubusercontent.com/33760706/115201729-46d8dc80-a113-11eb-8f18-f93214c694bd.png"
            style={{ marginLeft:"150px",  marginRight:"100px", marginTop:"100px", marginBottom:"100px", height:"650px"}}
            />
        </div>}
  </Layout.App>
  )
}

export default ChartViewerScreen