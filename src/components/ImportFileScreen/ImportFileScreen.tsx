import React, { useState } from 'react';
import Button from '@wedgekit/button';

const ImportFileScreen = () => {
  const [domain, setDomain] = React.useState('primary');
  const fileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();

  const handleInputButtonClick = () => {
    fileInput.current.click();
  };

  const handleInputChange = event => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileName(event.target.files[0].name);
    convertUploadFile(selectedFileName);
  };

  const convertUploadFile = (selectedFileName) => {
    if(selectedFileName.endsWith(".csv") || selectedFileName.endsWith(".tsv")){

    }
    else if(selectedFileName.endsWith(".xlsx") || selectedFileName.endsWith(".xls")){
      
    }
  };

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
        // domain={domain}
        onClick={handleInputButtonClick}
      >
        Browse Files
      </Button>
      <input type="file" 
        accept={'.xlsx, .xls'}
        style={{display:'none'}} 
        ref={fileInput}
        onChange={handleInputChange}
      />
    </div>
    <div style={{
    fontSize: '100%',
    position: 'relative',  textAlign: 'center', bottom: 'auto'}}>(csv,tsv,xls,xlsx)</div>
    <p>{selectedFileName}</p>
    </>
  );
};


export default ImportFileScreen;