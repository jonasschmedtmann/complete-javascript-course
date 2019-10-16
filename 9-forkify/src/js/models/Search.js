/**
 * Better than fetch:
 *  - Automatically returns JSON
 *  - Compatible with all browsers
 *  - Better error handling
 */
import axios from 'axios'; 
import {key} from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const searchUrl = 'https://www.food2fork.com/api/search'
        try {
        const res = await axios(`${searchUrl}?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        } catch (error){
            alert(error);
        }
    }

}
