const hexOrRgb = (element) => {
    if (isHexOrRgb(element)){
    const r = parseInt(element.slice(1, 3), 16);
    const g = parseInt(element.slice(3, 5), 16);
    const b = parseInt(element.slice(5, 7), 16);

    return { r, g, b };
    }
    else {
      let newArray2 = element.split(",",3);
      let newArray3=[];
      for ( item of newArray2){
        newArray3.push(createHEX(item));
      }

      return "#" + newArray3.join("");

}
}

const isHexOrRgb = (element) => {
  let check = element.slice(0,1);
  if (check === "#") {
     return true ;
  }
}

const createHEX = (item) => {
  let first = parseInt(item,10);
  first= first.toString(16);
  return first
}