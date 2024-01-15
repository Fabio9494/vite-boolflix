<script>
import filmCard from './filmCard.vue'
import SerieTvCard from './SerieTvCard.vue'
import { store } from './store'

export default {
    components: {
        filmCard,
        SerieTvCard
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
               <input type="text" placeholder='Search' id="filmFilter" v-model="store.search">
               <button @click="$emit('searchFilmSerieTv')">cerca</button>
            </div>
        </header>
        <div class="film-container">
            <h1 v-if="store.filmList!=0">FILM</h1>
            <filmCard v-for="film, index in store.filmList" :key="index" :film="film" id="filmList" />
        </div>
        <div class="serieTv-container">
            <h1 v-if="store.serieTvList!=0">SERIE TV</h1>
            <SerieTvCard v-for="serieTv, index in store.serieTvList" :key="index" :serieTv="serieTv" id="serieTvList" />
        </div>
    </div>
</template>

<style lang="scss">
.film-container,
.serieTv-container {
    background-color: rgb(82, 82, 82);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    h1 {
        width: 100%;
        padding: 20px 40px;
    }
}

header {
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>