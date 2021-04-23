<template>
  <div id="app">
    <ResultsComponent />
  </div>
</template>

<script>
import ResultsComponent from './components/ResultsComponent.vue'

export default {
  name: 'App',
  components: {
    ResultsComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
