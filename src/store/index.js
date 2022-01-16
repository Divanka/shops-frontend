import Vue from 'vue'
import Vuex from 'vuex'
import modules from "@/network/modules";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async loadShops({ commit }, params) {
      const response = await modules.loadShops(params);

      if (response.status === 200) {
        return response.body;
      }
    },

    async createShop({ commit }, params) {
      const response = await modules.createShop(params);

      if (response.status === 201) {
        return response.body;
      }
    },

    async updateShop({ commit }, { shopId, params }) {
      const response = await modules.updateShop(shopId, params);

      if (response.status === 200) {
        return response.body;
      }
    },

    async deleteShop({ commit }, shopId) {
      const response = await modules.deleteShop(shopId);

      if (response.status === 204) {
        return true;
      }
    },

    async loadProducts({ commit }, params) {
      const response = await modules.loadProducts(params);

      if (response.status === 200) {
        return response.body;
      }
    },

    async createProduct({ commit }, params) {
      const response = await modules.createProduct(params);

      if (response.status === 201) {
        return response.body;
      }
    },

    async updateProduct({ commit }, { productId, params }) {
      const response = await modules.updateProduct(productId, params);

      if (response.status === 200) {
        return response.body;
      }
    },

    async deleteProduct({ commit }, productId) {
      const response = await modules.deleteProduct(productId);

      if (response.status === 204) {
        return true;
      }
    },
  },
  modules: {
  }
})
