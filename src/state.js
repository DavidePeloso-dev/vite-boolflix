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
    faild: '',

    getSearchMovie() {
        axios.get(this.api_prefix + '/search/movie?' + this.api_key + '&query=' + this.searchTitle)
            .then(resp => {
                this.faild = ''
                const results = resp.data.results
                results.forEach(result => {
                    this.movies.push(result)
                });
                if (this.movies == '') {
                    this.faild = "Sorry, we didn't found it!"
                }
            })
            .catch(error => {
                console.error(error);
                this.faild = error.message
            })
    },
    getSearchTv() {
        axios.get(this.api_prefix + '/search/tv?' + this.api_key + '&query=' + this.searchTitle)
            .then(resp => {
                this.faild = ''
                const results = resp.data.results
                results.forEach(result => {
                    this.movies.push(result)
                });
                if (this.movies == '') {
                    this.faild = "Sorry, we didn't found it!"
                }
            })
            .catch(error => {
                console.error(error);
                this.faild = error.message
            })
    },
    getSearchAll() {
        this.movies = []
        this.getSearchMovie()
        this.getSearchTv()
        console.log(this.movies);
    }

})