
//1.WRITE A FUNCTION WHICH ACCEPTS THREE NO AS ARGUMENTS AND RETURNS ADDITION OF THREE NUMBERS

function add(num1, num2, num3) {
    
    sum = num1 + num2 + num3;
    return sum;
}

let result1 = add(98, 76, 34);
console.log(result1);

//2.WRITE A FUNCTION WHICH TAKES TIME AND DISTANCE AS INPUT AND RETURNS SPEED.

function speed(dist, time) {

    var resultspeed = dist/time;
    return resultspeed;
}
var result2 = speed(70, 4);
    console.log('speed is '+result2);


//3.WRITE A FUNCTION WHICH ACCEPTS RADIUS AS INPUT AND RETURNS AREA OF A CIRCLE.

function area(readius) {

    var area = readius*readius*3.14
    return area;
}
var area1 = area(7);
    console.log('area is '+area1);



//4.WRITE A FUNCTION WHICH TAKES AN INTEGER AS INPUT AND RETURNS FACTORIAL OF THAT NUMBER.

function factorial(num) {

    var factor= 1;
    if(num==0 || num==1) {
        return factor;
    }
    else
        for(var i=num; i>=1; i--) {
            factor = factor*i;
        }
        return factor;
}
var factorial1 = factorial(4);
console.log('factorial is '+factorial1);


//5.A FUNCTION WHICH TAKES AN INTEGER AS INPUT AND RETURNS TRUE IF EVEN FALSE IF IT'S NOT.

function even(num) {

    if(num%2==0)
        return true;
    else
        return false;
}
console.log(even(66));

//6.A FANCTION WHICH TAKES AN INTEGER AS INPUT AND RETURNS TRUE IF odd FALSE IF IT'S NOT.

function odd(num) {

    if(num%2==1)
        return true;
    else
        return false;
}
console.log(odd(67));


//self******* to print multiple of 3 from 300 to 3 downwards.**********************

function multi3() {

    var from = 300;
    var to = 3;
    var ans = '';
    for(var i=from; i>=to; i--) {
        if(i%3==0)
            ans = ans + i + '\n'
        //return ans;   
    }
    return ans;
}
console.log(multi3());


//7.AN INTEGRT AS INPUT AND RETURNS TRUE IF IT IS PRIME FALSE iF IT US NOT

function isPrime(num) {

    var isPrime = true;
    var i;
    if(num==1)
        isPrime = false;
    if(num==i)
        isPrime = false;
        for(i=2; i<num; i++) {
            if(num%i==0)
                isPrime = false;
                break;
                
        }
        return isPrime;
        
}
console.log(isPrime(12));

//9. AN INTEGER AS INPUT AND RETURNS FIBONACCI SEARISE

function fibonacci(num) {

var i = 0;
var j = 1;
var k;
var to = num;
while(i<to){
    console.log(i + ' ');
    k= i+j;
    i = j;
    j = k;
   }
   return fibonacci;
}
console.log(fibonacci(8));

// 10. AN INTEGER AS INPUT AND RETURNS TRUE IF IT IS DIVILSINLE NY 6 FALSE IF IT IS NOT.

function div6(num) {

    if(num%6==0)
        return true;
    else
        return false;
    
}
console.log(div6(66));


// 11. FUNCTION ACCEPTS THE TIME IN SECINDS AND RETURNS THE TIME IN HOURS.

function tHours(seconds) {
    var hours;
    var min;
    var sec;
    hours = Math.floor(seconds/3600);
    min = Math.floor((seconds-(hours*3600))/60);
    seconds = seconds-(hours*3600)-(min*60);
}

// 12.
// 13.write a function that accepts an integer and returns the digits repeaed twice.

function repetTwice(num) {
    var final = num+ ''+num;
    //console.log(num+''+num);
    return final;
}
console.log(repetTwice(1234));


// 14. A function that counts the numbers of Digits in an Integer.
function countNum(num) {
    var count = 0;
    if(num>=1)
        ++count;
    while(num/10>=1) {
        num/=10;
        ++count;
    }
    return count;
}


console.log(countNum(456711));


// 15. Give a four digit numbr as input, find the value of its hundredth digit. 

function possHUndred(num) {

    for(var i=0; i<2; i++) {
        result = num%10;
        Number= parseInt(result)
    }
    return num%10;
}

console.log(possHUndred(1234567));

// 16. calculate RequiredRunRate: A team is 
//chasing the targrt set in a one-day match.

