// // var student
// // var teacher;

// // student;
// // teacher;
// // console.log(student);
// // student = "you";
// // console.log(student);


// // function hoisting

// function teacher(){
//     return "kyle";
// }
// var otherTeacher;
// teacher();
// otherTeacher();

// otherTeacher = function (){
//     return "suzy";
// };


//let doesn't  hositing

{
    teacher ="kyle";
    let teacher;
console.log(teacher);// refference Error: cannot access teacher before intialization.

}

var teacher = "kyle";

{
    console.log(teacher);
    let teacher = "suzt";
}