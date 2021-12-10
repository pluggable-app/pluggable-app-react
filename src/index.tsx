import React, { Component } from 'react'
import { App } from 'pluggable-app'
import ReactDOM from 'react-dom'

const bootstrap = (RootComponent: Component, htmlNode: string = 'root') => {
    return () => {
        const App = () => <React.StrictMode>
            <RootComponent />
        </React.StrictMode>

        ReactDOM.render(<App />, document.getElementById(htmlNode))
    }
}

const init = (config: App) => {
    const bootstrapFn = bootstrap(config.rootComponent, 'root')
    return {
        bootstrapFn
    }
}

export default init

