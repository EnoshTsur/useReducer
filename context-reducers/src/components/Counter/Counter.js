import React from 'react'
import counterReducer from '../../reducers/counterReducer'
import events from '../../context/events'

export default function Counter() {

    const { INCREMENT, DECREMENT, } = events
    const [counter, dispatch,] = React.useReducer(counterReducer, 0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch({ type: INCREMENT, payload: 4, })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT, payload: 2, })}>Decrement</button>
        </div>
    )
}
