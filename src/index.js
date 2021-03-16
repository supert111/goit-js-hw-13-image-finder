import './styles.css';
import NewsApiService from './js/apiService';
var debounce = require('lodash.debounce');

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;
const buttonMoreImagesRef = document.querySelector('.button-more-images');
buttonMoreImagesRef.addEventListener('click', fetchArticles);

const newsApiService = new NewsApiService;

//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
    newsApiService.query = inputName.value;
        if (newsApiService.query === '') {
            return alert('Введи что-то нормальное');
          }
    newsApiService.resetPage();
    const searchSee = newsApiService.query;
    newsApiService.fetchArticles(searchSee);
    
        // fetchImage () {
        // }
            // .then(renderImages)
           // .catch(error => console.log(error));
    
    console.log(newsApiService.query);
    },1000)); 

    function fetchArticles () {
        newsApiService.fetchArticles();
    }
