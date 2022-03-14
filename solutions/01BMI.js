function calcBMI(weight, height) {
  const BMI = weight / (height * height);
  // const BMI = weight / height ** 2
  return BMI;
}

const markBMI = calcBMI(78, 1.69);
const jhonBMI = calcBMI(92, 1.95);

function compareBMI(mark, jhon) {
  if (mark > jhon) {
    return console.log(
      `Mark's BMI(${markBMI}) is higher than Jhon's BMI(${jhonBMI})`
    );
  } else if (mark < jhon) {
    return console.log(
      `Mark's BMI(${markBMI}) is lower than Jhon's BMI(${jhonBMI})`
    );
  } else {
    return console.log(
      `Mark's BMI(${markBMI}) is equal to Jhon's BMI(${jhonBMI})`
    );
  }
}

compareBMI(markBMI, jhonBMI);
