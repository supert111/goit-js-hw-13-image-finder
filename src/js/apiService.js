import galleryTemplate from '../templates/gallery-template.hbs';

var debounce = require('lodash.debounce');
const key = '20667930-64a6ab52d11330f7fc72003b0';

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;

//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
const searchKeyWord = inputName.value;
console.log(searchKeyWord);
    console.dir(inputName);
},500)) 
// const search


async function fetch (searchKey) {
    const searchResult = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=номер_страницы&per_page=12&key=${key}`)
}

//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=номер_страницы&per_page=12&key=твой_ключ
// key: 20667930-64a6ab52d11330f7fc72003b0