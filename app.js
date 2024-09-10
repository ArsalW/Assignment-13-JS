    // Chapter 05 //

// 1.
// num1 = 3;
// num2 = 5; 
// sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// 2.
// num1 = 3;
// num2 = 5;
// subtraction = num1 - num2;
// multiplication = num1 * num2;
// division = num1 / num2;
// modulus = num1 % num2;

// document.write("Subtraction: " + subtraction + "<br>");
// document.write("Multiplication: " + multiplication + "<br>");
// document.write("Division: " + division + "<br>");
// document.write("Modulus: " + modulus + "<br>");

// 3.
// var variable;
// document.write("Value after variable declaration is: " + variable + "<br>");
// variable = 5;
// document.write("Initial value: " + variable + "<br>");
// variable++;
// document.write("Value after increment is: " + variable + "<br>");
// variable += 7;
// document.write("Value after addition is: " + variable + "<br>");
// variable--;
// document.write("Value after decrement is: " + variable + "<br>");
// document.write("The remainder is: " + (variable % 3) + "<br>");

// 4.
// ticketPrice = 600;
// totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets is: " + totalCost + "PKR");

// 5.
let number = 4; 
for(let i = 1; i <= 10; i++) 
{
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// 6.
// // Celsius to Fahrenheit
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F");

// // Fahrenheit to Celsius
// fahrenheit = 70;
// celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C");

// 7.
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("Total cost: " + totalCost);

// 8.
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Percentage: " + percentage + "%");

// 9.
// var USD = 10;
// var sar = 25;
// var pkr = (USD * 104.80) + (sar * 28);
// document.write("Total in PKR: " + pkr);

// 10. 
// var num = 5;
// var result = ((num + 5) * 10) / 2;
// document.write("The result is: " + result);

// 11.
// var currentYear = 2024;
// var birthYear = 1990;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("They are either " + age1 + " or " + age2 + " years old");

// 12. 
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference is " + circumference);
// var area = 3.142 * radius * radius;
// document.write("The area is " + area);

// 13
// var snack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var perDay = 3;
// var total = (maxAge - currentAge) * perDay;
// document.write("You will need " + total + " " + snack + "s to last you until the ripe old age of " + maxAge + ".");


        // Chapter 06-09 //

// 1.  
// var a = 10;  
// document.write("The value of a is : " + a);
// a = ++a
// document.write("Now the value of a is : " + a);
// a = a++
// document.write("Now the value of a is : " + a);
// a = --a
// document.write("Now the value of a is : " + a);
// a = a--
// document.write("Now the value of a is : " + a);

// 2. 
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a: " + a + ", b: " + b + ", result: " + result);

// 3. 
// var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "!");

// 5.
// var number = prompt("Enter a number:", 5);  
// number = number ? number : 5;
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// 6. 
// var subject1 = prompt("Enter first subject name:");
// var subject2 = prompt("Enter second subject name:");
// var subject3 = prompt("Enter third subject name:");
// var totalMarks = 100;

// var obtainedMarks1 = prompt("Enter marks obtained in " + subject1);
// var obtainedMarks2 = prompt("Enter marks obtained in " + subject2);
// var obtainedMarks3 = prompt("Enter marks obtained in " + subject3);

// var totalObtained = parseFloat(obtainedMarks1) + parseFloat(obtainedMarks2) + parseFloat(obtainedMarks3);
// var percentage = (totalObtained / (totalMarks * 3)) * 100;

// document.write("<table border='0'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage +"</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage + "</td></tr>");
// document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td><td>Percentage</td><td colspan='1'>" + percentage + "%</td></tr>");


        // Home Chapter 06-09 //

// Chapter 6 //

// 1. 
// var x = x + 1;
// x= x++;
// x= ++x;


//2. 
// var x = 100;
// x = x--
// x = --x

//3. 
// var x = 50;
// var y = x++;
// alert(y);


//4. 
// var y = 50; 
// var z = --y;
// alert(z)

//5. 
//  var newNum = num--;

//6. 
// var anotherVar = num++;

//7. 
// var number = 5;
//  ++number;
//  alert(number);


// Chapter 7 (Math Expression III) 

//1.
// var calculatedNum = 2 + (2 * 6); 


//2. 
// var calculatedNum = (2 + 2) * 6;  

//3. 
// var calculatedNum = (2 + 2) * (4 + 2); 

//4.
// var calculatedNum = ((2 + 2) * 4) + 2; 

//5.
// var cost = (2 + 2) * (4 + 10); 

//6. 
// var units = 2 + (2 * 4) + 10;

//7. 
// var pressure = 4 / (2 * 4);

// Chapter 8 (Concatenating Text Strings)

//1.
// var num = "2" + "2";


//2.
// var message = ("Hello," + "Dolly");  
// alert(message);

//3.
// alert("33" + 3)

// 4. 
// alert("Pakistan" + " Zindabad");


//5. 
// var result = "The number is " + 42; 

//6. 
// var firstVariable = "Hello, ";
// var secondVariable = "World!";
// var combinedVariable = firstVariable + secondVariable;
// alert(combinedVaribale);
