<script>
import { state } from '../state.js';
import FiltersElement from './FiltersElement.vue';
import PosterElement from './PosterElement.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
    components: {
        PosterElement,
        FiltersElement
    },
    methods: {

    },
    props: {
    }
}
</script>

<template>
    <main class="my-5">
        <FiltersElement></FiltersElement>
        <PosterElement></PosterElement>
    </main>
</template>

<style scoped></style>