import React from 'react'
import Home from './pages/Home/Home';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reduces/productSlice';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import allReducer from './reduces';
import AppContainer from './AppContainer'

const App = () => {
    // const composedEnhancers = composeWithDevTools();
    const store = configureStore(
        {
            reducer: {
                productSlice: productSlice
            }
        });
    return(
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
}

export default App