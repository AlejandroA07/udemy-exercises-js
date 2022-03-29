const temp = [17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 30, 17, 21, 23, 12, 26, 18, 19, 25, 16, 28, 15, 21, 13, 29, 32];
const arr = [17, 21, 23];


/* function logOutStringForEach(arr) {
  let b = "";
  arr.forEach((el, index,) => {
      const a = `${el}C the ${ordinal(index + 1)} day\n` ;
      b += a;
  })
  return b;
}  */


/* function logOutString(arr) {
  
  let b = "";
  
  for (let i = 0; i < arr.length; i++) {
    
    const temp = arr[i];
    const index = i + 1;
    const a = `${temp}C the ${ordinal(index)} day ` ;
    
    b += a;
  }
  return b;
  
} */

/* function ordinalNumAlmost(index) {
  const units = Math.trunc(index % 10);
  const tenths = Math.trunc(Math.trunc(index / 10) % 10);

  if (tenths == 1)
  return "th";
  if (units == 1)
  return "st";
  if (units == 2)
  return "nd";
  if (units == 3)
  return "rd";
   
  return "th";
} */

function ordinalNumFunctional(index) {
  const ordinal = ["th", "st", "nd", "rd"]
  const units = Math.trunc(index % 10);
  const tenths = Math.trunc(Math.trunc(index / 10) % 10);
  const n = units > 3 || tenths == 1 ? 0 : units;
  return ordinal[n];
}

function logOutStringForEachFunctional(arr) {
  return arr.map((el, index) => `${el}C the ${(index + 1) + ordinalNumFunctional(index + 1)} day`)
  .join('\n')
}
const output = logOutStringForEachFunctional(temp);
console.log(output);

