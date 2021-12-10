import React from 'react'
import ReactDOM from 'react-dom'
import { bootstrap } from '../src/index'

const App = () => <h1>My Cool App</h1>

describe('Root component', () => {

    jest.mock('react-dom', () => ({
        render: jest.fn(),
    }));

    it('should be in the document', () => {
        bootstrap(App, 'root')
        expect(ReactDOM.render).toHaveBeenCalled()
    })
})


describe('Index', () => {
    it('should bootstrap react app', () => {

    })
})
