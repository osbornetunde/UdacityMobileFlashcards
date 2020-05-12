import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";
import DeckDetails from "./DeckDetails";
import { fetchDecks } from "../utils/api";

const DeckList = ({ decks, navigation, getDecks }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchDecks()
      .then((data) => getDecks(data))
      .then(() => setReady(true));
  }, []);

  const navigateToCreateDeck = () => {
    navigation.navigate("AddDeck");
  };

  // console.log("======>State", Object.values(decks));

  return !ready ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : Object.values(decks).length > 0 ? (
    <FlatList
      style={{ flex: 1 }}
      data={Object.values(decks)}
      renderItem={({ item }) => (
        <DeckDetails
          id={item.id}
          name={item.deck}
          cardCount={item.cards.length}
          navigation={navigation}
        />
      )}
      keyExtractor={(item) => String(item.id)}
    />
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>You don't have a deck yet</Text>
      <Button
        onPress={navigateToCreateDeck}
        title="Add Deck"
        color="#841584"
        accessibilityLabel="Navigates to create deck"
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  decks: state,
});

export default connect(mapStateToProps, { getDecks })(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
