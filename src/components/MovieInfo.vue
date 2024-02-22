<script>
import { state } from '../state';
export default {
    name: 'MovieInfo',
    data() {
        return {
            state,
        }
    },
    props: {
    },
    methods: {
        /**
         * Stampiamo la bandiera corretta!
         * @param {object} movie oggetto da cui recuperare la lingua
         */
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
        /**
         * #Il titolo è unico?
         * @param {object} movie oggetto da cui recuperare il titolo
         */
        unike(movie) {
            if (movie.title == movie.original_title || movie.original_name) {
                return false
            } else { return true }
        },
        /**
         * ##Calcoliamo il punteggio in proporzione
         * @param {object} movie oggetto da cui recuperare il punteggio
         */
        voteStars(movie) {
            return Math.round(movie.vote_average * 5 / 10)
        }
    },
    mounted() {
        this.$refs.movieInfo.focus()
    }
}
</script>

<template>
    <div class="wrapper info">
        <div class="container">
            <div class="row d-flex jf-center">
                <div class="w-80 w-lg-100">
                    <div class="card p-relative" @keyup.esc="$emit('close')" tabindex="0" ref="movieInfo">
                        <i class="close fa-solid fa-xmark fa-xl" @click="$emit('close')"></i>
                        <!-- inseriamo il poster omettendo gli errori -->
                        <img v-if="state.movieInfo.poster_path"
                            :src="state.img_prefix + 'w780/' + (state.movieInfo.backdrop_path || state.movieInfo.poster_path)"
                            alt="">
                        <ul>
                            <li class="subtitle">{{ state.movieInfo.original_title || state.movieInfo.original_name }}</li>
                            <!-- mostra il titolo solo se diverso dall'originale -->
                            <li class="title" v-if="unike(state.movieInfo)">{{ state.movieInfo.title }}</li>
                            <li class="overview">{{ state.movieInfo.overview }}</li>
                            <!-- stampiamo la lingua e la bandiera se trovata -->
                            <li class="language">
                                <span>Language : {{ state.movieInfo.original_language }}</span>
                                <i class="ms-1 fp fp-rounded" :class="languageIcon(state.movieInfo)"></i>
                            </li>
                            <!-- stampiamo il voto su base stellare -->
                            <li class="stars" v-if="state.movieInfo.poster_path">
                                <i v-for="n in voteStars(state.movieInfo)" class="fa-solid fa-star"
                                    style="color: #FFD43B;"></i>
                                <i v-for="n in (5 - voteStars(state.movieInfo))" class="fa-regular fa-star"
                                    style="color: #FFD43B;"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.641);
    box-shadow: 0 0 150px black;
}

.close {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    box-shadow: 0 0 15px black;
    transition: all 1s;
    cursor: pointer;

    &:hover {
        scale: 1.3;

    }
}

.info {
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50%;
}

.card {
    background-color: rgb(36, 35, 35);
    padding: 2rem;
    text-transform: capitalize;
    border: 1px solid var(--boolflix-light);
    border-radius: 5px;

    & img {
        height: 400px;
        object-fit: cover;
        object-position: center;
    }
}

.subtitle {
    font-size: 2rem;
    font-weight: bold;
    padding: 0.5rem 0;
}

.title {
    font-size: 1.25rem;
    font-weight: 500;
}

.overview {
    padding: 0.5rem 0;
    text-transform: none;
}

.stars {
    padding: 1rem 0;
}

.w-80 {
    width: 80%;
}

@media screen and (max-width: 992px) {
    .w-lg-100 {
        width: 100%;
    }
}
</style>