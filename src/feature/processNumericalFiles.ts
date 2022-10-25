
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
        console.log("in while");
        valueArrayByRow.push(valueArray.splice(0, (keyArray.length)));
       }
       
    return firstTwoNumericalColumns(keyArray, valueArrayByRow);
}

function firstTwoNumericalColumns (keyArray, valueArrayByRow) : Map<String, number> {
    var numericalColumn1 = -1;
    var numericalColumn2 = -1;
    var numericalColumnMap: Map<String, any> = new Map<String, any>();
    console.log(valueArrayByRow.length);

    for(let row = 0; row < valueArrayByRow.length; row++){
        console.log("in outer for");
        for(let column = 0; column < valueArrayByRow[0].length; column++){
            console.log("in inner for");
            if(typeof valueArrayByRow[row][column] === "number"){
                console.log("in if");
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
    console.log(numericalColumn1);
    console.log(numericalColumn2);
    numericalColumnMap.set(keyArray[numericalColumn1], numericalColumnValues(valueArrayByRow, numericalColumn1));
    numericalColumnMap.set(keyArray[numericalColumn2], numericalColumnValues(valueArrayByRow, numericalColumn2));

    return numericalColumnMap;
}

function numericalColumnValues(valueArrayByRow, numericalColumnNumber) : Array<any>{
    var columnValues: Array<any> = [];
    for(let i = 0; i < valueArrayByRow.length; i++){
        columnValues.push(valueArrayByRow[i][numericalColumnNumber]);
       }
    return columnValues;
}

export default parseFile;
