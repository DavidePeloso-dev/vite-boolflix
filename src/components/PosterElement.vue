<script>
import { state } from '../state';
import MovieInfo from './MovieInfo.vue';
export default {
    name: 'PosterElement',
    data() {
        return {
            state,
            info: false,
            movieId: ""
        }
    },
    components: {
        MovieInfo
    },
    methods: {
        showInfo(movie) {
            if (this.info == false) {
                this.info = true
            }
            state.movieInfo = {}
            state.movieInfo = movie
        },
        closeInfo() {
            this.info = false
        }
    },
}
</script>

<template>
    <div class="container p-relative">
        <div class="row d-flex">
            <div class="col-2" v-show="movie.poster_path" v-for="movie in state.movies">
                <!-- mostra l'elemento solo se ha il poster -->
                <div class="card" @click="showInfo(movie)">
                    <!-- inseriamo il poster omettendo gli errori -->
                    <img v-if="movie.poster_path" :src="state.img_prefix + 'w342/' + movie.poster_path" alt="">
                </div>
            </div>
            <MovieInfo v-if="info" @close="closeInfo"></MovieInfo>
        </div>
    </div>
</template>

<style scoped>
.card {
    transition: all 1s;
    cursor: pointer;
    border-radius: 0.5rem;

    & img {
        border-radius: 0.5rem;
    }
}

.card:hover {
    box-shadow: 0 0 30px var(--boolflix-primary);
    scale: 1.1;
}
</style>