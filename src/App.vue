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
    this.getFilm()
  },
  methods: {
    getFilm() {
      let api = store.endpointFilm

      if (store.filmFilter !== '') {
        api += `?api_key=${store.api_key}&query=${store.filmFilter}`
        console.log(api);
      }

      axios.get(api).then((response) => {
        store.filmList = response.data.results;
      })
      console.log(store.filmList)
    },
  },
}
</script>

<template lang="">
  <div>
    <AppBoolflix @filter_film="getFilm"/>
  </div>
</template>

<style lang="scss">
@use './components/styles/generals.scss';
</style>