const log = (content) => console.log(content);

const article = document.querySelector('article');
const section = document.createElement('section');
const para = document.createElement('p');
const ins = document.createElement('p');
const h2 = document.createElement('h2');
const hr = document.createElement('hr');
const div = document.createElement('div');

const html = (number,name,instructions,code) => {
    article.appendChild(section);
    section.appendChild(para);
    para.appendChild(h2);
    h2.textContent = `Exercise ${number} - ${name}`;
    section.appendChild(hr);
    section.appendChild(ins);
    ins.textContent = instructions;
    section.appendChild(div);
    div.classList.add('code');
    div.textContent = code;
}


const ex = (number,name) => {
    log('');
    log(`Exercise ${number}`);
    log(name);
    log('');
};



html(1, 'Hello World', 'Write a function that returns "Hello, World!', "let helloWorld = () => 'Hello, World!';" )

ex(1, 'Hello World');

let helloWorld = () => 'Hello, World!';

log(helloWorld());

