import base from "@/network/base";
import routes from "@/network/routes";

export default {

    async loadShops(params) {
        return await base.execute('get', routes.shops.get, params);
    },

    async createShop(params) {
        return await base.execute('post', routes.shops.get, params);
    },

    async updateShop(filmId, params) {
        return await base.execute('put', routes.shops.item(filmId), params);
    },

    async deleteShop(filmId) {
        return await base.execute('delete', routes.shops.item(filmId));
    },

    async loadProducts(params) {
        return await base.execute('get', routes.products.get, params);
    },

    async createProduct(params) {
        return await base.execute('post', routes.products.get, params);
    },

    async updateProduct(actorId, params) {
        return await base.execute('put', routes.products.item(actorId), params);
    },

    async deleteProduct(actorId) {
        return await base.execute('delete', routes.products.item(actorId));
    },

}
