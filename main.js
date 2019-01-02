const log = (content) => console.log(content);
const logIns = (content) => console.log(`%c ${content} `, 'background: #222; color: greenyellow');

const html = (number,name,instructions,code) => {
    const article = document.querySelector('article');
    const section = document.createElement('section');
    const para = document.createElement('p');
    const ins = document.createElement('p');
    const h2 = document.createElement('h2');
    const hr = document.createElement('hr');
    const xmp = document.createElement('xmp');

    article.appendChild(section);
    section.appendChild(para);
    para.appendChild(h2);
    h2.textContent = `Exercise ${number} - ${name}`;
    section.appendChild(hr);
    section.appendChild(ins);
    ins.textContent = instructions;
    section.appendChild(xmp);
    xmp.classList.add('code');
    xmp.innerHTML = code;
}

const ex = (number,name) => {
    log('');
    logIns(`Exercise ${number}`);
    logIns(name);
    log('');
};

//Exercise 1

ex(1, 'Hello World');

let helloWorld = () => 'Hello, World!';

log(helloWorld());

html(1, 'Hello World', 'Write a function that returns "Hello, World!.', "let helloWorld = () => 'Hello, World!';" );

//Exercise 2

ex(2, 'Repeat a String');

let repeatString = (string, times) => {
    let str = '';
    for(i = 0; i < times; i ++){
        str += string;
    } if ( times < 0){
        return 'ERROR'
    } else {
    return str;
    }
};

log(repeatString('hey',3));
log(repeatString('hey',10));
log(repeatString('hey',1));
log(repeatString('hey',0));
log(repeatString('hey',-1));

html(2, 'Repeat a String', 'Write a function that simply repeats the string a given number of times.', `let repeatString = (string, times) => {\n let str = '';\nfor(i = 0; i < times; i ++){\nstr += string;\n}\nif(times < 0){\nreturn 'ERROR'\n} else{\nreturn str;\n}\n};`)

//Exercise 3

ex(3, 'Reverse a String')

let reverseString = (string) => {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
};

log(reverseString('hello'));
log(reverseString('hello there'));
log(reverseString('123! abc!'));

html(3, "Reverse a string", "Pretty simple, write a function called reverseString that returns it's input, reversed!", "let reverseString = (string) => {\n let splitString = string.split('');\n let reverseArray = splitString.reverse();\n let joinArray = reverseArray.join('');\n return joinArray;\n };")

//Exercise 4 

ex(4, 'Remove from Array')

let removeFromArray = (...items) => {
    const array = items[0];
    return array.filter(val => !items.includes(val));
};

log(removeFromArray([1, 2, 3, 4], 3));
log(removeFromArray([1, 2, 3, 4], 3,2));
log(removeFromArray([1, 2, 3, 4], 7,'tacos'));
log(removeFromArray([1, 2, 3, 4], 1,2,3,4));
log(removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3));

html(4, "Remove From Array", "Implement a function that takes an array and some other arguments then removes the other arguments from that array.", "let removeFromArray = (...items) => {\n const array = items[0];\n return array.filter(val => !items.includes(val)); \n};")


//Exercise 5

ex(5, 'Sum All');

let sumAll = (a,b) => {
    if( a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    } else if(a > b){
        let temp = a;
        a = b;
        b = temp;
    };
    let sum = 0;
    for(i = a; i <= b; i++){
        sum += i;
    };
    return sum;
};

log(sumAll(1, 4));
log(sumAll(1, 4000));
log(sumAll(123, 1));
log(sumAll(-10, 4));
log(sumAll(10, '90'));
log(sumAll(10, [90,1]));

html(5, "Sum All", "Implement a function that takes 2 integers and returns the sum of every number between(and including) them.", "let sumAll = (a,b) => { \nif( a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){   \nreturn 'ERROR'; \n} else if(a > b){       \nlet temp = a;     \na = b;        \nb = temp; \n};    \nlet sum = 0;  \nfor(i = a; i <= b; i++){      \nsum += i; \n};    \nreturn sum;\n};");

//Exercise 6 

