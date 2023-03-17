
///////////////// Question 1 //////////////////////


var city = prompt("Enter City");


if(city === "karachi")
{
document.write("Welcome to city of lights!"+"<br>");
}





///////////////// Question 2 //////////////////////


var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir."+"<br>");
}
 else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am."+"<br>");
  } else {
    document.write("Invalid input. Please enter either 'male' or 'female'."+"<br>");
  }





///////////////// Question 3 //////////////////////

var clr = prompt("Enter Road Traffic Signal Color : ")
document.write("<span>Color</span>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"<span>Message</span>" +"<br>");


if (clr === "red") {
   document.write(" red" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Must Stop."+"<br>");
  } else if (clr === "yellow") {
    document.write("yellow"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"Ready to move."+"<br>");
  } else if (clr === "green") {
    document.write("green"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"Move now."+"<br>");
  } else {
    document.write("Invalid input."+"<br>");
  }
 




  /////////////////// QUESTION 4 /////////////////////
  var remFuel = prompt("Enter remaining fuel in car in litres : ");
  if ( remFuel <= 0.25 )
  {
    document.write("Please refill the fuel in car"+"<br>");

  }
  else {
    document.write("You have enough fuel in car"+"<br>");
  }













  /////////////////// QUESTION 5 /////////////////////








  //a
  var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}



// f.
 if("car" < "cat"){
alert("car is smaller than cat");
}



document.write("<h1>OUTPUTS</h1>"+"<br>");
document.write("a.given condition for variable a is true\n"+"<br>" );
document.write("b.Will not work" +"<br>");
document.write("c.condition 2 is true\n" + "condition 4 is true\n"+"<br>");
document.write("d.The cost equals\n"+"<br>" );
document.write("e.True\n"+"<br>" );
document.write("f.car is smaller than cat\n"+"<br>" );



  /////////////////// QUESTION 6 /////////////////////

  var marks1 = parseFloat(prompt("Enter the marks obtained in subject 1:"));
  var marks2 = parseFloat(prompt("Enter the marks obtained in subject 2:"));
  var marks3 = parseFloat(prompt("Enter the marks obtained in subject 3:"));
  var totalMarks = parseFloat(prompt("Enter the total marks:"));


  var obtainedMarks = marks1 + marks2 + marks3;
  var percentage = (obtainedMarks / totalMarks) * 100;
  document.write("<h1>Marks Sheet</h1>"+"<br>");
  if (percentage >= 80)
  {
    document.write("Total marks : " + totalMarks+"<br>");
    document.write("Marks obtained : " + obtainedMarks+"<br>");
    document.write("Percentage : " + percentage+"%"+"<br>");
    document.write("Grade : " + "A-one"+"<br>"); 
    document.write("Remarks : " + "Excellent"+"<br>"); 
  }
else if (percentage >= 70)
{
  document.write("Total marks : " + totalMarks+"<br>");
    document.write("Marks obtained : " + obtainedMarks+"<br>");
    document.write("Percentage : " + percentage+"%"+"<br>");
    document.write("Grade : " + "A"+"<br>"); 
    document.write("Remarks : " + "Good"+"<br>"); 
}
else if (percentage >= 60)
{
  document.write("Total marks : " + totalMarks+"<br>");
    document.write("Marks obtained : " + obtainedMarks+"<br>");
    document.write("Percentage : " + percentage+"%"+"<br>");
    document.write("Grade : " + "B"+"<br>"); 
    document.write("Remarks : " + "You need to improve"+"<br>"); 
}
else if (percentage < 60)
{
  document.write("Total marks : " + totalMarks+"<br>");
    document.write("Marks obtained : " + obtainedMarks+"<br>");
    document.write("Percentage : " + percentage+"%"+"<br>");
    document.write("Grade : " + "Fail"+"<br>"); 
    document.write("Remarks : " + "Sorry"+"<br>"); 
}
else
{
  document.write("Enter values Correctly"+"<br>"); 
}
















  
  /////////////////// QUESTION 7 /////////////////////

  var secretNumber = Math.floor(Math.random() * 10) + 1;
  var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
  if (guess === secretNumber) {
    document.write("Bingo! Correct answer."+"<br>");
  } else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
    document.write("Close enough to the correct answer."+"<br>");
  } else {
    document.write("Sorry, wrong guess. The secret number was " + secretNumber + "."+"<br>");
  }

 
  
    /////////////////// QUESTION 8 /////////////////////
    const number = parseInt(prompt("Enter a number:"));

    if (number % 3 === 0) {
        
        document.write(number + " is divisible by 3."+"<br>");
      } else {
      
        document.write(number + " is not divisible by 3."+"<br>");
      }


//     /////////////////// QUESTION 9 /////////////////////
    const num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {

    document.write(num + " is an even number."+"<br>");
} else {

    document.write(num + " is an odd number."+"<br>");
}


/////////////////// QUESTION 10 ///////////////////// 

const temperature = parseInt(prompt("Enter the temperature in Celsius:"));


if (temperature > 40) {
  document.write("It is too hot outside."+"<br>");
} else if (temperature > 30) {
  document.write("The Weather today is Normal."+"<br>");
} else if (temperature > 20) {
  document.write("Today’s Weather is cool."+"<br>");
} else if (temperature > 10) {
  document.write("OMG! Today’s weather is so Cool."+"<br>");
} else {
  document.write("The temperature is below 10 degrees Celsius."+"<br>");
}


/////////////////// QUESTION 11 ///////////////////// 
  

var num1 = parseInt(prompt("Enter First Number"));
var num2 = parseInt(prompt("Enter Second Number"));
var operator = prompt("Enter Operator  (+, -, *, /, %) :");
if (operator === "+")
{
document.write(num1 + num2 +"<br>");
}
else if (operator === "*")
{
  document.write(num1 * num2 +"<br>");
  }
else if (operator === "-")
{
  document.write(num1 - num2 +"<br>");
  }
else if (operator === "/")
{
  document.write(num1 / num2 +"<br>");
  }
else if (operator === "%")
{
  document.write(num1 % num2 +"<br>");
  }
else 
{
  document.write( "Enter Values Correctly" +"<br>");
  }