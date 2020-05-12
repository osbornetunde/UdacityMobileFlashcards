import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TextButton from "./TextButton";
import { blue, white, gray, pink, lightPurp, orange } from "../utils/color";

const QuizCard = ({ card }) => {
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleQuestion = () => {
    setShowQuestion(!showQuestion);
  };

  return (
    <View style={styles.container}>
      <View>
        {showQuestion ? (
          <Text style={styles.text}>{card.question}</Text>
        ) : (
          <Text style={styles.text}>{card.answer}</Text>
        )}
      </View>
      <View style={{ marginTop: 30, width: 100, height: 30 }}>
        <TextButton
          style={{
            backgroundColor: blue,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            color: white,
          }}
          onPress={toggleQuestion}
        >{`See ${showQuestion ? "Answer" : "Question"}`}</TextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
    padding: 30,
    width: 350,
    height: 250,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 4,
      height: 5,
    },
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: gray,
  },
});

export default QuizCard;
