import { reactive } from 'vue';

export const store = reactive({
    endpointFilm: 'https://api.themoviedb.org/3/search/movie',
    endpointSerieTv: 'https://api.themoviedb.org/3/search/tv',
    api_key: '26f6efdde70fbc879cb6594e236316dc',
    filmList: [],
    serieTvList: [],
    filmFilter: ''
})