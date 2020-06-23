import events from '../context/events'

const { INCREMENT, DECREMENT, } = events

export default function counterReducer(counter, { type, payload, }) {
    return type === INCREMENT ?
        counter + payload :
        type === DECREMENT ?
            counter - payload :
            counter
}
