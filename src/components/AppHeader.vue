<script>
import { state } from '../state.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    components: {
    },
    methods: {

    },
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row d-flex jf-between">
                <div class="logo">
                    <img src="/boolflix-logo.svg" alt="logo">
                </div>
                <div class="search d-flex gap-3 al-center">
                    <input type="text" name="search" id="search" @keyup.enter="state.getSearchMovie"
                        v-model="state.searchTitle" placeholder="Search Title">
                    <label for="search" @click="state.getSearchMovie"><i class="fa-solid fa-magnifying-glass"></i></label>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--boolflix-dark);
    box-shadow: 0 0 50px var(--boolflix-primary);
}

.search {
    color: var(--boolflix-light);

    & input {
        padding: 0.25rem 1rem;
        font-size: 1rem;
    }
}
</style>