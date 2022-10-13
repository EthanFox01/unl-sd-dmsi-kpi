import { Dictionary } from "@reduxjs/toolkit";

function firstTwoNumericalColumns (jsonFile) : Array<String> {
    var isNumericalColumn = false;
    var numericalColumnNumber = 0;
    var partialArray;

    var keyArray: Array<String> = [];
    var valueArray: Array<any> = [];

    //keyArray represents the column names
    Object.entries(jsonFile[0]).forEach(([key, value]) => keyArray.push(key));
   //valueArray represents all of the rows in the file
    for(let i = 0; i < jsonFile.length; i++){
        Object.entries(jsonFile[i]).forEach(([key, value]) => valueArray.push(value));
    }

    for(let column = 0; column < jsonFile.length; column++){
        if(onlyNumbers(jsonFile[column])){
            isNumericalColumn = true;
            partialArray.push(jsonFile[column]);
        }
        if(isNumericalColumn){
            numericalColumnNumber++;
        }
        if(numericalColumnNumber == 2){
            break;
        }
    }
    return partialArray;
}

function onlyNumbers(array) {
    return array.every(element => {
      return typeof element === 'number';
    });
  }