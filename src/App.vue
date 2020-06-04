<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/components/Navbar.vue';
  export default {
    components: {
      "navbar": NavBar
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
  }
</style>