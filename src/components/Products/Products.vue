<template>
  <div class="grid min-w-min gap-4 grid-cols-3">
    <template v-for="(product, idx) in products" :key="idx">
      <ProductCard :product="product" />
    </template>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, computed } from 'vue';
import { Product } from '../../types/product';
import { getProducts } from '../../services/product';
import ProductCard from '../ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  setup() {
    const products = ref([] as Product[]);
    onBeforeMount(async () => {
      products.value = await getProducts();
    });

    return {
      products: products,
    };
  },
};
</script>

<style></style>
