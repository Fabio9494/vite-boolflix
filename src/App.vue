<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from './store.js'

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template lang="">
  <div>
    <AppHeader/>
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use './components/styles/generals.scss';
</style>