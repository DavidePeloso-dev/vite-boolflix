import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    api_prefix: 'https://api.themoviedb.org/3',
    api_key: 'api_key=3f97b7c50ae937b02e10eacd3ff55f96',
    searchTitle: "",
    searchType: "multi?",
    movies: [],
    img_prefix: "https://image.tmdb.org/t/p/",
    movieInfo: {},

    getSearchMovie() {
        axios.get(this.api_prefix + '/search/' + this.searchType + this.api_key + '&query=' + this.searchTitle)
            .then(resp => {
                this.movies = []
                const results = resp.data.results
                results.forEach(result => {
                    this.movies.push(result)
                });
                this.searchTitle = ''
            })
            .catch(error => {
                console.error(error);
            })
    }

})