import './styles.css';
import NewsApiService from './js/apiService';
import {alert, defaultModules, PNotifyMobile} from './js/notifier';

var debounce = require('lodash.debounce');

const inputFormRef = document.querySelector('.search-form');
const inputSearchKey = inputFormRef.elements.query;
const buttonMoreImagesRef = document.querySelector('.button-more-images');
const heroTitleRef = document.querySelector('.hero-title');

buttonMoreImagesRef.addEventListener('click', fetchArticlesOnButton);

const newsApiService = new NewsApiService;
defaultModules.set(PNotifyMobile, {});

inputSearchKey .addEventListener('input', debounce(() =>{
    newsApiService.query = inputSearchKey.value;
    heroTitleRef.classList.add('is-hiden');
    buttonMoreImagesRef.classList.remove('is-hiden');


    if (newsApiService.query === '') {
        newsApiService.clearBlockForMarkup ();
        newsApiService.addClassHiden();

        return alert({
            title: 'Empty field.',
            text: 'Please enter your request!',
            delay: 500
        });
    }
        newsApiService.resetPage();
        const searchSee = newsApiService.query;
        newsApiService.fetchArticles(searchSee);
},1000)); 
    
    function fetchArticlesOnButton () {
        newsApiService.fetchArticles();
    }

export default buttonMoreImagesRef;