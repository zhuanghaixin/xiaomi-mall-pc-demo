/*
    商城Vuex-mutations
 */
export default {
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(state,cartCount){
        state.cartCount=cartCount
    },
    deleteProductItem(state,item){
        state.item=item
    }
}
