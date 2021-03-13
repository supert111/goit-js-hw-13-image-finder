import galleryTemplate from '../templates/gallery-template.hbs';
import cardTemplate from '../templates/card-template.hbs';
import setting from '../js/settings/index';
var debounce = require('lodash.debounce');

const { BASE_URL, API_KEY } = setting;
const pageNumber = 1;

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;

//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
const searchKeyWord = inputName.value;
console.log(searchKeyWord);
    console.dir(inputName);
},500)) 
// const search


async function fetchImage (searchKey) {
    const searchResult = await fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`);
    const result = await searchResult.json();
    return result;
}
 console.log(fetchImage('yellow flowers'));
//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=номер_страницы&per_page=12&key=твой_ключ
// key: 20667930-64a6ab52d11330f7fc72003b0