<script>
import { state } from '../state';
export default {
    name: 'FiltersElement',
    data() {
        return {
            state,
            filterActive: false

        }
    },
    components: {
    },
    methods: {
        movieFilter() {
            state.movies = []
            this.filterActive = true;
            state.getSearchMovie()
        },
        seriesFilter() {
            state.movies = []
            this.filterActive = true;
            state.getSearchTv()
        },
        closeFilter() {
            this.filterActive = false
            state.getSearchAll()
        }
    },
}
</script>

<template>
    <div class="container">
        <form class="filter d-flex al-center gap-3">
            <!-- cancellazione filtri, solo se presenti -->
            <div class="close-filter" v-show="filterActive">
                <input type="radio" name="filter" id="close" value="close" @click="closeFilter()">
                <label class="close" for="close"><i class="fa-solid fa-xmark"></i></label>
            </div>
            <!-- filtro solo film -->
            <input type="radio" name="filter" id="movies" value="movies" @click="movieFilter()">
            <label for="movies">Movies</label>
            <!-- filtro solo serie tv -->
            <input type="radio" name="filter" id="series" value="series" @click="seriesFilter()">
            <label for="series">Series Tv</label>
        </form>
    </div>
</template>

<style scoped>
.filter {
    & input[type="radio"] {
        display: none;

        &:checked+label {
            background-color: var(--boolflix-light);
            color: var(--boolflix-dark);
        }
    }

    & label {
        border: 1px solid var(--boolflix-light);
        border-radius: 1rem;
        padding: 0.25rem 1rem;
        cursor: pointer;
    }

    & .close {
        padding: 0.25rem;

        & i {
            font-size: 0.9rem;
            width: 1rem;
            aspect-ratio: 1/1;
            text-align: center;
            vertical-align: middle;
        }
    }
}
</style>