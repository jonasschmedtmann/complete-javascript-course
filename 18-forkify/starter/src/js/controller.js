import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
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

    // 0 Update results view to mark selected search result
    resultsView.updateDOM(model.getSearchResultsPage());

    // 1) fetching and loading recipe
    await model.loadRecipe(id); //returns a Promise of an updated model.state.recipe 

    // 2) rendering recipe
    recipeView.render(model.state.recipe);

    // Update bookmarks view
    bookmarksView.updateDOM(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();

    console.error(err);
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
  model.updateServings(newServings);
  recipeView.updateDOM(model.state.recipe);
};

const controlAddBookMark = function () {
  // Add/remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookMark(model.state.recipe.id);
  }

  // Update view with bookmark
  recipeView.updateDOM(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe)

    // render recipe
    recipeView.render(model.state.recipe);

    // success message
    addRecipeView.renderMessage();

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

  } catch (error) {
    console.log(`${error} 🍳`);
    addRecipeView.renderError(error.message);
  }

}

const init = function () {
  //publisher (SUBSCRIBER) pattern
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  bookmarksView.addHandlerRender(controlBookmarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();