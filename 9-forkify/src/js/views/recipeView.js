import { elements } from './base'
import { path } from '../config'
import { Fraction } from 'fractional'

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
}

export const renderRecipe = (recipe, isLiked) => {
    elements.recipe.innerHTML = getRecipeHtml(recipe, isLiked);
}

const getRecipeHtml = (recipe, isLiked) => {
    return `
    <figure class="recipe__fig">
        <img src="${recipe.img}" alt="Tomato" class="recipe__img">
        <h1 class="recipe__title">
            <span>${recipe.title}</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${path}img/forkify_icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">45</span>
            <span class="recipe__info-text"> minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${path}img/forkify_icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text"> servings</span>

            <div class="recipe__info-buttons">
                <button class="fbtn-tiny btn-decrease">
                    <svg>
                        <use href="${path}img/forkify_icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="fbtn-tiny btn-increase">
                    <svg>
                        <use href="${path}img/forkify_icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="${path}img/forkify_icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
            </svg>
        </button>
    </div>



    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            ${getIngredientList(recipe)}
        </ul>

        <button class="fbtn-small recipe__btn recipe__btn--add">
            <svg class="search__icon">
                <use href="${path}img/forkify_icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
        </p>
        <a class="fbtn-small recipe__btn" href="${recipe.url}" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
                <use href="${path}img/forkify_icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>
    `;
}

const getIngredientList = (recipe) => {
    let ingredients = '';
    recipe.ingredients.forEach((ingredient) => {
        ingredients +=
            `<li class="recipe__item">
                <svg class="recipe__icon">
                    <use href="${path}img/forkify_icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__count">${formatCount(ingredient.count)}</div>
                <div class="recipe__ingredient">
                    <span class="recipe__unit">${ingredient.unit}</span>
                    ${ingredient.ingredient}
                </div>
            </li>`
    })
    return ingredients;
}

const formatCount = (count) => {
    if (count) {
        // count == 2.5 --> 2 1/2
        // count = 0.5 --> 1/2
        const newCount = Math.round(count * 100) / 100;
        const [int, dec] = newCount.toString().split('.').map(el => parseInt(el, 10));
        if (!dec) return newCount;
        if (int === 0) {
            const fr = new Fraction(newCount);
            return `${fr.numerator}/${fr.denominator}`;
        } else {
            const fr = new Fraction(newCount - int);
            return `${int} ${fr.numerator}/${fr.denominator}`;
        }
    }
    return '?';
}

export const updateServings = (recipe) => {
    // Update servings
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;

    // Update ingredients
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
    });
}