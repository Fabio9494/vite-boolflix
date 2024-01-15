<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from './store'


export default {
    props: {
        serieTv: Object,
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <div class="serieTv">
        <div>
            <img :src="store.poster+serieTv.poster_path" alt="">
            <p class="text">Titolo: {{ serieTv.name }}</p>
            <p class="text">Titolo originale: {{serieTv.original_name}}</p>
            <div class="center" v-if="serieTv.original_language==='en'"><p class="text">Lingua:</p><country-flag  country='gb-eng' size='small'/></div>
            <p v-else class="text">Lingua: <country-flag :country=serieTv.original_language size='small'/></p>
            <div class="vote">
              <span class="text">Voto: </span>
              <span v-for="star in Math.round(serieTv.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
              <span v-for="star in 5-Math.round(serieTv.vote_average / 2)"><i class="fa-regular fa-star"></i></span>
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>
.serieTv {
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

    .vote {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>