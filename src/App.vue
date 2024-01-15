<script>
import AppBoolflix from './components/AppBoolflix.vue';

import axios from 'axios';
import { store } from './components/store'

export default {
  components: {
    AppBoolflix
  },
  data() {
    return {
      store
    }
  },
  created() {

    this.search()
  },
  methods: {
    getFilm() {
      let api = store.endpointFilm

      if (store.search !== '') {
        api += `?api_key=${store.api_key}&query=${store.search}`
        console.log(api);
      }

      axios.get(api).then((response) => {
        store.filmList = response.data.results;
      })
      console.log(store.filmList)
    },
    getSerieTv() {
      let apiTv = store.endpointSerieTv

      if (store.search !== '') {
        apiTv += `?api_key=${store.api_key}&query=${store.search}`
        console.log(apiTv);
      }

      axios.get(apiTv).then((response) => {
        store.serieTvList = response.data.results;
      })
    },
    search() {
      this.getFilm()
      this.getSerieTv()
    }
  },

}
</script>

<template lang="">
  <div>
    <AppBoolflix @searchFilmSerieTv="search"/>
  </div>
</template>

<style lang="scss">
@use './components/styles/generals.scss';
</style>