ex(6, 'Leap Years');

let leapYears = (year) => (year % 4 == 0 && !(year % 100 == 0 && !(year % 400 == 0)));

log(leapYears(1996));
log(leapYears(1997));
log(leapYears(34992));
log(leapYears(1900));
log(leapYears(1600));
log(leapYears(700));

html(6, "Leap Years", "Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules: \n There is a leap year every year whose number is perfectly divisible by four - except for years which are both divisible by 100 and not divisible by 400. The second part of the rule effects century years. For example; the century years 1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.", "let leapYears = (year) => (year % 4 == 0 && !(year % 100 == 0 && !(year % 400 == 0)));");

//Exercise 7

ex(7, 'Temperature Conversion');

let toC = (f) => (((f - 32) * (5/9))).toFixed(1);
let toF = (c) => (c * (9/5) + 32).toFixed(1);

let tempConversion = (from,to) => (to == 'toC') ? toC(from): toF(from);

log('F to C')
console.log(tempConversion(32,'toC'));
console.log(tempConversion(100,'toC'));
console.log(tempConversion(-100,'toC'));
log('');
log('C to F');
console.log(tempConversion(0,toF));
console.log(tempConversion(73.2,toF));
console.log(tempConversion(-10,toF));

html(7, "Temperature Conversion", "Write two functions that convert temperatures from Fahrenheit to Celsius (and the other way around).", "let toC = (f) => (((f - 32) * (5/9))).toFixed(1);\nlet toF = (c) => (c * (9/5) + 32).toFixed(1);\n \nlet tempConversion = (from,to) => (to == 'toC') ? toC(from): toF(from);");

//Exercise 8

ex(8,'Calculator')

let add = (a,b) => a+b;

let substract = (a,b) => a-b;

let sum = (array) => array.reduce((current,total) => total + current, 0);

let multiply = (array) => array.reduce((current,total) => total * current, 1);

let power = (a,b) => Math.pow(a,b);

let factorial = (n) => {
    if (n == 0) return 1;
    let total = 1;
    for(i = n; i > 0; i--){
        total *= i;
    };
    return total;
  };
  

log('Add');
log(add(0,0));
log(add(2,2));
log(add(2,6));
log('')
log('Substract');
log(substract(10,4));
log('')
log('Sum')
log(sum([]))
log(sum([7]))
log(sum([7,11]))
log(sum([1,3,5,7,9]))
log('')
log('Multiply')
log(multiply([2,4]))
log(multiply([2,4,6,8,10,12,14]))
log('')
log('Power')
log(power(4,3));
log('')
log('Factorial')
log(factorial(0));
log(factorial(1));
log(factorial(2));
log(factorial(5));
log(factorial(10));

html(8, "Calculator", "The goal for this exercise is to create a calculator that does the following: \n add, subtract, get the sum, multiply, get the power, and find the factorial", "let add = (a,b) => a+b;\n \nlet substract = (a,b) => a-b;\n \nlet sum = (array) => array.reduce((current,total) => total + current, 0);\n \nlet multiply = (array) => array.reduce((current,total) => total * current, 1);\n \nlet power = (a,b) => Math.pow(a,b); \n\nlet factorial = (n) => {\nif (n == 0) return 1;\nlet total = 1;\nfor(i = n; i > 0; i--){\ntotal *= i;\n};\nreturn total;\n};")

//Exercise 9 

ex(9,'Palindromes');

let isPalindrome = (string) => {
    let reverseString = (string) => {
        let splitString = string.split('');
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join('');
        return joinArray;
    };

    let onlyLetters = (string) => string.replace(/[^a-zA-Z]+/g, '');
    let originalString = (onlyLetters(string)).toLowerCase();
    let reversedString = onlyLetters(reverseString(string)).toLowerCase();
    if ( originalString == reversedString){
        return true;
    } else {
        return false;
    }
};

log(isPalindrome('racecar'));
log(isPalindrome('Racecar!'));
log(isPalindrome('A car, a man, a maraca.'));
log(isPalindrome('Animal loots foliated detail of stool lamina.'));
log(isPalindrome('ZZZZ car, a man, a maraca.'));

