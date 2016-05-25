<template>
  <div id="app">
    <notes></notes>
  </div>
</template>
<script>
  import Notes from './components/notes/Index'
  export default {
    components: {
      Notes
    }
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  body{
    background: #eee;
    padding: 0 16px;
  }
</style>
