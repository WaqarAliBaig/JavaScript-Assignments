// Home Work
// Chapter 6

// Q1
var x = 1;
x++;
document.write("The value of ++x is: " + ++x + "<br>");

// Q2
var x = 100;
--x;
document.write("The fastest way to reduce the value of x into 99 is to add decrement to it like --x: " + --x + "<br>");

// Q3
var x = 50;
var y = x++;
document.write("The value of y is: " + y + " <br>");

// Q4
var y = 50;
var z = --y;
document.write("The value of z is: " + z + " <br>");

// Q5
var num = 6;
var newNum = num--;
document.write("The value of newNum is" + n-- + " <br>");

// Q6
var num1 = 4+1;
var num2 = --num1;
document.write("The value is: " + num2  + " <br>");

//Q7
var newValue = 6;
newValue = ++newValue;
alert(newValue);


// Chapter 7

// Q1
var calculatedNum = 2 + (2 * 6);
document.write("The value is: " + calculatedNum + "<br>");

// Q2
calculatedNum = (2 + 2) * 6;
document.write("The value is: " + calculatedNum + "<br>");

// Q3
calculatedNum = (2 + 2) * (4 + 2);
document.write("The value is: " + calculatedNum + "<br>");

// Q4
calculatedNum = ((2 + 2) * 4) + 2;
document.write("The Value is: " + calculatedNum + "<br>");

// Q5
var c7Question5 = (2 + 2) * (4 + 10);
document.write("Q5: " + c7Question5 + "<br>");

// Q6
var c7Question6 = 2 + (2 * 4) + 10;
document.write("Q6: " + c7Question6 + "<br>");

var c7Question7 = 4 / (2 * 4);
document.write("Q7: " + c7Question7 + "<br>");


// Chapter 8

// Q1

var c8Question1 = '"2" + "2"';
document.write("Q1: " + c8Question1 + "<br>");

// Q2
var c8Question2 = '("Hello," + "Dolly")';
document.write("Q2: " + c8Question2 + "<br>");

// Q3
var c8Question3 = alert('"33" + 3');


// Q4
var c8Question4a = "Pakistan ";
var c8Question4b = "Zindabad ";
alert(c8Question4a + c8Question4b);

// Q5
var c8Question5 = "Th prime number is: " + "10";
document.write("Q5: " + c8Question5 + "<br>");

// Q6
var c8Question6a = "Khawaja ";
var c8Question6b = "Junaid";
var c8Question6c = c8Question6a + c8Question6b;
document.write(c8Question6c + "<br>");


// Chapter 9

// Q1
var firstName = prompt("Enter first name");

// Q2
var china = "China";
var country = prompt("Country", china);

// Q3
var yourName = prompt("Enter Your Name");

// Q4
var c9Question4a = "Hello";
var c9Question4b = "User";
var c9Question4c = prompt(c9Question4a, c9Question4b);

// Q5
var c9Question5 = prompt("Enter your message", Hello);
alert(c9Question5);

// Chapter 10

// Q1
var city = "Karachi";
if (city = "Karachi") {
     console.log("The City OF Lights");
    }

// Q2
var c10Question2a = 10;
var c10Question2b = 10;
if (c10Question2a === c10Question2b) {
    var c10Question2c = prompt("Enter the value for the z");
}

// Q3
var zipCode = +prompt("Write zip code");
if (zipCode === 10010) {
    alert("Karachi")
}
else {
    alert("Please write correct city");
}

// Q4
var c10Question4a = +prompt("Enter the value between 1 to 10");
if (c10Question4a === 10) {
    c10Question4a = 1;
    console.log(c10Question4a);
}


// Chapter 11

// Q1
var number1 = 10;
var number2 = 11;
if (number1 != number2) {
    console.log(number1);
}
// Q2
var number3 = 12;
if (number3 >= 12) {
    number3 = 11;
}

// Q3
var number4 = 9;
if (number4 != 10) {
    number4 = 11;
}

// Q4
var number5 = 15;
if (number5 != 12) {
    alert("Congratulations!");
}

// Q5
var c11Question5 = prompt("Enter your first name");
if (c11Question5 != "Clark") {
    alert("No Match!");
}