const array = [1,2,3,4,5,6,7,8,9];

const answerAdd = (Array,a) => {
    let newArray=[];
    for (let i=0; i < Array.length; i++){
        let first=Array[i];
        for ( item of Array){
            if ( first + item === a){
            newArray.push(first,item);
            return newArray;
            }
        }
    } 
}