import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import QuizCard from "./QuizCard";
import QuizAction from "./QuizAction";
import QuizResult from "./QuizResult";
import { white, gray } from "../utils/color";

const defaultState = {
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  currentQuestionIndex: 0,
  showResults: false,
};

const Quiz = ({ route, navigation }) => {
  const [item, setItem] = useState(defaultState);

  // console.log("======>question", route.params)

  const getRemainingCountMessage = () => {
    const { correctAnswerCount, incorrectAnswerCount } = item;
    const remainingQuestions =
      getDeck().deck.cards.length -
      (correctAnswerCount + incorrectAnswerCount + 1);
    return `${remainingQuestions} ${
      remainingQuestions > 1 ? "questions" : "question"
    } remaining.`;
  };

  const getDeck = () => route.params;

  const restartQuiz = () => {
    setItem(defaultState);
  };

  recordAnswer = (knewAnswer) => {
    let {
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentQuestionIndex,
    } = item;

    if (knewAnswer) {
      correctAnswerCount++;
    } else {
      incorrectAnswerCount++;
    }

    const deck = getDeck();
    if (currentQuestionIndex === deck.deck.cards.length - 1) {
      showResults = true;

      clearLocalNotification();
      setLocalNotification();
    } else {
      currentQuestionIndex++;
    }

    setItem({
      correctAnswerCount,
      incorrectAnswerCount,
      showResults,
      currentQuestionIndex,
    });
  };

  const {
    correctAnswerCount,
    incorrectAnswerCount,
    currentQuestionIndex,
    showResults,
  } = item;

  return !showResults ? (
    <View style={styles.container}>
      <QuizCard card={getDeck().deck.cards[currentQuestionIndex]} />
      <Text style={styles.count}>{getRemainingCountMessage()}</Text>
      <QuizAction recordAnswer={recordAnswer} />
    </View>
  ) : (
    <QuizResult
      correctAnswerCount={correctAnswerCount}
      incorrectAnswerCount={incorrectAnswerCount}
      restartQuiz={restartQuiz}
      navigation={navigation}
    />
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    padding: 10,
  },
  count: {
    color: gray,
    fontSize: 20,
    marginTop: 10,
  },
});
