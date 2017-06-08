import React from 'react'
import ReactDOM from 'react-dom'

import PageRouter from './components/router'
import { Provider } from 'react-redux'
import store from './store/store'

import registerServiceWorker from './registerServiceWorker'

export function RenderApp() {
    ReactDOM.render(
        <Provider store={store}>
            <PageRouter />
        </Provider>,
        document.getElementById('root'));
    registerServiceWorker();
}


