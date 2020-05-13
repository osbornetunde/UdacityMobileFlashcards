import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { purple, white, lightPurp } from "../utils/color";

const QuizActions = ({ recordAnswer, toggleQuestion, showQuestion }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>How did you do in this question?</Text>
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.answerBtn, { backgroundColor: purple }]}
        disabled={showQuestion}
        onPress={() => {
          recordAnswer(true);
          toggleQuestion();
        }}
      >
        <Text style={styles.btnText}>Right</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={showQuestion}
        style={[styles.answerBtn, { backgroundColor: lightPurp }]}
        onPress={() => {
          recordAnswer(false);
          toggleQuestion();
        }}
      >
        <Text style={styles.btnText}>Wrong</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  answerBtn: {
    padding: 10,
    margin: 5,
    width: 100,
    borderRadius: 5,
  },
  btnText: {
    color: white,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default QuizActions;
