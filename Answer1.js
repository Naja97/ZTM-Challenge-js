const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const arr1 = [1,"2","3",2,true];
const answer = (ArrayToSort) => {
    ArrayToSort = ArrayToSort.sort((a,b)=> a-b);
    console.log(ArrayToSort);
    return finalString(ArrayToSort);
}

const sorting = (Array) => {
    let emptyArray=[];
    let newArray1=[];
    let newArray2=[];
    let newArray3=[];
    for (item of Array) {
        if (typeof item === 'number'){
            newArray1.push(item);
        }
        else if (typeof item === 'string') {
            newArray2.push(item);
        }
        else {
            newArray3.push(item);
        }
    }
    emptyArray.push(newArray1,newArray2,newArray3);
    return emptyArray;
}


const finalString = (Array) => {
    let emptyArray=[];
    let newArray=[];
    let first = Array[0];
    for (let i = 0; i < Array.length; i++) {
        if (first === Array[i] && first === Array[i+1]){
            newArray.push(Array[i]);
            first=Array[i+1];
        }
        else if (newArray.length===0) {
            emptyArray.push(Array[i]);
            first=Array[i+1];
        }
        else {
            newArray.push(Array[i]);
            emptyArray.push(newArray);
            newArray=[];
            first = Array[i+1];
        }
    }
    return emptyArray;
}
