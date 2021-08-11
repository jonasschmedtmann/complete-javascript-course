import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {}, s * 1000);
    reject(new Error(`Request took too long! Timeout after ${s} second`));
  });
};

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
    alert(err);
  }
}

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
