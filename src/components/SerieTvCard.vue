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
    <div class="serieTv flip-card">
        <div class=flip-card-inner>
            <div class="flip-card-front">
                <img :src="store.poster+serieTv.poster_path" alt="">
            </div>
            <div class="information">
               <p class="text">Titolo: {{ serieTv.name }}</p>
               <p class="text">Titolo originale: {{serieTv.original_name}}</p>
               <div class="center" v-if="serieTv.original_language==='en'"><p class="text">Lingua:</p><country-flag  country='gb-eng' size='small'/></div>
               <p v-else class="text">Lingua: <country-flag :country=serieTv.original_language size='small'/></p>
               <div class="vote">
                 <span class="text">Voto: </span>
                 <span v-for="star in Math.round(serieTv.vote_average / 2)"><i class="fa-solid fa-star"></i></span>
                 <span v-for="star in 5-Math.round(serieTv.vote_average / 2)"><i class="fa-regular fa-star"></i></span>
                </div>  
                <p class="text overflow">{{ serieTv.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 100%;
    height: 700px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.information {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.information {
    transform: rotateY(180deg);
    color: white;
    background-color: black;
    padding: 20px;
}

.serieTv {
    width: calc(100% / 3 - 40px);
    margin: 10px;
}

img {
    width: 100%;
    height: 100%;
}

.overflow {
    height: 300px;
    overflow-y: auto;
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
</style>