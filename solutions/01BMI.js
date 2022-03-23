
/* 
function calcBMI(weight, height) {
  return weight / (height * height);
  // const BMI = weight / height ** 2
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

compareBMI(markBMI, jhonBMI); */

const john = {
  fullName : "John Smith",
  mass : 92,
  height : 1.95,
  calcBMI : function calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
john.calcBMI();

const mark = {
  fullName : "Mark Miller",
  mass : 78,
  height : 1.69,
  calcBMI : function calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
mark.calcBMI();

console.log(john.bmi > mark.bmi ? `${mark.fullName}'s BMI(${mark.bmi}) is lower than ${john.fullName}'s BMI(${john.bmi})` : `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`);
