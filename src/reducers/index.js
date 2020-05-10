import { Types } from '../actions'


const deck = (state = {}, action) => {
    switch (action.type) {
        case Types.GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case Types.GET_DECK:
            return {
                ...state,
                ...action.deck
            }
        case Types.ADD_DECK:
            return {
                ...state,
                [action.deckId]: {
                    id: action.deckId,
                    name: action.name,
                    cards: []
                }
            }
        case Types.ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [
                        ...state[action.deckId].cards,
                        {question: action.question, answer: action.answer}
                    ]
                }
            }
        default:
            return state
    }
}

export default deck