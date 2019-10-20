import { path } from '../config'

export const elements = {
    searchForm: document.querySelector('.search'),    
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likes: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
}

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = (parent) => {
    console.log()
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="${path}img/forkify_icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}
