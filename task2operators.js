// 1.Square of a number
var a =5;
let ans = a*a;
console.log(ans);

// 2.Swapping 2 numbers
var num1=9, num2=10;
let temp=num1;
num1 = num2;
num2 = temp;
console.log( "num1 = "+num1,"num2 = "+ num2); 


// 3.Addition of 3 numbers
const val1=10, val2=12, val3=13;
let sum = val1+val2+val3;
console.log(sum);

// 4.Celsius to Fahrenheit conversion
var Celsius = 23;
let Fahrenheit =(Celsius*1.8)+32;
console.log(Fahrenheit);

// 5.convert Meter to miles
let Meter = 100;
let miles = Meter*0.000621;
console.log(miles);

// 6.convert Pounds to kg
var pound = 2;
let kg = pound*0.45;
console.log(kg);

// 7.Calculate Batting Average
var Runs = 10000;
var matches = 178 , nout = 50;
let dismmisals = matches-nout;
let avg = Runs/dismmisals;
console.log(avg);

// 8.Calculate five test scores and print their average
var five_test_scores = [12,43,56,78,78];
let sum1 = five_test_scores.reduce((a,b) => a+b);
let avg1 = sum1/5;
console.log(avg1);

// 9.Power of any number x ^ y.
var x=4,y=4;
let ans1 = Math.pow(x,y);
console.log(ans1);

// 10.Calculate area of an equilateral triangle
let side = 2;
let area = (1.73*side*side)/4;
console.log(area);

// 11.Area Of Isosceles Triangle
let height=4, base=6;
let area1 = (base*height)/2;
console.log(area1);

//12.Volume Of Sphere
let r=5;
let Vol_sphere = (4/3)*(22/7)*r*r*r;
console.log(Vol_sphere);

// 13.Volume Of Prism
let B=5,H=6;
let Vol_Prism =B*H;
console.log(Vol_Prism);

// 14.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actual_cost =500;
let sold_cost = 450;
let Discount_cost = actual_cost-sold_cost;
console.log(Discount_cost);

// 15.Given their radius of a circle and find its diameter, circumference and area.
let radius=5;
let diameter= 2*radius;
let circumference = 2*(22/7)*radius;
let Area = (22/7)*radius*radius;
console.log(area,circumference,Area);

// 16.Given two numbers and perform all arithmetic operations.
let a2=6,a3=8;
let add=a2+a3, sub=a2-a3;
let mul=a2*a3,div=a2/a3;
console.log(add,sub,mul,div);

// 17.Display the asterisk pattern as shown below(No loop needed);
let asterisk="*****"
console.log(asterisk);
console.log(asterisk);
console.log(asterisk);
console.log(asterisk);
console.log(asterisk);
