import setting from '../js/settings/index';
import galleryTemplate from '../templates/gallery-template.hbs';
const { BASE_URL, API_KEY } = setting;
const blockForMarkupRef = document.querySelector('.wrapper-tamplate'); 

export default class NewsApiService {
    constructor () {
        this.searchKey = '';
        this.page = 1;
    }

    fetchArticles() {
        const url = 
            `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchKey}&page=${this.page}&per_page=12&key=${API_KEY}`;
        
        return fetch(url)
            .then(result => result.json())
            .then(renderImages) 
            .then(data => {
                this.page +=1;
            });
            
    }
    resetPage() {
        blockForMarkupRef.innerHTML = '';
        this.page = 1;
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











// //прослушиватель на инпут + debounce
// inputName.addEventListener('input', debounce(() =>{
//     const searchKeyWord = inputName.value;
    
//     fetchImage (searchKeyWord)
//     .then(renderImages)
//     .catch(error => console.log(error));
    
//     console.log(searchKeyWord);
//     },1000)); 
    
//     // const url = 
//     //     `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
    
    
//     async function fetchImage (searchKey) {
//         pageNumber += 1;
//         const searchResult = await fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`);
//         const result = await searchResult.json();
        
//         //searchKey = searchKey;
//          console.log( pageNumber);
//         return result ;
//     }
//     function renderImages(images) {
//         const markup = galleryTemplate (images);
//         blockForMarkupRef.insertAdjacentHTML('afterbegin', markup);
//     }
    
//    function  goToNextPage()  {
//         if(pageNumber <= 0) {
//             return;
//         }
//          pageNumber += 1;
//           console.log('function', pageNumber);
//        return;
//     }
//======================================
// const inputFormRef = document.querySelector('.search-form');
// const inputName = inputFormRef.elements.query;
// const blockForMarkupRef = document.querySelector('.wrapper-tamplate'); 
// const buttonMoreImagesRef = document.querySelector('.button-more-images');
// buttonMoreImagesRef.addEventListener('click', fetchImage);


// // //прослушиватель на инпут + debounce
// // inputName.addEventListener('input', debounce(() =>{
// // const searchKeyWord = inputName.value;

// //     fetchImage (searchKeyWord)
// //         // .then(renderImages)
// //         .catch(error => console.log(error));

// // console.log(searchKeyWord);
// // },1000)); 


// // const url = 
// //     `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}`;


// async function fetchImage (searchKey) { 
//     // if (searchKey === ''){
//     //     return;
//     // } 
//     searchKey = searchKey;
//     pageNumber += 1;
//     const searchResult = await fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchKey}&page=${pageNumber}&per_page=12&key=${API_KEY}`);
//     const result = await searchResult.json();

//      console.log( pageNumber);
//      renderImages(result);
//     return result ;
// }
// function renderImages(images) {
//     const markup = galleryTemplate (images);
//     blockForMarkupRef.insertAdjacentHTML('afterbegin', markup);
// }