<script>
import { state } from '../state.js';
export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
    components: {
    },
    methods: {
        languageIcon(movie) {
            const flags = [
                { language: "en", icon: "us" },
                { language: "ja", icon: "jp" }
            ];
            let icon = movie.original_language;
            flags.forEach(flag => {
                if (flag.language === movie.original_language) {
                    icon = flag.icon;
                };
            });
            return icon;
        },
        unike(movie) {
            if (movie.title == movie.original_title || movie.original_name) {
                return false
            } else { return true }
        },
        voteStars(movie) {
            console.log(Math.round(movie.vote_average * 5 / 10));
            return Math.round(movie.vote_average * 5 / 10)
        }
    },
    props: {
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row d-flex">
                <div class="col-2" v-show="movie.poster_path" v-for="movie in state.movies">
                    <div class="card">
                        <img v-if="movie.poster_path" :src="state.img_prefix + movie.poster_path" alt="">
                        <ul>
                            <li v-if="unike(movie)">{{ movie.title }}</li>
                            <li>{{ movie.original_title || movie.original_name }}</li>
                            <li>
                                {{ movie.original_language }}
                                <i class="ms-1 fp fp-rounded" :class="languageIcon(movie)"></i>
                            </li>
                            <li v-if="movie.poster_path">
                                <i v-for="n in voteStars(movie)" class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                <i v-for="n in (5 - voteStars(movie))" class="fa-regular fa-star"
                                    style="color: #FFD43B;"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>