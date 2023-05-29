import { defineStore } from 'pinia'

export  const productsStore = defineStore('products', {
  state: () => ({
    productsAll : [],
    singleProducts: {}
  }),

  getters : {

  },

  actions : {

  async getProducts(){
    try{
      const {data} = await this.$nuxt.$axios.get(`${this.$nuxt.$config.BASE_URL}/products`);
      this.productsAll = data;

      return data;
    }catch (err){
      console.log('xeta');
    }
    },

    async getProductsSingle(id){
      try{
       const {data} = await this.$nuxt.$axios.get(`${this.$nuxt.$config.BASE_URL}/products/${id}`);
       this.singleProducts = data;
        return data;
      }catch (err){
        console.log(err);
      }
    }


  }
})
