// Global app controller
import { path } from './config'
import Search from './models/Search'
import Recipe from './models/Recipe'
import Likes from './models/Likes'
import ShoppingList from './models/ShoppingList'
import * as searchView from './views/SearchView'
import * as recipeView from './views/RecipeView'
import * as shoppingListView from './views/ShoppingListView'
import * as likesView from './views/LikesView'
import { elements, renderLoader, clearLoader } from './views/base'


/** Global State of the App
 *      - Search Object
 *      - Current Recipe Object
 *      - Shopping List Object
 *      - Liked Recipes
 */
const state = {

}

// When troubleshooting on localhost
if (path === '') {
    window.state = state;
}

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get the query from the view
    const query = searchView.getInput();
    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results 
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('Something wrong with the search...')
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.fbtn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }

})


/**
 *  RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    // 1. Get the ID from URL
    const id = window.location.hash.replace('#', '');
    if (id) {
        // 2. New search object and add to state
        state.recipe = new Recipe(id);

        // 3. Prepare UI for changes 
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        searchView.highlightSelected(id);
        try {
            // 4. Search for recipe, and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // 5. Calculate servings, and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // 5. Render results on UI
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        } catch (error) {
            alert('Error Processing Recipe');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * SHOPPING LIST CONTROLLER
 */
const controlShoppingList = () => {
    // Create a new list if there is none yet
    if (!state.List) {
        state.shoppingList = new ShoppingList();

        // Add each ingredient to the list
        state.recipe.ingredients.forEach((el) => {
            const item = state.shoppingList.addItem(el.count, el.unit, el.ingredient);
            shoppingListView.renderItem(item);
        });
    }
}

/**
 * LIKES CONTROLLER
 */
const controlLikes = () => {
    if(!state.likes){
        state.likes = new Likes();
    }
    const currentId = state.recipe.id;
    // User has NOTE yet liked current recipe
    if(!state.likes.isLiked(currentId)){
        // Add like to the state
        const newLike = state.likes.addLike(state.recipe);
        // Toggle the like button
        likesView.toggleLikeBtn(true);
        // Add Like to the UI List
        likesView.renderLike(newLike);
    } else {
        // Remove like from the state
        state.likes.removeLike(state.recipe.id);
        // Toggle the like button
        likesView.toggleLikeBtn(false);
        // Remove like from the UI list
        likesView.deleteLike(state.recipe.id);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
}

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    // Restore likes
    state.likes.readStorage();
    
    // Toggle likes menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    state.likes.likes.forEach((like) => {
        likesView.renderLike(like);
    })
})

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    // handle delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete from state
        state.shoppingList.deleteItem(id);
        // Delete from UI
        shoppingListView.deleteItem(id);
        // Handle the count update
    } else if (e.target.matches('.shopping__count-value')) {
        // Read the data from the interface
        const val = parseFloat(e.target.value, 10);
        if (val < 0) {
            e.target.value = 0;
        } else {
            state.shoppingList.updateCount(id, val);
        }
    }

})

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServings(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.updateServings(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlShoppingList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        controlLikes();
    }
});