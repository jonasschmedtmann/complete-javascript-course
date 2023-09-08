import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
// Polyfilling async/await to support most old browsers
import 'regenerator-runtime/runtime';
// Polyfills everything else 
import 'core-js/stable';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // 1) fetching recipe
    await model.loadRecipe(id); //returns a Promise of an updated model.state.recipe 

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1 get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2 load search results
    await model.loadSearchResults(query);

    // 3 render ALL search results at once
    // resultsView.render(model.state.search.results);

    // 3 render results using pagination
    resultsView.render(model.getSearchResultsPage());

    // 4 render pagination buttons, pass in state as _data in View.render()
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (newResultsPage) {
  // 1 render NEW results
  resultsView.render(model.getSearchResultsPage(newResultsPage));

  // 2 render NEW pagination buttons with updated Page information
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.render(model.state.recipe);
}

const init = function () {
  //publisher (SUBSCRIBER) pattern
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();