import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

//import icons from 'url:../img/icons.svg';
import 'core-js/stable'; //pollyfiling
import 'regenerator-runtime/runtime'; //pollisync async/await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //1) Loading Recipe
    await model.loadRecipe(id);

    //Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async () => {
  try {
    //Get search query
    const query = searchView.getQuery();
    if(!query) return;

    //load search results
    await model.loadSearchResults(query);


    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};


const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults)
};

init();

