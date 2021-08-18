import { isIterable } from 'core-js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // Load Recipe
    await model.loadRecipe(id);

    // Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    // Get Search Query
    const query = searchView.getQuery();
    if (!query) return;
    // Load Search Results
    await model.loadSearchResults(query);
    // Render Results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
}

function init() {
  // Publisher-Subscriber Methods
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
