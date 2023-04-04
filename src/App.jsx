import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reduces/productSlice';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer'

const App = () => {
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