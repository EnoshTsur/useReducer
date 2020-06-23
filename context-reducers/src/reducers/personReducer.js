import events from '../context/events'
const { ADD_PERSON, } = events

export default function perosnReducer(state, { type, payload, }) {
    switch(type) {
        case ADD_PERSON:
            return {...state, persons: [...state['persons'], payload]}
        default:
            return { ...state, }
    }
}
