import { reactive } from 'vue'
import axios from 'axios'
export const state = reactive({
    api_prefix: 'https://api.themoviedb.org/3',
    api_key: 'api_key=3f97b7c50ae937b02e10eacd3ff55f96',
    searchTitle: "",
    resultsFound: [],

    getSearchMovie() {
        axios.get(this.api_prefix + '/search/movie?' + this.api_key + '&query=' + this.searchTitle)
            .then(resp => {
                const results = resp.data.results;
                this.resultsFound.push(results)
                console.log(results);
            })
            .catch(error => {
                console.error(error);
            })
    }

})