<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full object-cover product-image"
      :src="product.image"
      :alt="product.title"
    />
    <div class="self-stretch px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.title }}</div>
      <p class="text-gray-700 text-base product-description">
        {{ product.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 align-bottom">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../types/product';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style>
.product-image {
  height: 200px;
}

.product-description {
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
