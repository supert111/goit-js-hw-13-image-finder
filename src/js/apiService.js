import galleryTemplate from '../templates/gallery-template.hbs';
import setting from '../js/settings/index';
var debounce = require('lodash.debounce');

const { BASE_URL, API_KEY } = setting;
let pageNumber = 1;

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;
const blockForMarkupRef = document.querySelector('.wrapper-tamplate'); 
const buttonMoreImagesRef = document.querySelector('.button-more-images');
buttonMoreImagesRef.addEventListener('click', fetchImage);

//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
const searchKeyWord = inputName.value;

fetchImage (searchKeyWord)
.then(renderImages)
.catch(error => console.log(error));

console.log(searchKeyWord);
},1000)); 



async function fetchImage (searchKey) {
    const searchResult = await fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`);
    const result = await searchResult.json();
    pageNumber += 1;
    searchKey = searchKey;
     console.log( pageNumber);
    return result ;
}
function renderImages(images) {
    const markup = galleryTemplate (images);
    blockForMarkupRef.insertAdjacentHTML('afterbegin', markup);
}


//    function  goToNextPage()  {
//         if(pageNumber <= 0) {
//             return;
//         }
//          pageNumber += 1;
//           console.log('function', pageNumber);
//        return;
//     }