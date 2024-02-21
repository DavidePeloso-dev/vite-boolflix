<script>
import { state } from '../state.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            state,
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
        <div class="container d-flex jf-between">
            <div class="logo">
                <img class="b-logo" src="/boolflix-logo.svg" alt="logo">
                <img class="b-icon" src="/boolflix-icon.svg" alt="icon-logo">
            </div>
            <div class="search d-flex gap-3 al-center">
                <input type="text" name="search" id="search" @keyup.enter="state.getSearchMovie" v-model="state.searchTitle"
                    placeholder="Search Title">
                <label for="search" @click="state.getSearchMovie"><i class="fa-solid fa-magnifying-glass"></i></label>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--boolflix-dark);
    box-shadow: 0 0 50px var(--boolflix-primary);
    padding: 1rem 0;
}

.search {
    color: var(--boolflix-light);

    & input {
        padding: 0.25rem 1rem;
        font-size: 1rem;
    }
}

.b-icon {
    display: none;
}

.b-logo {
    display: block;
}

@media screen and (max-width: 480px) {
    .b-icon {
        display: block;
    }

    .b-logo {
        display: none;
    }
}
</style>