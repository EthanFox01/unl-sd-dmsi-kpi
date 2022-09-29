import React from 'react';
import Button from '@wedgekit/button';

const ImportFileScreen = () => {
  const [domain, setDomain] = React.useState('primary');

  return (
  <><h1 style={{
    fontSize: '100%',
    position: 'relative',
    textAlign: 'center',
    top: 'auto'}}
    >Drag and drop files here</h1>
    <div style={{
    fontSize: '90%',
    top:'auto',
    position: 'relative', 
    textAlign: 'center'}}>or</div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'blue',
        position: 'relative',
        textAlign: 'center'
        
      }}>
      <Button
        domain={domain}
        onClick={() => setDomain(domain === 'primary' ? 'secondary' : 'primary')}
      >
        Browse Files
      </Button>
    </div>
    <div style={{
    fontSize: '100%',
    position: 'relative',  textAlign: 'center', bottom: 'auto'}}>(csv,tsv,xls,xlsx)</div>
    </>
  );
};


export default ImportFileScreen;