import React from 'react'

export default function InputHandler({ render, }) {
    
    const [ input, setInput, ] = React.useState('')

    return (
        <>
        { render(input, setInput, ) }
        </>
    )
}