<template>
  <div class="max-w-screen-md m-auto">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { log } from '@fullstory/browser';
import { ref } from 'vue';
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { getProducts } from './services/product';
import ProductCard from './components/ProductCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ProductCard,
  },
  setup() {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
