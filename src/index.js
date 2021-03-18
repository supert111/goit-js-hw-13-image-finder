import './styles.css';
import NewsApiService from './js/apiService';
import {alert, defaultModules, PNotifyMobile, error} from './js/notifier';

var debounce = require('lodash.debounce');

const inputFormRef = document.querySelector('.search-form');
const inputName = inputFormRef.elements.query;
const buttonMoreImagesRef = document.querySelector('.button-more-images');
buttonMoreImagesRef.addEventListener('click', fetchArticles);


const newsApiService = new NewsApiService;
defaultModules.set(PNotifyMobile, {});
//прослушиватель на инпут + debounce
inputName.addEventListener('input', debounce(() =>{
    newsApiService.query = inputName.value;
    if (newsApiService.query === '') {
        newsApiService.clearBlockForMarkup ();
        
        return error({
            title: 'Empty field.',
            text: 'Please enter your request!',
            delay: 2000
          });
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

