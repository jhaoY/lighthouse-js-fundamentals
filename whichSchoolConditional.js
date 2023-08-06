let age = 10;
let school = " ";

let whichSchool = function (age){
  if (age < 13){
    school = "Elementary School";
    return school;
  }
  else if (age >= 13 && age <= 18){
    school = "Secondary School"
    return school;
  }
  else{
    school = "Lighthouse Labs"
    return school;
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));