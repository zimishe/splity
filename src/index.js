import React from 'react'
import ReactDOM from 'react-dom'
import PageRouter from './components/router'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <PageRouter />,
    document.getElementById('root'));
registerServiceWorker();

