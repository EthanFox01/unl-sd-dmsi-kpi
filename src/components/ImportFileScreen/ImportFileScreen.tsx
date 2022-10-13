import React, { useState } from 'react';
import Button from '@wedgekit/button';
import * as XLSX from 'xlsx';
//import * as CSV from 'convert-csv-to-json';
import { updateLocale } from 'moment-timezone';
import * as Papa from 'papaparse';

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
      //console.log('data:' + data);
        const jsonFile = Papa.parse(data);
        console.log(jsonFile);
        console.log(jsonFile.data[0]);
        console.log(jsonFile.data[1]);
        var stringedJsonFile = JSON.stringify(jsonFile);
        console.log(stringedJsonFile);
        //console.log('json:' + JSON.stringify(jsonFile));
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
        console.log(jsonFile);
        console.log(jsonFile[0]);

        var keyDictionary: Array<String> = [];
        var valueDictionary: Array<any> = [];

        Object.entries(jsonFile[0]).forEach(([key, value]) => keyDictionary.push(key));
        console.log(keyDictionary);
        for(let i = 0; i < jsonFile.length; i++){
            Object.entries(jsonFile[i]).forEach(([key, value]) => valueDictionary.push(value));
        }
       console.log(valueDictionary);

       //console.log(valueDictionary[7 + (0*(keyDictionary.length - 1))]);
       var multiValueArray: Array<Array<any>> = [[]];
       for(var i:number = 0; i < jsonFile.length; i++){
           for(var j:number = 0; j < keyDictionary.length; j++) {
               multiValueArray[i][j] = valueDictionary[j + (i*(keyDictionary.length - 1))];
               console.log("i:" + i + " j:" + j + " value:" + multiValueArray[i][j]);
           }
       }
        /*var columnNumber : number = keyDictionary.length;
        var valueDictionary: Array<Array<any>> = [[]];
        //console.log(columnNumber);
        //Object.entries(jsonFile[0]).forEach(([key, value]) => console.log(value));
        //Object.entries(jsonFile[0]).forEach(([key, value]) => valueDictionary[0].push(value));
        //Object.entries(jsonFile[1]).forEach(([key, value]) => valueDictionary[0].push(value));
        //Object.entries(jsonFile[0]).forEach(([key, value]) => valueDictionary[0].push(value));
        //for(let row = 0; row < jsonFile.length; row++){
          //Object.entries(jsonFile[row]).forEach(([key, value]) => valueDictionary[row].push(value));
            //Object.entries(jsonFile[row][column]).forEach(([key, value]) => valueDictionary[row].push(value));
          //}
        for(let row = 0; row < jsonFile.length; row++){
          console.log("outside for");
          for(let column = 0; column < jsonFile.length; column++){
            console.log("inside for");
            //Object.entries(jsonFile[row]).forEach(([key, value]) => valueDictionary[column][row] = value);
            //Object.entries(jsonFile[row]).forEach(([key, value]) => valueDictionary[row].push(value));
            console.log(jsonFile.value);
            //console.log(jsonFile[column].value);
          }
        }*/
        //console.log(valueDictionary);
        return jsonFile;
      }
      fileReader.readAsBinaryString(selectedFile);

    }
  };
 
  return (


  <><h1 style={{
    fontSize: '100%',
    position: 'relative',
    textAlign: 'center',
    top: 'auto',
    bottom: 'auto',
    marginTop: '16%'}}
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
        // alignItems: 'center',
        justifyContent: 'center',
        height: '8vh',
        color: 'blue',
        position: 'relative',
        // textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
        
      }}>
      <Button
        // domain={domain}
        onClick={handleInputButtonClick}
      >
        Browse Files
      </Button>
      <input type="file" 
        accept={'.csv,.tsv,.xlsx, .xls'}
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
    marginTop: '1%'

    }}>(csv,tsv,xls,xlsx)</div>
    <p>{selectedFileName}</p>
    </>
  );
};


export default ImportFileScreen;