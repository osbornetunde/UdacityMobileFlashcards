import * as api from "../utils/api";

export const Types = {
  GET_DECKS: "get_decks",
  GET_DECK: "get_deck",
  ADD_DECK: "add_deck",
  ADD_CARD: "add_card",
};

export const getDecks = () => {
    return (dispatch) => {
        api.fetchDecks()
            .then((decks) =>
                dispatch({
                    type: Types.GET_DECKS,
                    decks
                }))
    }
};


export const getDeck = (deckId) => {
    return (dispatch) => {
        api.fetchDeck(deckId)
            .then(deck =>
                dispatch({
                    type: Types.GET_DECK,
                    deck
                })
            )
    }
}

export const addDeck = (deck) => {
    return (dispatch) => {
        api.addDeck(deck)
            .then(data =>
                dispatch({
                    type: Types.ADD_DECK,
                    data
                }))
    }
}

export const addCard = (deckId, card) => {
    return (dispatch) => {
        api.addCard(deckId, card)
            .then(data =>
                dispatch({
                    type: Types.ADD_CARD,
                    data
                }))
    }
}


