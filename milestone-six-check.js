// number 01:Object with property (string, boolean, number, object, array, method which will return a property value)

const student = {
  name: "Shakib",
  id: 17,
  subject: "science",
  expense: 7000,
  isRice: false,
  bestFriend: {
    name: "Asif",
    id: 19,
    subject: "Math",
  },
  favoriteSubjects: ["english", "Math", "economic", "policies", "coding"],
  goingAbroad: function () {
    console.log(this.name, "will going Canada soon.");
    console.log(this.subject, "is not the best department all the time.");
  },
  friendZoon: function (spend, tips) {
    this.expense = this.expense - spend - tips;
    return this.expense;
  },
};
student.goingAbroad();
const afterSpending = student.friendZoon(1000, 150);
const afterSpendingTwo = student.friendZoon(1999, 200);

console.log(afterSpending);
console.log(afterSpendingTwo);

// number:02  template string. minimum 3 property will be dynamic (nested object property, array second element, another property)

const newTemp = `
Shakib favorite subject is: ${student.subject}
Ths best friend of Shakib is: ${student.bestFriend.name}
Shakib favorite subject are: ${student.favoriteSubjects[1]}
`;

//number:3.1  no parameter arrow function. return 89

const noPara = () => {
  console.log(89);
};
noPara();

//number:3.2 single parameter arrow function. will divide input by 7

const singlePara = (single) => single / 7;
const result = singlePara(49);
console.log(result);

//number:3.3 arrow function with two parameters.

const twoPara = (numOne, numTwo = 0) => (numOne + numTwo) / 2;

const resultTwo = twoPara(150, 160);
console.log(resultTwo);

//number: 3.4 multi-line arrow function. two parameter.

const multilinePara = (one, two = 0) => {
  const addOne = one + 7;
  const addTwo = two + 7;
  const sum = addOne + addTwo;
  return sum;
};

const resultThree = multilinePara(53, 33);
console.log(resultThree);

//number:4 map divide each element by 7

const numbers = [210, 49, 70, 7770, 63];
const newNum = numbers.map((x) => x / 7);
console.log(newNum);

const newNum2 = numbers.map((x) => x * x);
console.log(newNum2);

//number:5 map, forEach, filter, find

const actors = [
  "Jack Nicholson",
  "Robert De Niro",
  "Marlon Brando",
  "Denzel Washington",
  "Leonardo DiCaprio",
  "Shah Rukh Khan",
  " Morgan Freeman",
  "Will Smith",
];

const actorsLength = actors.map((x) => x.length);
console.log(actorsLength);

const actorsDetails = [
  { name: " Robert De Niro", born: 1943, movie: "Cape Fear" },
  { name: "Jack Nicholson", born: 1937, movie: " Chinatown" },
  { name: "Denzel Washington", born: 1954, movie: " Fences" },
  { name: "Tom Hanks", born: 1956, movie: " Cast Away" },
  { name: "Leonardo DiCaprio", born: 1974, movie: "Inception" },
  { name: "Morgan Freeman", born: 1937, movie: " Se7en" },
];
const actorsName = actorsDetails.map((x) => x.name);
const actorsMovie = actorsDetails.map((x) => x.movie);
console.log(actorsName);
console.log(actorsMovie);

actorsDetails.forEach((actors) => console.log(actors));

//use of filter
const newNumbers = [21, 53, 78, 90, 123, 690, 2, 9, 44, 71, 11, 4];
const bigNumbers = newNumbers.filter((num) => num > 20);
const smallNumbers = newNumbers.filter((num) => num < 30);
console.log(bigNumbers);
console.log(smallNumbers);

//use of find

const findInception = actorsDetails.find((name) => name.movie == "Inception");
const findName = actorsDetails.find((name) => name.name == "Tom Hanks");
const findYear = actorsDetails.find((year) => year.born == 1937);
console.log(findInception);
console.log(findName);
console.log(findYear);
