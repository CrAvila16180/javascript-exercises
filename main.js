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

