import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJson } from "./helper";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  }
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}/${id}`);

    // let recipe = data.data.recipe; //use destructuring below
    const { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title
    };
    // console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 👎🏼`);
    /* throw err here will precipitate err to controller.js */
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}?search=${query}`);
    console.log({ data });

    state.search.results = data.data.recipes.map(r => {
      return {
        id: r.id,
        imageUrl: r.image_url,
        publisher: r.publisher,
        title: r.title
      }
    });

    console.log(state.search.results)
  } catch (error) {
    console.error(`loadSearchResults Error: ${error}`)
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServing) {
  state.recipe.ingredients.forEach(ing => {
    // newQt = oldQt * newServings / oldServings
    ing.quantity = ing.quantity * newServing / state.recipe.servings;
  });

  state.recipe.servings = newServing;
};