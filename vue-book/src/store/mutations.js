import * as Types from './mutations-type'
const mutations={
  [Types.ADD_CART](state,book){
    let product =state.cartList.find(item=>item.bookId===book.bookId);
    if (product){
      product.bookCount+=1;//需要更新掉原数组，否在不会刷新
      state.cartList=[...state.cartList]
    }else {
      book.bookCount=1;
      // state.cartList.push(book)
      state.cartList=[...state.cartList,book]
    }
  },
  [Types.REMOVE_CART](state,book){
    state.cartList=state.cartList.filter(item=>item.bookId!==book.bookId);
    // state.cartList=[...product];
  },
  [Types.CHANGE_CART](state,bookId,num){
    let product =state.cartList.find(item=>item.bookId===bookId);
    if (num>0){
      product.bookCount+=1
    }else {
      product.bookCount-=1
    }
    state.cartList=[...state.cartList]
  },
  [Types.CLEAR_CART](state) {
    state.cartList = []
  }
};
export default mutations;
