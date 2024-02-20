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

            let icon = movie.original_language
            flags.forEach(flag => {
                if (flag.language === movie.original_language) {
                    icon = flag.icon
                    console.log(movie.original_language, flag.language);
                }
            })
            console.log(icon);
            return icon

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
                <div class="col-2" v-for="movie in state.movies">
                    <div class="card">
                        <ul>
                            <li>{{ movie.title }}</li>
                            <li>{{ movie.original_title }}</li>
                            <li>
                                {{ movie.original_language }}
                                <i class="ms-1 fp fp-rounded" :class="languageIcon(movie)"></i>
                            </li>
                            <li>{{ movie.vote_average }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>