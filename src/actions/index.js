import * as api from "../utils/api";

export const Types = {
  GET_DECKS: "get_decks",
  GET_DECK: "get_deck",
  ADD_DECK: "add_deck",
  ADD_CARD: "add_card",
  DELETE_DECK: "delete_deck",
};

export const getDecks = (decks) => (dispatch) => {
  dispatch({
    type: Types.GET_DECKS,
    decks,
  });
};

export const getDeck = (deckId) => (dispatch) => {
  api.fetchDeck(deckId).then((deck) =>
    dispatch({
      type: Types.GET_DECK,
      deck,
    })
  );
};

export const addDeck = (deck) => (dispatch) => {
  console.log("adding deck data", deck);
  api.addDeck(deck);
  dispatch({
    type: Types.ADD_DECK,
    deck,
  });
};

export const addCard = (deckId, card) => (dispatch) => {
  api.addCard(deckId, card);
  dispatch({
    type: Types.ADD_CARD,
    deckId,
    card,
  });
};

export const deleteDeck = (deckId) => (dispatch) => {
  api.removeDeck(deckId).then((data) =>
    dispatch({
      type: Types.DELETE_DECK,
      data,
    })
  );
};
