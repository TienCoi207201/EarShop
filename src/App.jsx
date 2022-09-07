import React from 'react'
import Home from './pages/Home/Home';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducer from './reduces';
import AppContainer from './AppContainer'

const App = () => {
    const store = createStore(allReducer);
    return(
        <Provider store={store}>
            {/* <Home/> */}
            <AppContainer />
        </Provider>
    )
}

export default App