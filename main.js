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

html(1, 'Hello World', 'Write a function that returns "Hello, World!', "let helloWorld = () => 'Hello, World!';" );

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

html(2, 'Repeat a String', 'Write a function that simply repeats the string a given number of times', `let repeatString = (string, times) => {\n let str = '';\nfor(i = 0; i < times; i ++){\nstr += string;\n}\nif(times < 0){\nreturn 'ERROR'\n} else{\nreturn str;\n}\n};`)

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

html(4, "Remove From Array", "Implement a function that takes an array and some other arguments then removes the other arguments from that array", "let removeFromArray = (...items) => {\n const array = items[0];\n return array.filter(val => !items.includes(val)); \n};")