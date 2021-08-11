import { isIterable } from 'core-js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';

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
  }
}
function init() {
  recipeView.addHandlerRender(controlRecipes);
}
init();
