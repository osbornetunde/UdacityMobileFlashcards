import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import { getDeck, deleteDeck } from "../actions";
import TextButton from "./TextButton";
import { gray, purple, orange, pink, red, lightPurp } from "../utils/color";

const Deck = ({ deck, navigation, deleteDeck }) => {
  const removeDeck = (id) => {
    // navigation.goBack()

    navigation.dispatch(
      CommonActions.goBack({
        key: "Home",
      })
    );
    deleteDeck(id);
  };

  return deck ? (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardName}>{deck.deck}</Text>
        <Text style={(styles.cardCount, [{ color: lightPurp }])}>{`${
          deck.cards.length
        } ${deck.cards.length > 1 ? "Cards" : "Card"}`}</Text>
      </View>
      <View>
        <TextButton
          style={{ color: orange, marginBottom: 5, fontSize: 15 }}
          onPress={() => navigation.navigate("AddCard", { deckId: deck.id })}
        >
          Add Card
        </TextButton>

        <TextButton
          style={{ color: purple, marginBottom: 5, fontSize: 15 }}
          onPress={() => {
            navigation.navigate("Quiz", { deck });
          }}
        >
          Start Quiz
        </TextButton>

        <TextButton
          style={{ color: red, marginBottom: 5, fontSize: 15 }}
          onPress={() => removeDeck(deck.id)}
        >
          Delete Deck
        </TextButton>
      </View>
    </View>
  ) : (
    <View>
      <Text>Deck has been deleted</Text>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const deck = state[route.params.deckId];
  return {
    deck,
  };
};

export default connect(mapStateToProps, { getDeck, deleteDeck })(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    width: 350,
    borderWidth: 2,
    borderColor: gray,
    height: 150,
    borderRadius: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardName: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 5,
    color: pink,
  },
  cardCount: {
    fontSize: 18,
  },
});
