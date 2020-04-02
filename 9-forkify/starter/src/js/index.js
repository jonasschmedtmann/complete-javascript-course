import Search from "./models/Search";
import { elements } from "./views/base";
import * as searchView from "./views/searchView";
/**GLOBAL STATE OF THE APP
|* - Seach object
|* - Current recipe object
|* - Shopping list object
|* - Liked recipes
| */
const state = {};
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput(); //TODO
    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        // 3) Prepare the UI for results
        // 4) Search for the recipes
        await state.search.getRestults();
        // 5) Render results on the UI
        console.log(state.search.result);
    }
};
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
    //console.log(state);
});
