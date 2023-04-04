const initState = {
    cart: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : [],
    wishlist: [],
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            console.log("action vua thuc hien la: ",action);
            const isExist = state.cart.find(item => item.id === action.data.id)
            if(isExist) {
                state.cart = state.cart.map(item => {
                    if(item.id === action.data.id){
                        item.quantity += 1
                    }
                    return item
                })
            }else {
                state.cart.push({...action.data, quantity: 1})
            }

            // localStorage.clear(); xoa ro hang
            //   JSON.parse chuyen string ve object
            //JSON.stringify chuyen object ve string
            
            // return {
            //     ...state,
            //     cart: [...state.cart, action.data]
            // };
        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.data.id)
            }
        case "CHANGE_QUANTITY":
            state.cart.map(item => {
                if( item.id === action.data.id) {
                    item.quantity = action.data.quantity
                }
                return item
            })
        default:
            return state;
    }
}


export default productReducer;


