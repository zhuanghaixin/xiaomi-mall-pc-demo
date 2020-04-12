/*
    商城Vuex-actions
*/

export default{
    saveUserName(context, username){
        // eslint-disable-next-line no-console
        console.log('contet')
        // eslint-disable-next-line no-console
        console.log(context)
        context.commit('saveUserName',username)  //前一个参数使saveUserName
    },
    saveCartCount({commit},cartCount){
        commit('saveCartCount',cartCount)
    },
    deleteProductItem({commit},item){
        commit('deleteProductItem',item)
    }
}
