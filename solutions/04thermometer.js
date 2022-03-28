const temp = [17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30];
const arr = [17, 21, 23];

function logOutString(arr) {
  
  let b = "";
  
  for (let i = 0; i < arr.length; i++) {
    
    const temp = arr[i];
    const index = i + 1;
    const a = `${temp}C the ${ordinal(index)} day ` ;
    
    b += a;
  }
  return b;
  
}

function ordinal(index) {
  const ind = index.toString();
const indIndex = ind.charAt(ind.length - 1);

    if (indIndex == 1 && ind.charAt(ind.length -2) != 1) {
      return index + "st"
    } else if (indIndex == 2 && ind.charAt(ind.length -2) != 1) {
      return index + "nd"
    } else if (indIndex == 3 && ind.charAt(ind.length -2) != 1) {
      return index + "rd"
    } else {
      return index + "th"
    } 
}


console.log(logOutString(temp));