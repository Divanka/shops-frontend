export default {
    shops: {
        get: 'shops',
        item (id) { return "shops/" + id },
    },
    products: {
        get: 'products',
        item (id) { return "products/" + id },
    },
}