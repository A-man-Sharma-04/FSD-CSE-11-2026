const student={
    name:"Ashish",
    age:43,
    branch:"CSE",
};
const newstudent={
    ...student,
    section:"A"
}
console.log("new object name",newstudent.name);
console.log("new object age",newstudent.age);
console.log("new object branch",newstudent.branch);
console.log("new object section",newstudent.section);