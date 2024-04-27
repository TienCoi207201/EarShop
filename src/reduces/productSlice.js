import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: localStorage.getItem('product') != null ? JSON.parse(localStorage.getItem('product')) : [],
        cart: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : [],
        wishlist: localStorage.getItem('wishlist') != null ? JSON.parse(localStorage.getItem('wishlist')) : [],
        users: []
    },
    reducers: {
        filterProduct: (state, action) => {
            console.log('action', action.payload.brand)
            state.product = state.product.map(item => item.brand === action.payload.brand)
        },
        addProduct: (state, action) => {
            const isExist = state.cart.find(item => item.id === action.payload.id);
            if (isExist) {
                state.cart = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += 1
                    }
                    return item
                })
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        addWishlist: (state, action) => {
            const isExist = state.wishlist.find(item => item.id === action.payload.id)
            if (isExist) {
                state.wishlist = state.wishlist.map(item => {
                    if (item.id === action.payload.id) {
                        alert("Sản phẩm đã tồn tại trong wishlist");
                    }
                    return item;
                })
            } else {
                state.wishlist.push(action.payload)
            }
        },
        removeCart: (state, action) => {
            let items = JSON.parse(localStorage.getItem('cart'))
            console.log("item cart:", items)
            const filtered = items.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(filtered))
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        changeQuantity: (state, action) => {
            state.cart = state.cart.map(item => { // lặp qua các item trong list cart
                if (item.id === action.payload.id) { // nếu item mà nó lặp qua = với item mà mình gửi vào
                    item.quantity = action.payload.quantity; // thì update quantity
                }
                return item;
            });
        },
        payment: (state, action) => {
            state.cart = [];
            localStorage.clear();
        },
        addUser: (state, action) => {
            state.users = state.users.push(action.payload)
        }
    }
})

export const { filterProduct, addProduct, addWishlist, removeCart, changeQuantity, payment, addUser } = productSlice.actions;
export default productSlice.reducer;