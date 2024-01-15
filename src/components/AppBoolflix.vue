<script>
import filmCard from './filmCard.vue'
import { store } from './store'

export default {
    components: {
        filmCard,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <header>
            <h1>BOOLFLIX</h1>
            <div class="search">
               <input type="text" placeholder='Search' id="filmFilter" v-model="store.filmFilter">
               <button @click="$emit('filter_film')">cerca</button>
            </div>
        </header>
        <div class="film-container">
            <filmCard v-for="film, index in store.filmList" :key="index" :film="film" id="filmList" />
        </div>
    </div>
</template>

<style lang="scss">
.film-container {
    display: flex;
    flex-direction: column;
}

header {
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.film-container {
    background-color: rgb(82, 82, 82);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>