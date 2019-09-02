<template>
  <div id="app">
    <app-header />
    <app-body />
  </div>
</template>
<script>
  import Header from "./components/Header"
  import Body from "./components/Body"
  export default {
    components: {
      "app-header": Header,
      "app-body": Body
    }
  }
</script>
<style scoped>
  #app {
    max-width: 1150px;
    margin: auto;
  }
</style>