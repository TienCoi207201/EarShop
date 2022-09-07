const initState = {
    cart: [],
}

const productsReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            console.log("aciton",action);
            return {
                ...state,
                cart: [...state.cart, action.data]
              };
        default:
              return state;
    }
}

export default productsReducer;


