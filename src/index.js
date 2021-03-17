import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import NewsApiService from './js/apiService';
// import notifaer from './js/notifier'

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
        return
        //notifaer.error({text: "Empty field, please enter your request!"});
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

    