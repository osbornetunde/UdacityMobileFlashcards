import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { gray } from "../utils/color";

const DeckDetails = ({ id, name, cardCount, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Deck", { deckId: id, name: name })}
    >
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCount}>{`${cardCount} ${
        +cardCount > 1 ? "Cards" : "Card"
      }`}</Text>
    </TouchableOpacity>
  );
};

export default DeckDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: gray,
    height: 150,
    borderRadius: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardName: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 5,
  },
  cardCount: {
    fontSize: 15,
  },
});
