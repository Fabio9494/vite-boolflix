<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from './store'

export default {
    props: {
        film: Object,
    },
    components: {
        CountryFlag
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="film">
        <div>
            <img :src="store.poster+film.poster_path" alt="">
            <p class="text">Titolo: {{ film.title }}</p>
            <p class="text">Titolo originale: {{film.original_title}}</p>
            <div class="center" v-if="film.original_language==='en'"><p class="text">Lingua:</p><country-flag  country='gb-eng' size='small'/></div>
            <p v-else class="text">Lingua: <country-flag :country=film.original_language size='small'/></p>
            <p class="text">Voto: {{film.vote_average}}</p>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.film {
    width: calc(100% / 3 - 40px);
    padding: 10px;
    background-color: rgb(0, 0, 0);
    margin: 10px;
    color: white;


    img {
        width: 100%;
        height: 700px;

    }

    .text {
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15px;
        text-align: center;
        padding: 10px;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>