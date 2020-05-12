import { Types } from "../actions";
const INITIAL_STATE = {};

const deck = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case Types.GET_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case Types.ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          id: action.deck.id,
          name: action.deck.deck,
          cards: action.deck.cards,
        },
      };
    case Types.ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [
            ...state[action.deckId]["cards"],
            { question: action.card.question, answer: action.card.answer },
          ],
        },
      };
    case Types.DELETE_DECK:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export default deck;
