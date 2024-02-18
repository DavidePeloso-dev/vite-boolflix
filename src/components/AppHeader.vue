<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchTitle: ""
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
                    <input type="text" name="search" id="search" v-model="searchTitle">
                    <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--boolflix-dark);
}

.search {
    color: var(--boolflix-light);
}
</style>