import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, KEY } from "./config";
// import { getJson, sendJson } from "./helper";
import { ajax } from "./helper.js";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
  bookmarks: []
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return state.recipe = {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    // conditiionally adding properties to an object
    // recipe.key true && (then) do this
    // recipe.key false && SHORT CIRCUIT
    ...(recipe.key && { key: recipe.key })
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await ajax(`${API_URL}/${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);
    // think of 'some' as 'any'
    if (state.bookmarks.some(bookm => bookm.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }

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
    const data = await ajax(`${API_URL}?search=${query}&key=${KEY}`);
    console.log({ data });

    state.search.results = data.data.recipes.map(r => {
      return {
        id: r.id,
        imageUrl: r.image_url,
        publisher: r.publisher,
        title: r.title,
        ...(r.key && { key: r.key })
      }
    });
    state.search.page = 1;
    // console.log(state.search.results)
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

const persistBookmarks = function () {
  localStorage.setItem('forkifyBookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (currRecipe) {
  //Add bookmark 
  state.bookmarks.push(currRecipe);

  //Mark state's recipe as bookmarked
  if (currRecipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookMark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('forkifyBookmarks');
  if (!storage) return;

  state.bookmarks = JSON.parse(storage);
};

init();
console.log(state.bookmarks);


// dev-only function
const clearBookmarks = function () {
  localStorage.clear('forkifyBookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  // console.log(Object.entries(newRecipe));
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry =>
        entry[0].startsWith('ingredient') && entry[1] !== ''
      )
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        // trim() to display 1+ word ingredients with spaces
        const ingArr = ing[1].split(',').map(el => el.trim());

        const expectedNumInput = 3;
        if (ingArr.length !== expectedNumInput) {
          throw new Error('Invalid input format. Please use correct format (with commas) of quantity, unit, description.')
        }

        // const quantity = ingArr.quantity;
        // const unit = ingArr.unit;
        // const description = ingArr.description;
        const [quantity, unit, description] = ingArr; // destructuring

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      // how the property is formatted in the API: names from our index.html attributes
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.imageUrl,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    console.log(recipe);

    const data = await ajax(`${API_URL}?key=${KEY}`, recipe);
    // console.log(data);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};