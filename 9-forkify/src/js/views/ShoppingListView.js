import { elements } from './base'
import { path } from '../config'

export const renderItem = (item) => {
    const markup = `
    <li class="shopping__item" data-itemid=${item.id}>
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
            <div class="shopping__count-value">${item.unit}</div>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
        <button class="shopping__delete fbtn-tiny">
            <svg>
                <use href="${path}img/forkify_icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = (id) => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) {
        item.parentElement.removeChild(item);
    }
};

