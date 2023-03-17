

// ///////////////////////////// Question 1 ///////////////////////////



var character = prompt ("Enter any charachter");
if (character >=0 && character <= 9)
{
    document.write( "The character is a number" +"<br>" );
}
else if (character >= "A" && character <= "Z")
{
    document.write( "The character is UPPERCASE" +"<br>" );
}
else if (character >="a" && character <= "z")
{
    document.write( "The character is LOWERCASE" +"<br>" );
}
else
{
    document.write( "The input is not a number or a letter." +"<br>" )
}



// ///////////////////////////// Question 2 ///////////////////////////
var value1 =parseInt( prompt("Enter any number"));
var value2 =parseInt( prompt("Enter any number again"));
if(value1>value2)
{
    document.write(value1 + " is greater"+"<br>");

} else if(value1<value2)
{
    document.write(value2 + " is greater"+"<br>");
    
}
else if ( value1===value2)
{
    document.write("Both are equal"+"<br>");
}else{
    document.write("Try again"+"<br>");
}





// ///////////////////////////// Question 3 ///////////////////////////


var integer =parseInt( prompt("Enter number "));
if(integer>0)
{
    document.write(integer + " is positive"+"<br>");

} else if(integer<0)
{
    document.write(integer + " is negative"+"<br>");
    
}
else
{
    document.write("Number is zero"+"<br>");
}




// ///////////////////////////// Question 4 ///////////////////////////

var str = prompt("Enter any alphabet to check if its a vowel")
str = str.toLowerCase();
if( str == "a" ||  str == "e" ||  str == "i" ||  str == "o" ||  str == "u" )
{
    document.write( str +" True its a Vowel" +"<br>")
}
else{
    document.write( str + " False its not a Vowel"+"<br>") 
}





// ///////////////////////////// Question 5 ///////////////////////////

var correctPassword = "user123";
var userPassword = prompt("Enter your password:");

if(userPassword === "") {
    document.write("Please enter your password."+"<br>");
}
else if(userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password."+"<br>");
}
else {
    document.write("Incorrect password."+"<br>");
}




// ///////////////////////////// Question 6 ///////////////////////////

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

// ///////////////////////////// Question 7 ///////////////////////////

var time = prompt("Enter time in 24 hours clock format (e.g. 1900):");
if (time>=0000 && time<1200)
{
    document.write("Good Morning"+"<br>");
}
else if(time>=1200 && time<1700)
{
    document.write("Good Afternoon"+"<br>");
}
else if(time>=1700 && time<2100)
{
    document.write("Good Evening"+"<br>");

}
else if(time>=2100 && time<+2359)
{
    document.write("Good Night"+"<br>");
    
}