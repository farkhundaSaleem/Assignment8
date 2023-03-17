
//////////////////////// QUESTION 1 //////////////////////////

var multiArray = [[]];


//////////////////////// QUESTION 2 //////////////////////////
const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];


  
//////////////////////// QUESTION 3 //////////////////////////
for( var i=1 ; i<=10 ; i++ )
{
    document.write( i +"<br>");
}


//////////////////////// QUESTION 4 //////////////////////////

const numB = parseInt(prompt("Enter the number for the multiplication table:"));
const length = parseInt(prompt("Enter the length of the multiplication table:"));
document.write( "<h1>" + "Multiplication Table of " + numB + "</h1>" +"<br>");
document.write( "<h1>" + "Length is  " + length + "</h1>" +"<br>");
for( var i=1 ; i<= length ; i++ )
{
  
    document.write( numB + " * " + i +"="+ (numB*i)+"<br>");
}

//////////////////////// QUESTION 5 //////////////////////////
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for (i=0;i<=fruits.length;i++)
 {
    document.write( fruits[i] +"<br>");
   
    
 }
 for (i=0;i<=fruits.length;i++)
 {
        document.write( "Element of index " + i + " is " + fruits[i] +"<br>");
    }




//////////////////////// QUESTION 6 //////////////////////////


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write( "<h4>Counting : </h4>" );
for (let i = 1; i <= 15; i++) {
   
    document.write(i + ", ");
  }

  document.write( "<br>");





  // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  document.write( "<h4>Reverse counting : </h4>" );
  for (let f = 10; f >= 1; f--) {
    document.write(f + ", ");
  }
  document.write("<br>");
  
  // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
  document.write( "<h4>Even : </h4>" );
  for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
  }
  document.write("<br>");
  
  // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  document.write( "<h4>Odd : </h4>" );
  for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
  }
  document.write("<br>");
  
  // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
  document.write( "<h4>Series : </h4>" )
  for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
  }

  document.write("<br>");



// //////////////////////// QUESTION 7 //////////////////////////

  var items = ["cake", "apple pie", "cookie", "chips", "patties"];
  var searchQuery = prompt("Welcome to our bakery .What do you want to order:");
  searchQuery = searchQuery.toLowerCase();

if (searchQuery==="cake" || searchQuery==="apple pie" || searchQuery==="cookie" || searchQuery==="chips" || searchQuery==="patties")
{
    for (i=0;i<=items.length;i++)
    {
        var currentItem = items[i].toLowerCase();
  
    document.write(searchQuery + " is found in the list at index " + i + " in our bakery."+"<br>");
break;
    }
}
else {
    document.write("We are sorry " + searchQuery + " is not found in our bakery"+"<br>");
}


// //////////////////////// QUESTION 8 //////////////////////////
const A = [24, 53, 78, 91, 12];

let largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("Array Items = [24, 53, 78, 91, 12]."+ "<br>");
document.write("The largest number in the array is: " + largest+ "<br>");

// //////////////////////// QUESTION 9 //////////////////////////



var Asmall = [24, 53, 78, 91, 12];


var smallestNumber = Asmall[0];


for (let i = 1; i < Asmall.length; i++) {

  if (Asmall[i] < smallestNumber) {
    smallestNumber = Asmall[i];
  }
}
document.write(" Array Items = [24, 53, 78, 91, 12]"+ "<br>"+ "<br>")
document.write("The smallest number in the array is: " + smallestNumber+ "<br>");



// //////////////////////// QUESTION 10 //////////////////////////



for (k=1;k<=100;k++)

if (k % 5 === 0)
{
    document.write(k+ "," );
}