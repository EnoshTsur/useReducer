import React from 'react'
import { Context, } from '../../context/context'
import events from '../../context/events'
const { ADD_PERSON, } = events

export default function InputView({ input, setInput, }) {
    const { state, dispatch, } = React.useContext(Context)
    const { persons, } = state

    return (
            <>
              {
                  persons.map((p, i) => (
                      <p key={`${p}${i}`}>{p}</p>
                  ))  
               }   
              
                <input type="text" onChange={e => setInput(e.target.value)}/>
                <button onClick={() => dispatch({ type: ADD_PERSON, payload: input})}> Add</button>
            </>
        )
}