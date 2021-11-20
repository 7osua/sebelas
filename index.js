const explore01Btn = document.querySelector('.explore01');
const explore02Btn = document.querySelector('.explore02');
const pop01 = document.querySelector('.pop01');
const pop02 = document.querySelector('.pop02');
const backdrop = document.querySelector('.backdrop');

const show01 = () => {
    backdrop.style.display = 'block';
    pop01.style.display = 'block';
};

const show02 = () => {
    backdrop.style.display = 'block';
    pop02.style.display = 'block';
};

const hide = () => {
    backdrop.style.display = 'none';
    pop01.style.display = 'none';
    pop02.style.display = 'none';
};

explore01Btn.addEventListener('click', show01);
explore02Btn.addEventListener('click', show02);
backdrop.addEventListener('click', hide);
