const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }];
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];

 
//   console.log(marks.filter((mark) => mark >= 40));


  console.log(scores.map((score) => score.name));

//   console.log(scores.filter((marks) => marks >= 40));
const isPass = (score) => score.marks >= 40;
const result = scores.filter(isPass);
console.log(result);

const isFail = (score) => score.marks <= 40;
const result1 = scores.filter(isFail);

const result2 = result1.map((result1) => result1.name);
console.log(result2);


// const avg =(score)  => score.marks
// const output = marks ((sum , curr) => sum + curr, 0);
// console.log(output.ruduce);

const adder = (sum , curr) => sum + curr
scores.reduce(adder,0)
console.log(adder);

// const value = scores.marks
// const output3= scores.reduce((sum , curr) => sum + curr, 0) => score.marks);
// console.log(output3);


// const avg1 = (score) => score.marks((sum , curr) => sum + curr, 0);
// const result12 = scores.reduce(avg1);
// console.log(result12);


// find topper name
const topper = (score) => score.marks >= 90;
const resul9 = scores.filter(topper);
console.log(resul9);



const outer  = scores.map((score) => score.marks);
const output0= outer.reduce((sum , curr) => sum + curr, 0);
console.log(output0/scores.length);


const classTopper = (score) => score.marks > 90;
const resul4 = scores.filter(classTopper);

const resul5 = resul4.map((resul4) => resul4.name);
console.log(resul5);



// const outer  = scores.map((score) => score.marks);
// const output0= outer.reduce((sum , curr) => sum + curr, 0);
// console.log(output0/7);


// let mar = scores.mark;
//  console.log(scores.length);