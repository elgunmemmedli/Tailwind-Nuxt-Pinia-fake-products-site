<template>
  <div>
    <h1 class="text-center py-12 text-5xl font-bold uppercase">Products</h1>
    <LazyProductsCards  :products="productsAll" />
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { productsStore } from '~/store/products'


export default {
  name: 'IndexPage',
  layout: 'landing',
  computed: {
    ...mapWritableState(productsStore,[ 'productsAll']),
  },
  async asyncData({ app }) {
    const useProductsStore = productsStore()
    await useProductsStore.getProducts();
  },

}
</script>
