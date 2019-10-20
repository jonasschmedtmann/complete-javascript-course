import { elements } from './base'
import { path } from '../config'

export const getInput = () => {
    return elements.searchInput.value;
}

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

export const highlightSelected = (id) => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach((el) => {
        el.classList.remove('results__link--active');
    });
    const el = document.querySelector(`.results__link[href*="${id}"]`);
    if(el){
        el.classList.add('results__link--active');
    }
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(currentItem => {
        //currentItem.title = limitReciptTitle(currentItem.title);
        elements.searchResList.insertAdjacentHTML('beforeend', getResultHtml(currentItem));
    })

    // render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
}

const limitReciptTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if ((acc + cur.length) < limit) {
                newTitle.push(cur);
            }
            return (acc + cur.length);
        }, 0);
        return `${newTitle.join(' ')} ...`;
    } else {
        return title;
    }
}

const getResultHtml = (item) => {
    return `<li>
                <a class="results__link" href="#${item.recipe_id}">
                    <figure class="results__fig">
                        <img src="${item.image_url}" alt="Test">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${item.title}</h4>
                        <p class="results__author">${item.publisher}</p>
                    </div>
                </a>
            </li>`
}

const createButton = (page, type) => {
    return  `<button class="fbtn-inline results__btn--${type}" data-goto=${type === 'prev' ? (page - 1) : (page + 1)}>
                <span>Page: ${type === 'prev' ? (page - 1) : (page + 1)}</span>        
                    <svg class="search__icon">
                        <use href="${path}img/forkify_icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                    </svg>
            </button>`;
}

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if ((page === 1) && (pages > 1)) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if ((page === pages) && (pages > 1)) {
        // Only button to go to previous page
        button = createButton(page, 'prev');
    } else {
        // Buttons to go previous and next
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
}