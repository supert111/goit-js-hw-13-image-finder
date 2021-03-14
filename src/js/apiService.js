import galleryTemplate from '../templates/gallery-template.hbs';
import setting from '../js/settings/index';
var debounce = require('lodash.debounce');

const { BASE_URL, API_KEY } = setting;
let pageNumber = 1;

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;
const blockForMarkupRef = document.querySelector('.wrapper-tamplate'); 
const buttonMoreImagesRef = document.querySelector('.button-more-images');
buttonMoreImagesRef.addEventListener('click', goToNextPage(pageNumber));

//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
const searchKeyWord = inputName.value;
fetchImage (searchKeyWord)
.then(renderImages)
.catch(error => console.log(error));

console.log(searchKeyWord);
    console.dir(inputName);
},500)); 



async function fetchImage (searchKey) {
    const searchResult = await fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`);
    const result = await searchResult.json();
    return result;
}
function renderImages(images) {
    const markup = galleryTemplate (images);
    blockForMarkupRef.insertAdjacentHTML('afterbegin', markup);
}
 //console.log(fetchImage('yellow flowers'));


   function  goToNextPage()  {
        // if(pageNumber <= 0) {
        //     return;
        // }
         pageNumber += 1;
        console.log(pageNumber)
    }