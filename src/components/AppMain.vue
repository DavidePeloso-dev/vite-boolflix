<script>
import { state } from '../state.js';
import PosterElement from './PosterElement.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
    components: {
        PosterElement
    },
    methods: {

    },
    props: {
    }
}
</script>

<template>
    <main class="my-5">
        <PosterElement></PosterElement>
    </main>
</template>

<style scoped></style>