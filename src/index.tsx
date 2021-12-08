import React, { Component } from 'react'
import ReactDOM from 'react-dom'


const bootstrap = (RootComponent: Component, htmlNode: string = 'root') => {
    const App = () => <React.StrictMode>
        <RootComponent />
    </React.StrictMode>

    ReactDOM.render(<App />, document.getElementById(htmlNode))
}

export { bootstrap }
