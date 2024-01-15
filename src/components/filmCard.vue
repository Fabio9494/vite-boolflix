<script>
export default {
    props: {
        film: Object,
    },
    data() {
        return {

        }
    }
}
</script>
<template lang="">
    <div class="film">
        <div>
            <p class="text">Titolo: {{ film.title }}</p>
            <p class="text">Titolo originale: {{film.original_title}}</p>
            <p class="text">Lingua: {{film.original_language}}</p>
            <p class="text">Voto: {{film.vote_average}}</p>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.film {
    width: calc(100% / 3 - 40px);
    height: 400px;
    padding: 10px;
    background-color: rgb(0, 0, 0);
    margin: 10px;
    color: white;


    img {
        width: 100%;
    }

    .text {
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 15px;
        text-align: center;
        padding: 10px;
    }
}
</style>