html(9, "Palindromes", "Write a function that determines whether or not a given string is a palindrome.\nA palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks", "let isPalindrome = (string) => {\nlet originalString = string;\nlet reversedString = reverseString(string);\nlet onlyLetters = (string) => string.replace(/[^a-zA-Z]+/g, '');\nlet originalLetters = (onlyLetters(originalString)).toLowerCase();\nlet reversedLetters = onlyLetters(reversedString).toLowerCase();\nif ( originalLetters == reversedLetters){\nreturn true;\n} else {\nreturn false;\n};\n};")

//exercise 10

ex(10, 'Snake Case');

let snakeCase = (string) => {
  string = string.replace(/\.\./g, " ");

  if (string.indexOf(" ") < 0) {
    string = string.replace(/([A-Z])/g, " $1");
  }

  return string
                .trim()
                 .toLowerCase()
                 .replace(/[,\?\.]/g, "")
                 .replace(/\-/g, " ")
                 .split(" ")
                 .join("_");
};

log(snakeCase('hello world'));
log(snakeCase('Hello, World???'));
log(snakeCase('This is the song that never ends....'));
log(snakeCase('snakeCase'));
log(snakeCase('snake-case'));
log(snakeCase('SnAkE..CaSe..Is..AwEsOmE'));

html(10, 'Snake Case', `Convert phrases and words into snake case Snake case (or snake_case) is the practice of writing compound words or phrases in which the elements are separated with one underscore character (_) and no spaces, with each element's initial letter usually lowercased as in "foo_bar"`, `let snakeCase = (string) => {\nstring = string.replace(/\.\./g, " ");\n\nif (string.indexOf(" ") < 0) {\nstring = string.replace(/([A-Z])/g, " $1");\n};\n\nreturn string\n.trim()\n.toLowerCase()\n.replace(/[,\?\.]/g, "")\n.replace(/\-/g, " ")\n.split(" ")\n.join("_");\n};`);

//Exercise 11

ex(11, 'Caesar Cipher');

const caesar = function(string, shift) {
    return string
      .split("")
      .map(char => shiftChar(char, shift))
      .join("");
  };
  
  const codeSet = code => (code < 97 ? 65 : 97);
  
  const mod = (n, m) => (n % m + m) % m;
  
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  };
  

console.log(caesar('a',1))
console.log(caesar('Aaa',1))
console.log(caesar('Hello, World!',5))
console.log(caesar('Mjqqt, Btwqi!',-5))
console.log(caesar('Hello, World!',75))
console.log(caesar('Hello, World!',-29))

html(11, 'Caesar Cipher', `Exercise XX - caesar cipher \nImplement the legendary caesar cipher:\nIn cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.`, `const caesar = function(string, shift) {
    return string
                 .split("")
                 .map(char => shiftChar(char, shift))
                 .join("");
  };
  
  const codeSet = code => (code < 97 ? 65 : 97);
  
  const mod = (n, m) => (n % m + m) % m;
  
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  };`);

  //Exercise 12

  ex(12,'Fibonacci');

  let fibonacci = (pos) => {
      let position = Number(pos)
      if(pos < 0){
          return 'OOPS'
      } else {
        let init = [0,1]
        for(i = 2; i < 100; i++){
          init[i] = (init[i-2] + init[i-1]);
        };
        return init[position];
      };
  };

  
  console.log(fibonacci(4))
  console.log(fibonacci(6))
  console.log(fibonacci(10))
  console.log(fibonacci(15))
  console.log(fibonacci(-25))
  console.log(fibonacci('8'))

  html(12, 'Fibonacci', 'Create a function that returns a specific member of the fibonacci sequence: \n a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.', `let fibonacci = (pos) => {\nlet position = Number(pos)\nif(pos < 0){\nreturn 'OOPS'\n} else {\nlet init = [0,1]\nfor(i = 2; i < 100; i++){\ninit[i] = (init[i-2] + init[i-1]);\n};\nreturn init[position];\n};\n};`);




