import React from 'react'
import toggleReducer from '../../reducers/toggleReducer'

export default function Toggle() {

    const [ toggle, dispatch, ] = React.useReducer(toggleReducer, false)
   
    const json  = {
        address: {
            city: 'rishon',
            street: 'leah',
            number: 2
        },

        persons: [
            "itsik",
            "yaniv",
            "yurai",
            "malca"
        ],

        planet: 'earth'
    }

    const { address, persons, planet,} = json

    // address h1
    // persons p
    // planet span
    
    // #d9d9d9
    return (
        <div>
            <h1>{`${toggle}`}</h1>
            <button onClick={() => dispatch()}>Toggle</button>
            {
                Object.entries(address).map(([k, v]) => (
                <h1 key={k}>{`${k}: ${v}`}</h1>
                ))
            }
            {
                persons.map((p, i) =>  (
                    <p key={`${p}${i}`}>person: {p}</p> 
                ))
            }
            <span>planet: {planet}</span>
        </div>
    )
}


