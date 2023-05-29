<template>
  <div class="container">
    <h1 class="text-center uppercase text-3xl py-12"> {{singleProducts.title}} </h1>
    <div class="grid grid-cols-2 items-center gap-5 mt-10">
      <div class="left">
        <img :src="singleProducts.image" alt="" />
      </div>

      <div class="right">
        <p>{{singleProducts.description}}</p>
      </div>
    </div>
  </div>
</template>


<script>

import { productsStore } from "@/store/products";
import { mapWritableState } from "pinia";
export  default {
  layout:'landing',
  async asyncData({params}){
    const useProductStore = productsStore();
    await useProductStore.getProductsSingle(params.id);
  },

  computed : {
    ...mapWritableState(productsStore, ['singleProducts'])
  }
}
</script>
