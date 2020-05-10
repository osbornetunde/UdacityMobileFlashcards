import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import DeckList from './src/components/DeckList.js';



const store = createStore(reducer, applyMiddleware(thunk))


function FlashCardStatusBar({ backgroundColor, ...props }) {
  
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <DeckList/>
      </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
