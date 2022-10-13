import React, { useState } from 'react';
import Button from '@wedgekit/button';
import Card from '@wedgekit/card';
import { Text } from '@wedgekit/primitives';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
declare var require: any

import * as XLSX from 'xlsx';

import { updateLocale } from 'moment-timezone';
import * as Papa from 'papaparse';

const ImportFileScreen = () => {
  const [domain, setDomain] = React.useState('primary');
  const fileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();
  const returnToScreen = () => {
    history.push("/");;
}
  

  const handleInputButtonClick = () => {
    fileInput.current.click();
  };
  const history = useHistory();
  const InstallerWrapper = styled.div`
  display: flexbox;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 8px 32px;
  
`;
  const handleInputChange = event => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileName(event.target.files[0].name);
    var fileName = event.target.files[0].name;
    var uploadedFile = event.target.files[0];
    convertUploadFile(fileName, uploadedFile);
  };
  

  const convertUploadFile = (selectedFileName, selectedFile) => {
    if(selectedFileName.includes(".csv") || selectedFileName.includes(".tsv")){
      const fileReader = new FileReader();
      var jsonFile;
      fileReader.onload = function(event) {
      const data = event.target.result;
        const jsonFile = Papa.parse(data);
        return jsonFile;
    }
    fileReader.readAsBinaryString(selectedFile);
    }
    else if(selectedFileName.includes(".xlsx") || selectedFileName.includes(".xls")){
      const fileReader = new FileReader();
      var jsonFile;
      fileReader.onload = function(event) {
        const data = event.target.result;
        const workbook = XLSX.read(data, {type: 'binary'});
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        jsonFile = XLSX.utils.sheet_to_json(worksheet);
        return jsonFile;
      }
      fileReader.readAsBinaryString(selectedFile);

    }
  };

  return (


  <>
  
  
  <div style={{
    boxSizing: "border-box",
    borderBlockColor: 'black',
    borderBlockWidth: '2px',
    borderBlockStyle: 'dashed',
    position: 'relative',
    marginTop: '300px'
  }}>
    <h1 style={{
      fontSize: '100%',
      position: 'relative',
      textAlign: 'center',
      top: 'auto',
      bottom: 'auto',
      marginTop: '5%'}}
      >Drag and drop files here</h1>
      <div style={{
      fontSize: '90%',
      top:'auto',
      bottom: 'auto',
      position: 'relative', 
      textAlign: 'center',
      margin: 'auto'}}>or</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '8vh',
          color: 'blue',
          position: 'relative',
          marginTop: 'auto',
          marginBottom: 'auto'
        
        }}>
        <Button
          onClick={handleInputButtonClick}
        >
          Browse Files
        </Button>
        <input type="file" 
          accept={'.xlsx, .xls, .csv, .tsv'}
          style={{display:'none'}} 
          ref={fileInput}
          onChange={handleInputChange}
        
        /> 
        
      
      </div>
      <div style={{
      fontSize: '100%',
      position: 'relative',
      textAlign: 'center',
      marginBottom: 'auto',
      alignItems: 'center',
      marginTop: '1%',
      

      }}>(csv,tsv,xls,xlsx)</div>
      
    </div>
    <Card>
      <InstallerWrapper>
        <Text>Attachments</Text>
      </InstallerWrapper> 
        
      
    </Card>
   
  
    {selectedFile && (<Card>
      <InstallerWrapper>
        <Text><p>{selectedFileName}</p></Text>
      </InstallerWrapper>
    </Card>
    )}
    <div style={{
       display: 'flex',
          justifyContent: 'center',
          color: 'blue',
          position: 'relative',
          marginBottom: "0",
          marginRight: "0",
          marginLeft: "0",
          margin:"auto"

          
    }}><Button onClick= {returnToScreen}>Return</Button></div>
      </>
   );
  };


export default ImportFileScreen;