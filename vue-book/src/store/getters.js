let getters={
  count:(state)=>{
    return state.cartList.reduce((prev,next)=>{
      return prev+next.bookCount
      },0)

  }
};

export default getters;
