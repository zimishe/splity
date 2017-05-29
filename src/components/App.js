import '../assets/css/style.css'
import React, { Component } from 'react'

import Main from './main'
import TopPanel from './topPanel'

class App extends Component {
    render() {
       return (
            <div className="splity">
                <TopPanel />
                <Main />
            </div>
        );
    }
}

export default App;

