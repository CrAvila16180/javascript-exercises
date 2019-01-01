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

ex(2, 'repeatString');

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

html(2, 'repeatString', 'Write a function that simply repeats the string a given number of times', `let repeatString = (string, times) => {\n let str = '';\nfor(i = 0; i < times; i ++){\nstr += string;\n}\nif(times < 0){\nreturn 'ERROR'\n} else{\nreturn str;\n}\n};`)



