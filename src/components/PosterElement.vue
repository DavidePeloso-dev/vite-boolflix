<script>
import { state } from '../state';
import MovieInfo from './MovieInfo.vue';
export default {
    name: 'PosterElement',
    data() {
        return {
            state,
            info: false,
        }
    },
    components: {
        MovieInfo
    },
    methods: {
        showInfo(movie) {
            this.info = true
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
        <h3 class="my-5" v-if="state.faild">{{ state.faild }}</h3>
        <div class="row d-flex">
            <!-- mostra l'elemento solo se ha il poster -->
            <div class="col-6 col-xl-5 col-lg-4 col-md-3 col-sm-2" v-show="movie.poster_path" v-for="movie in state.movies">
                <div class="card" @click="showInfo(movie)">
                    <!-- inseriamo il poster omettendo gli errori -->
                    <img v-if="movie.poster_path" :src="state.img_prefix + 'w342/' + movie.poster_path" alt="">
                </div>
            </div>
            <MovieInfo v-if="info" @close="closeInfo" id="info"></MovieInfo>
        </div>
    </div>
</template>

<style scoped>
.card {
    transition: all 1s;
    cursor: pointer;
    border-radius: 0.5rem;
}

.card:hover {
    box-shadow: 0 0 30px var(--boolflix-primary);
    scale: 1.1;
}

@media screen and (max-width: 1200px) {
    .col-xl-5 {
        width: calc(100% / 5);
    }
}

@media screen and (max-width: 992px) {
    .col-lg-4 {
        width: calc(100% / 4);
    }
}

@media screen and (max-width: 768px) {
    .col-md-3 {
        width: calc(100% / 3);
    }
}

@media screen and (max-width: 576px) {
    .col-sm-2 {
        width: 50%;
    }
}
</style>