// 17. MakeDecimal: given 3 digits a, b, and c 
//as input, return a double of the forn a.bc.
function makeDecimal(n1,n2,n3) {
    let result = n1;
    result = n1 + (n2*.1) + (n3*.01);
    return Number(result).toFixed(2);
}
console.log(makeDecimal(7,8,6));
console.log(makeDecimal(6,5,2));
console.log(makeDecimal(9,0,6));


//18.Sum2Digit: Given a 2 Digit numnber as input, comput the sum of  digits.

function sumTwoDigit(num){
    var sum = 0;
    while(num !=0){
        sum += num%10
        num = parseInt(num/10);
        
    }
    return sum;
}
console.log(sumTwoDigit(56));
console.log(sumTwoDigit(66));

//19.AndBooleans:Give three booleans as input, return the AND of the all three booleans.

function andBooiean(bool1, bool2, bool3) {
    if(bool1 && bool2 && bool3)
        return true;
    else
        return false;
}
console.log(andBooiean(true, false, true));
console.log(andBooiean(true, true, true));

//20.largerThanOne number

function largerThanOne(num1, num2, num3) {
    var result = num1>num2? true: num1>num3? true: false;
    return result;
}
console.log(largerThanOne(76, 54, 23));
console.log(largerThanOne(76, 94, 100));


//22. SumOf4Digits: Give a number as input, comput the sum of 4 digit number.
function SumOf4Digits(num){
var sum = 0;
    while(num !=0){
        sum += num%10
        num = parseInt(num/10);
        
    }
    return sum;
}
console.log(SumOf4Digits(5656));
console.log(SumOf4Digits(6612));

//23. Area of square

function areaOfSquare(x1,y1,x2,y2){
    var width = (x2-x1);
    var height = (y2-y1);
    var area = width * height;
    return area;
} 
console.log(areaofSquare(3,6,5,8));


//25.multiple37

function multipleThreeSeven(num){
    var result;
    if(num%3==0 || num%7==0)
        console.log(true);
    else 
        console.log(false);
        return result;
}
console.log(multipleThreeSeven(43));


// 26.largest of three

function largestOfThree(p,q,r){
    if(p>=q && p>=r){
        return p;
    }
    else if(q>=p && q>=r){
        return q;
    }
    else 
        return r;
          
}
console.log(largestOfThree(5,7,3));
console.log(largestOfThree(9,7,3));

//27.DaysInMonth

function DaysInMonth(month,year){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            return noOfDay = 31;
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            return noOfDay = 30;
            break;
        case 2:
            if((year%4==0) && (year%100 !=0) || (year%400)==0)
                return noOfDay = 29;
            else
                return noOfDay = 28;
                break;

        default:
            return "invalid month";
            break;

    }
}
console.log(DaysInMonth(3,2020));

// 29. isDigit

function isDigit(str) {
    var ascii = str.charCodeAt(0);
    if((ascii>=48) && (ascii<=57))
        return true;
    else
        return false;
}
console.log(isDigit(8));        // not working


// 31. same last digit

function checkLastDigit(num1, num2) {
    var n1 = num1%10;
    var n2 = num2%10;
    if(n1==n2)
        return true;
    else
        return false;
}

console.log(checkLastDigit(34, 234));
console.log(checkLastDigit(54, 76));

//32.checkSum

function checkSum(num1, num2, num3) {
    var i = num1 + num2;
    var j = num1 + num3;
    var k = num2 + num3;
    if((num3==i) || (num2==j) ||(num1==k))
        return true;
    else
        return false;
}
console.log(checkSum(4,5,9));
console.log(checkSum(3,5,9));

// 35. sumLast3

function sumLastThree(num) {
    var sum = 0;
    var i = 0;
    while(i<3){
        sum += num %10;
        num = parseInt(num/10);
        i++;
    }
    return sum;
}
console.log(sumLastThree(547675678));
console.log(sumLastThree(764389725));


*/
//37. reverse the number

function reverseThree(num) {
    var reverse = 0;
    while(num !=0){
        reverse = (reverse*10) + (num%10);
        num = num/10;
    }
    return reverse;
}
console.log(reverseThree(234));

function reverseThree(num){
    let arr = num.tostring().split("");
    let reversed = arr.reverse.join("");
    return reversed;
}
console.log(reverseThree(123));                 //not working

// 43. A method to generate prime number by calling isPrime function

function primNoBtween(from, to) {
    //var from = 1;
    //var to = 100;
    for(var i=from; i<=to; i++) {
        for(var j=2; j<parseInt(i/2); j++) {
            if(i%j==0)
            break;
        }
        if(j==parseInt(i/2))
            console.log(i);
    }
}
