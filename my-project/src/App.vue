<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Greeting msg="Welcome to Luncher"/>
    <span><FavRestaurantSelector/></span>
    <br><span><RestaurantList /></span>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue'
import FavRestaurantSelector from './components/FavRestaurantSelector.vue'
import RestaurantList from './components/RestaurantList.vue'


export default {
  name: 'app',
  components: {
      Greeting,
      FavRestaurantSelector,
      RestaurantList

  }
}
</script>

<!-- import element CSS -->
<!--<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">-->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 30px;
}
</style>
