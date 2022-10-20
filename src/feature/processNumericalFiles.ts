
function parseFile(jsonFile) : Map<String, any> {
    var keyArray: Array<String> = [];
    var valueArray: Array<any> = [];

    //keyArray represents the column names
    Object.entries(jsonFile[0]).forEach(([key, value]) => keyArray.push(key));
   //valueArray represents all of the rows in the file
    for(let i = 0; i < jsonFile.length; i++){
        Object.entries(jsonFile[i]).forEach(([key, value]) => valueArray.push(value));
    }

    var valueArrayByRow = [];
       while(valueArray.length){
        valueArrayByRow.push(valueArray.splice(0, (keyArray.length)));
       }
    return firstTwoNumericalColumns(keyArray, valueArray);
}

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

    return numericalColumnMap;
}

function numericalColumnValues(valueArrayByRow, numericalColumnNumber) : Array<any>{
    var columnValues: Array<any>;
    for(let i = 0; i < valueArrayByRow.length; i++){
        columnValues.push(valueArrayByRow[i][numericalColumnNumber]);
       }
    return columnValues;
}