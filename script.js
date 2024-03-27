//Chapter 2 

//Question # 1:
let username;
//
//Question # 2:
let myName = "Shayan Babar";
//
//Question # 3:
let message;
message = "Hello world";
alert(message);
//
//Question # 4:
let myname = "Shayan Babar";
let Age = 18;
let Qualification = "Intermediate in CS";
let Hobbies = "Cricket and Coding";

//display in the alert box
let Mybiodata = "(My Bio Data)";
Mybiodata += "Name: " + myname + "\n";
Mybiodata += "Age: " + Age + "\n";
Mybiodata += "Qualification: " + Qualification + "\n";
Mybiodata += "Hobbies: " + Hobbies + "\n";
alert(Mybiodata);
//

//Question # 5:
alert("pizza\npizz\npiz\npi\np");
//

//Question # 6:
let email = "shayanbabar128@gmail.com";
let emailaddress = "My email address is: '" + email + "'";
alert(emailaddress);
//

//Question # 7:
let book = "A smarter way to learn JavaScript";

//display in the alert box
alert("I am currently reading the book: '" + book + "'");
//

//Question # 8:
document.write("Yah! I can write HTML content through JavaScript<br>")
//

//Question # 9:
let specialstring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// Display the string in an alert box
alert(specialstring);

// Display the string in the browser
document.write(specialstring);
//

//Chapter 4

//Question # 1
let variable1, variable2, variable3;
//

//Question # 2
//legal variable
/*let shayan;
let shayan17;
let $hayan;
let _shayan;
let sha17yan;
//

//illegal variable
let sha yan
let 17shayan
let "shayan"
let @shayan
let (shayan)*/
//

//Question # 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p></p>Variable names can only contain ,numbers,$ and _ . For example : $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter,$ or_ . For example : $name, _name or name</p>");
document.write("<p></p>Variable names are case-sensitive</p>");
document.write("<p></p>Variable names should not be JavaScript keywords</p>");
//

//Chapter 5

//Question # 1:
let num1 = 7
let num2 = 4
let plus = num1 + num2
document.write('Sum of 4 and 7 is 11<br>');
//

//Question # 2:
let subtraction = num1 - num2
document.write('Minus of  7 and 4 is 3<r>');

let multiplication = num1 * num2
document.write('Multiplication of  7 and 4 is 28<br>');

let division = num1 / num2
document.write('Division of 7 and 4 is 1.75<br>');

let modulus = num1 % num2
document.write('Modulus of 7 and 4 is 0<br>');
//

//Question # 4:
let ticket = 600;
ticket *= 5 ;
document.write("Total cost to buy 5 tickets to a movie is " + ticket + "PKR" + "<br>"); 
//

//Question # 5:
let table = 4;

for (let i=1 ; i<=10 ; i++) {
    document.write(table + " " + "X" + " " + i + " " + "=" + " " + table*i + "<br>");
}
//
