import * as React from 'react';
import Counter from './components/Counter/Counter';
import Toggle from './components/Toggle/Toggle';
import { Context, } from './context/context'
import initialState from './context/initial.state'
import personReducer from './reducers/personReducer'
import InputHandler from './components/Input/InputHandler'
import InputView from './components/Input/InputView'

function App() {

    const [ state, dispatch, ] = React.useReducer(personReducer, initialState)

    return (
        <Context.Provider value={({ state, dispatch, })}>

            <InputHandler render={(input, setInput) => (
                <InputView input={input} setInput={setInput} />
              )}
            />
        </Context.Provider>
    );
}

export default App;
