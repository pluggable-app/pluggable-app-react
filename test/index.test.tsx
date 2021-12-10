import React from 'react'
import ReactDOM from 'react-dom'
import { bootstrap } from '../src/index'

const App = () => <h1>My Cool App</h1>

describe('Root component', () => {

    jest.mock('react-dom', () => ({
        render: jest.fn(),
    }));

    it('should bootstrap app', () => {
        bootstrap(App, 'root')
        expect(ReactDOM.render).toHaveBeenCalled()
    })
})
