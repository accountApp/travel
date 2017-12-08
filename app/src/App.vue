<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
  .error{
    height:0.4rem;
    border-radius: 0.2rem;
    background-image: url("./assets/img/denglu-icon-shibai@2x.png");
    background-repeat: no-repeat;
    background-size: 0.3rem;
    background-position: 0.1rem center;
    background-color:rgba(58,94,250,0.8);
    position: absolute;
    bottom:-0.23rem;
    right:0.1rem;
    z-index: 2;
    font-size: 0.18rem;
    padding-right: 0.3rem;
    padding-left: 0.42rem;
    line-height: 0.4rem;
    color:#8b98fe;
  }
</style>
