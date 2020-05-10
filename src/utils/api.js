import { AsyncStorage } from 'react-native';
import { DECK_CARD_DB_KEY } from './helpers';


export const fetchDecks = () => {
    return AsyncStorage.getItem(DECK_CARD_DB_KEY)
        .then(data => JSON.parse(data))
    .catch(err => console.warn("error while fetching decks", err))
}

export const addDeck = (deck) => {

    return AsyncStorage.mergeItem(DECK_CARD_DB_KEY, JSON.stringify(
        {[deck.id]: deck}
    ))
    .catch(err => console.warn("error while trying to save deck", err))
}

export const addCard = (deckId, card) => {
    return AsyncStorage.getItem(DECK_CARD_DB_KEY)
        .then(response => {
            const data = JSON.parse(response)
            data[deckId] = {
                ...data[deckId],
                cards: [
                    ...data[deckId].cards,
                    { question: card.question, answer: card.answer}
                ]
            }
        AsyncStorage.setItem(DECK_CARD_DB_KEY, JSON.stringify(data))
        })
    .catch(err => console.warn("error while trying to add card", err))
}
