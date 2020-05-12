import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { purple, white, gray, lightPurp } from "../utils/color";
import TextButton from "./TextButton";

const QuizResult = ({
  correctAnswerCount,
  incorrectAnswerCount,
  restartQuiz,
  navigation,
}) => (
  <View style={styles.container}>
    <Text style={styles.header}>You scored</Text>
    <Text style={styles.result}>{`${Math.round(
      (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
    )}%`}</Text>
    <View style={styles.actions}>
      <TextButton
        style={{ color: purple, marginBottom: 10, fontSize: 15 }}
        onPress={() => restartQuiz()}
      >
        Restart Quiz
      </TextButton>
      <TextButton
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: lightPurp,
          fontSize: 15,
          padding: 5,
          color: white,
          borderRadius: 3,
        }}
      >
        Back to Deck
      </TextButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  result: {
    fontSize: 70,
    color: purple,
    textAlign: "center",
  },
  actions: {
    marginTop: 50,
  },
});

export default QuizResult;
