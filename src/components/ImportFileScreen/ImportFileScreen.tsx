import React from 'react';
import Button from '@wedgekit/button';

const ImportFileScreen = () => {
  const [domain, setDomain] = React.useState('primary');

  return (
  <><h1 style={{
    fontSize: '20px',
    position: 'absolute', left:'845px', top: '320px'}}
    >Drag and drop files here</h1>
    <div style={{
    fontSize: '20px',
    position: 'absolute', left:'930px', top: '390px'}}>or</div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'blue'
      }}>
      <Button
        domain={domain}
        onClick={() => setDomain(domain === 'primary' ? 'secondary' : 'primary')}
      >
        Browse Files
      </Button>
    </div>
    <div style={{
    fontSize: '15px',
    position: 'absolute', left:'890px', bottom: '400px'}}>(csv,tsv,xls,xlsx)</div>
    </>
  );
};


export default ImportFileScreen;