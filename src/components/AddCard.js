import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import { addCard } from "../actions";
import TextButton from "./TextButton";
import { white, gray, lightPurp } from "../utils/color";

const AddCard = ({ route, addCard, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const createCard = () => {
    if (question && answer) {
      addCard(route.params.deckId, { question, answer });
      navigation.goBack();
      setAnswer("");
      setQuestion("");
      // navigation.dispatch(
      //   CommonActions.goBack({
      //       key: 'Deck',
      //   }))
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Text style={styles.label}>Please Add your Question and Answer</Text>
      <TextInput
        style={styles.input}
        placeholder="add question"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="add answer"
        value={answer}
        onChangeText={(text) => setAnswer(text)}
      />

      <TextButton style={{ color: lightPurp }} onPress={createCard}>
        Add Card
      </TextButton>
    </KeyboardAvoidingView>
  );
};

export default connect(null, { addCard })(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    paddingTop: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 20,
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 15,
    height: 50,
    padding: 10,
    borderRadius: 9,
    borderColor: gray,
    margin: 20,
  },
});
