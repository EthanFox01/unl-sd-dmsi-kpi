import React, { useState } from 'react';
import Button from '@wedgekit/button';
import Card from '@wedgekit/card';
import { Text } from '@wedgekit/primitives';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
declare var require: any

import * as XLSX from 'xlsx';

import { updateLocale } from 'moment-timezone';
import { usePapaParse } from 'react-papaparse';

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
      var parsedFileResult;
      var jsonFile;
      fileReader.onload = function(event) {
      const data = event.target.result;
      const {readString} = usePapaParse();
      readString(selectedFile, {
        header: true,
        worker: true,
        complete: (parsedFileResult) => {
          console.log('---------------------------');
          console.log(parsedFileResult.data);
          console.log('---------------------------');
          jsonFile = parsedFileResult.data;
        return jsonFile;
        },
      });    
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
        console.log("jsonFile: ");
        console.log(jsonFile);    
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

  function firstTwoNumericalColumns (keyArray, valueArrayByRow) : Map<String, number> {
    var numericalColumn1 = -1;
    var numericalColumn2 = -1;
    var numericalColumnMap: Map<String, any> = new Map<String, any>();

    for(let row = 0; row < valueArrayByRow.length; row++){
        for(let column = 0; column < valueArrayByRow[0].length; column++){
            if(typeof valueArrayByRow[row][column] === "number"){
                if(numericalColumn1 == -1){
                    numericalColumn1 = column;
                }
                else{
                    numericalColumn2 = column;
                }
            }
            if(numericalColumn1 != -1 && numericalColumn2 != -1){
              break;
            }
        }
        if(numericalColumn1 != -1 && numericalColumn2 != -1){
          break;
        }
    }
    numericalColumnMap.set(keyArray[numericalColumn1], numericalColumnValues(valueArrayByRow, numericalColumn1));
    numericalColumnMap.set(keyArray[numericalColumn2], numericalColumnValues(valueArrayByRow, numericalColumn2));

    console.log("numericalColumnMap");
    console.log(numericalColumnMap);
    return numericalColumnMap;
}

function numericalColumnValues(valueArrayByRow, numericalColumnNumber) : Array<any>{
    var columnValues: Array<any> = [];
    for(let i = 0; i < valueArrayByRow.length; i++){
        columnValues.push(valueArrayByRow[i][numericalColumnNumber]);
       }
    console.log("column values: ");
    console.log(columnValues);
    return columnValues;
}
export default ImportFileScreen;