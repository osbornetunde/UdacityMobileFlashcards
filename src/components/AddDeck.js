import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { generateId } from "../utils/helpers";
import { white, gray } from "../utils/color";
import TextButton from "./TextButton";

const AddDeck = ({ addDeck, navigation }) => {
  const [deck, setDeck] = useState("");

  const createDeck = () => {
    if (deck !== "") {
      const id = generateId();
      addDeck({ id, deck, cards: [] });
      const decks = { id, deck, cards: [] };
      navigation.navigate("Deck", decks);
      setDeck("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.label}>
        What do you intend to learn with this deck
      </Text>
      <TextInput
        style={styles.input}
        value={deck}
        onChangeText={(text) => setDeck(text)}
      />

      <TextButton onPress={createDeck}>Add Deck</TextButton>
    </KeyboardAvoidingView>
  );
};

export default connect(null, { addDeck })(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    paddingTop: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20,
  },
});
