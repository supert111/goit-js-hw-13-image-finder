import setting from '../js/settings/index';
import galleryTemplate from '../templates/gallery-template.hbs';
import scroll from './scrollTo/indexScroll';
import buttonMoreImagesRef from '../index';
import {error} from '../js/notifier';
const { BASE_URL, API_KEY } = setting;
const blockForMarkupRef = document.querySelector('.wrapper-tamplate'); 

export default class NewsApiService {
    
    constructor () {
        this.searchKey = '';
        this.page = 1;
    }

   async fetchArticles() {
        try{
            const url = 
            `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchKey}&page=${this.page}&per_page=12&key=${API_KEY}`;
            const response = await fetch(url);

        if(!response) {
            throw response;                        
        }
            const imageTampl = await response.json();
            if(imageTampl.hits.length === 0) {
                this.addClassHiden ();
            }

            const scrollDownNextPage = await renderImages(imageTampl);
            this.page +=1;
            scroll();
            return scrollDownNextPage; 

        } catch {
            this.addClassHiden ();
             error({
                title: 'Not found.',
                text: 'Please enter your request!',
                delay: 500
            });
        }
                          
    }
    
    resetPage() {
        this.page = 1;
        this.clearBlockForMarkup ();
    }
    
    clearBlockForMarkup () {
        blockForMarkupRef.innerHTML = '';
    }

    addClassHiden () {
        buttonMoreImagesRef.classList.add('is-hiden');
    }
    
    get query() {
        return this.searchKey;
    }
    
    set query(newSearchKey) {
        this.searchKey = newSearchKey;
    }
};


function renderImages(images) {
    const markup = galleryTemplate (images);
    blockForMarkupRef.insertAdjacentHTML('beforeend', markup);
}

//=======================================================
// fetchArticles() {
//     const url = 
//         `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchKey}&page=${this.page}&per_page=12&key=${API_KEY}`;
    
//     return fetch(url)
//         .then(result => result.json())
//         .then(renderImages) 
//         .then(data => {
//             this.page +=1;
//             scroll();
//             console.dir(document.documentElement);
//         });
        
// }