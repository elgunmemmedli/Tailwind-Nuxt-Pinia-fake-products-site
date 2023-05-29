<template>
  <div class="flex justify-center flex-wrap space-x-16">
    <div
      v-for="item of products"
      :key="item.id"
      class="overflow-hidden cursor-pointer group bg-slate-100 mb-12 rounded-2xl w-[360px]">
      <img :src="item.image" alt=""
           class="w-full h-[208px] object-cover object-top"
      />
      <div class="p-5">
        <h2 class="truncate hover:text-clip text-2xl font-bold opacity-50 group-hover:opacity-100 transition duration-300">{{item.title}}</h2>
        <p class="truncate"> {{item.description}}</p>
        <nuxt-link :to="'/'+ item.id" >
          <button class="translate-y-60 capitalize bg-amber-900 px-5 py-3  text-white rounded-full hover:bg-amber-950 mt-5 group-hover:translate-y-0 transition duration-500">read more</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>

export  default {
  props: ['products']
}

</script>
