// Maths Expressions

// Q1
var x = 1;
++x;
document.write("The value ++x is: " + ++x + " <br>");

// Q2;
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

// Explain the output at each stage:
document.write("Value of --a is: " + --a + "<br>");
document.write("Value of --a - --b is: " + (--a - --b) + "<br>");
document.write("Value of --a - --b + ++b is: " + (--a - --b + ++b) + "<br>");
document.write("Value of --a - --b + ++b + b-- is: " + result + "<br>");

Q3
var fullName = prompt(
  "Hello!! My Name is Neo \n You must enter your name if you want to know the truth."
);
alert("Welcome the world of MATRIX.");

Q4
Q5
var userInput = +prompt("Enter an number to see multiplication tables");

if (userInput == "") {
  document.write("5 x 1 = " + 5 * 1 + "<br>");
  document.write("5 x 1 = " + 5 * 2 + "<br>");
  document.write("5 x 1 = " + 5 * 3 + "<br>");
  document.write("5 x 1 = " + 5 * 4 + "<br>");
  document.write("5 x 1 = " + 5 * 5 + "<br>");
  document.write("5 x 1 = " + 5 * 6 + "<br>");
  document.write("5 x 1 = " + 5 * 7 + "<br>");
  document.write("5 x 1 = " + 5 * 8 + "<br>");
  document.write("5 x 1 = " + 5 * 9 + "<br>");
  document.write("5 x 1 = " + 5 * 10 + "<br>");
} else {
  document.write(userInput + " x 1 = " + userInput * 1 + "<br>");
  document.write(userInput + " x 2 = " + userInput * 2 + "<br>");
  document.write(userInput + " x 3 = " + userInput * 3 + "<br>");
  document.write(userInput + " x 4 = " + userInput * 4 + "<br>");
  document.write(userInput + " x 5 = " + userInput * 5 + "<br>");
  document.write(userInput + " x 6 = " + userInput * 6 + "<br>");
  document.write(userInput + " x 7 = " + userInput * 7 + "<br>");
  document.write(userInput + " x 8 = " + userInput * 8 + "<br>");
  document.write(userInput + " x 9 = " + userInput * 9 + "<br>");
  document.write(userInput + " x 10 = " + userInput * 10 + "<br>");
}

// Q6
var subject1 = prompt("Enter a subject name");
var subject2 = prompt("Enter a subject name");
var subject3 = prompt("Enter a subject name");
var totalMarks = 300;
var sub1obtainedMarks = +prompt("Enter obtained marks of " + subject1 + "<br>");
var sub2obtainedMarks = +prompt("Enter obtained marks of " + subject2 + "<br>");
var sub3obtainedMarks = +prompt("Enter obtained marks of " + subject3 + "<br>");
var subject1percentage = (sub1obtainedMarks / 100) * 100;
var subject2percentage = (sub2obtainedMarks / 100) * 100;
var subject3percentage = (sub3obtainedMarks / 100) * 100;
var totalObtainedMarks =
  sub1obtainedMarks + sub2obtainedMarks + sub3obtainedMarks;
var totalPercentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<h2>Mark Sheet</h2>");
document.write(
  "<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    100 +
    "</td><td>" +
    sub1obtainedMarks +
    "</td><td>" +
    subject1percentage +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    100 +
    "</td><td>" +
    sub2obtainedMarks +
    "</td><td>" +
    subject2percentage +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    100 +
    "</td><td>" +
    sub3obtainedMarks +
    "</td><td>" +
    subject3percentage +
    "%</td></tr>"
);
document.write(
  "<tr><td>Total Marks</td><td>" +
    totalMarks +
    "</td><td>" +
    300 +
    "</td><td>" +
    totalObtainedMarks +
    "</td><td>" +
    totalPercentage +
    "%</td></tr>"
);
document.write("</table>");

// Q7
// Empty