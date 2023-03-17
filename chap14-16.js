// ///////////////// QUESTION 1 ////////////////////
var studentNames = [];

// ///////////////// QUESTION 2 ////////////////////

// // JS object notation is not used to declare an empty array. It's used to declare an empty object

// ///////////////// QUESTION 3 ////////////////////
const ciTies = ['khi', 'isl', 'lhr'];


// ///////////////// QUESTION 4 ////////////////////
const noS = [1, 2, 3, 4, 5];


// ///////////////// QUESTION 5 ////////////////////
const bools = [true, false, true];

// ///////////////// QUESTION 6 ////////////////////
const mixedArray = ['khi',2, true];

// ///////////////// QUESTION 7 ////////////////////

const qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write("<h1>Qualifications</h1>");

for (let i = 0; i < qualifications.length; i++) {
    document.write((i+1) + ') ' + qualifications[i] + '<br>');
  }


  
// ///////////////// QUESTION 8 ////////////////////
var names =["Ali","Saad","Bilal"];
var numScored=[320,230,480]
for (var i = 0; i < names.length; i++) {
    var percentage = (numScored[i] / 500) * 100;
    document.write('Score of ' + names[i] + ' is ' + numScored[i] + '. Percentage is: ' + percentage.toFixed(0) + '%<br>');
  }



//   ///////////////// QUESTION 9 ////////////////////
  var colors = ["red", "green", "blue", "yellow", "orange"];
  document.write(colors + '<br>');
  //a
  var clr1= prompt("Enter color you want to add in the beginning");
  colors.unshift(clr1);
  document.write(colors + '<br>');
  //b
  var clr2= prompt("Enter color you want to add in the end");
  colors.push(clr2);
  document.write(colors + '<br>');
  //c
  colors.unshift("purple", "pink");
  document.write(colors + '<br>');
  //d
  colors.shift();
  document.write(colors + '<br>');
  //e
  colors.pop();
  document.write(colors + '<br>');
  //f
  var clr3 = prompt("Enter colour name");
  var index = prompt("Enter index number from 1-4");
  colors.splice(index,0,clr3);
  document.write(colors + '<br>');
  //g
  var clr4 = prompt("how many colors you want to delete");
  var index2 = prompt("Enter index number from 1-4");
  colors.splice(index2,clr4);
  document.write(colors + '<br>');



//   ///////////////// QUESTION 10 ////////////////////

var score = [320,230,480,120];
document.write("Scores of Students : " + score + '<br>');
score.sort();
document.write("Ordered Scores of Students : " + score + '<br>');


//   ///////////////// QUESTION 11 ////////////////////
var cities =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List : " + cities + '<br>');
var selectedCities = cities.slice(2, 4);
document.write("Selected Cities List : " + selectedCities + '<br>');




//   ///////////////// QUESTION 12 ////////////////////
var arr = ["This ", " is ", " my ", " cat "];
document.write("Array : "+ '<br>' + arr + '<br>');
var str = arr.join(' ');
document.write("String : "+ '<br>' + str + '<br>');



//   ///////////////// QUESTION 13 ////////////////////


var fifoarray = [" keyboard "," mouse "," printer "," monitor"];
document.write("Devices : "+ '<br>' + fifoarray + '<br>');
document.write("Out : "+ '<br>' + fifoarray[0] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[1] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[2] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[3] + '<br>');



//   ///////////////// QUESTION 14 ////////////////////

var fifoarray = [" keyboard "," mouse "," printer "," monitor"];
document.write("Devices : "+ '<br>' + fifoarray + '<br>');
document.write("Out : "+ '<br>' + fifoarray[3] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[2] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[1] + '<br>');
document.write("Out : "+ '<br>' + fifoarray[0] + '<br>');



//   ///////////////// QUESTION 15 ////////////////////
var products = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < products.length; i++) {
    document.write("<option>" + products[i] + "</option>");
}
document.write("</select>");
