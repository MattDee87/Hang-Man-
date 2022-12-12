const teacherNames = ['Matina','Jamal'];

const printTeacher = (teacherNames, i) => {
  console.log(`${i + 1}. ${teacherNames}`); 
};

teacherNames.forEach(printTeacher);


console.log(1+1); 




let m = 0;

while (m < 3) {
  m++;
  console.log("hello")
}

console.log (m);
//expected output should be 3

if (feedback === "C") {
  console.log("C");
} else {
  console.log("I'm sorry that is not one of the letters");
}

if (feedback === "A") {
  console.log("A");
} else {
  console.log("I'm sorry that is not one of the letters");
}

if (feedback === "S") {
  console.log("C");
} else {
  console.log("I'm sorry that is not one of the letters");
}

if (feedback === "H") {
  console.log("C");
} else {
  console.log("I'm sorry that is not one of the letters");
}

let n = 0;
let incorrectGuess = 0;

while (incorrectGuess < 6) {
  incorrectGuess++;
  console.log("please enter a letter")
  if(incorrectGuess === 6) {
    console.log("you lost.  Do you want to play again?")
  }


}

console.log(n);

let num = 0;
while (num < 3) {
  num++;
  console.log(1)
  console.log(2)
  console.log(3)
}

console.log(n);

let count = 1;
while (count < 11) {
    console.log(count);
    count +=1;
}
