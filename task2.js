// Chapter 9 - 11

// Q1
var city = prompt("Enter your city");
if (city === "Karachi") {
  alert("Welcome to city of lights");
}

// Q2
var gender = prompt("Enter your gender");
var message = "";
if (gender === "male") {
  message = "Good Morning Sir.";
}
if (gender === "female") {
  message = "Good Morning Ma'am.";
}
alert(message);

// Q3
var trafficSignal = prompt("Enter the color of traffic light");
var lightColor = "";
if (trafficSignal === "Red") {
  lightColor = "Must Stop";
} else if (trafficSignal === "Yellow") {
  lightColor = "Ready to move";
} else if (trafficSignal === "Green") {
  lightColor = "Move now";
}

// Q4
var fuel = +prompt("Enter your car fuel in litres.");
var fuelMessage = "";
if (fuel > 0.25) {
  fuelMessage = "Please refill the fuel in your car.";
}

// Q5
// a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// e
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// f
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// g
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Q6
document.write(<h3>Marks Sheet</h3>);
var english = +prompt("Enter your English subject marks");
var mathematics = +prompt("Enter your Mathematics subject marks");
var computer = +prompt("Enter your English subject marks");

var totalMarks = 300;
var obtainedMarks = english + mathematics + computer;
var percentage = (obtainedMarks / totalMarks) * 100;

if (percentage >= 80 && percentage <= 100) {
  document.write("Total marks: " + totalMarks + "<br>");
  document.write("Marks obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "<br>");
  document.write("Grade: A-1 <br>");
  document.write("Remarks: Exellent <br>");
} else if (percentage >= 70 && percentage <= 79.99 + "<br>") {
  document.write("Total marks: " + totalMarks + "<br>");
  document.write("Marks obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "<br>");
  document.write("Grade: A <br>");
  document.write("Remarks: Good <br>");
} else if (percentage >= 60 && percentage <= 69.99 + "<br>") {
  document.write("Total marks: " + totalMarks + "<br>");
  document.write("Marks obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "<br>");
  document.write("Grade: B <br>");
  document.write("Remarks: You need to improve <br>");
} else {
  document.write("Total marks: " + totalMarks + "<br>");
  document.write("Marks obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "<br>");
  document.write("Grade: F <br>");
  document.write("Remarks: Sorry <br>");
}

// Q7
var secretNum = +prompt("Guess the secret number?");

if (secretNum === 9) {
  alert("Bingo! Correct answer.");
} else {
  alert("Close enough to the correct answer.");
}

// Q8
var num = +prompt("Enter the number that is divisible y 3.");

if (num % 3 == 0) {
  alert("The number is divisible by 3.");
} else {
  alert("Oops! wrong number.");
}

// Q9
var checkNumber = +prompt("Enter any number.");

if (checkNumber % 2 == 0) {
  alert("It's an even number.");
} else {
  alert("It's an odd number.");
}

// Q10
var weatherTemperature = +prompt("Enter the temperature of the weather today?");
var temperature = "";

if (weatherTemperature > 40) {
  temperature = "It is too hot outside.";
} else if (weatherTemperature > 30) {
  temperature = "The weather today is normal.";
} else if (weatherTemperature > 20) {
  temperature = "Today's weather is cool.";
} else if (weatherTemperature > 10) {
  temperature = "OMG! Today's weather is so cool.";
} else {
  temperature = "OMG! It's freezing.";
}
alert(temperature);

// Q11
var number1 = +prompt("Enter number 1");
var number2 = +prompt("Enter number 2");
var operator = prompt("Enter the operator (+,-,/,*,%)");
if (operator === "+") {
    alert(number1+number2);
}
else if (operator === "-") {
    alert(number1-number2);
}
else if (operator === "/") {
    alert(number1/number2);
}
else if (operator === "*") {
    alert(number1*number2);
}
else if (operator === "%") {
    alert(number1%number2);
}