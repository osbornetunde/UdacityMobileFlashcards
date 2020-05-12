import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import reducer from './src/reducers';
import DeckList from './src/components/DeckList.js';
import AddDeck from './src/components/AddDeck.js'
import { purple, white } from './src/utils/color.js';
import Deck from './src/components/Deck.js'
import AddCard from './src/components/AddCard.js';
import Quiz from './src/components/Quiz.js';



const store = createStore(reducer, applyMiddleware(thunk))


function FlashCardStatusBar({ backgroundColor, ...props }) {
  
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const RouteConfigs = {
  DeckList:{
    name: "Deck List",
    component: DeckList,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'DeckList'}
  }, 
  AddDeck:{
    component: AddDeck,
    name: "Add Deck",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Deck'}
  },
  // Live:{
  //   component: Live,
  //   name: "Live",
  //   options: {tabBarIcon: ({tintColor}) => <FontAwesome name='ios-speedometer' size={30} color={tintColor} />, title: 'Live'}
  // }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};
  
const Tab = Platform.OS === 'ios'
          ? createBottomTabNavigator() 
          : createMaterialTopTabNavigator()

  const TabNav = () =>(
    <Tab.Navigator {...TabNavigatorConfig}>
        <Tab.Screen {...RouteConfigs['DeckList']} />
      <Tab.Screen {...RouteConfigs['AddDeck']} />
  {/*<Tab.Screen {...RouteConfigs['Live']} />*/}
    </Tab.Navigator>
  )

  // Config for StackNav
const StackNavigatorConfig = {
  headerMode: "screen"
}
  const StackConfig = {
    TabNav:{
      name: "Home",
      component: TabNav,
      options: {headerShown: false}
    }, 
    AddDeck:{
      name: "AddDeck",
      component: AddDeck,
      options: {
        headerTintColor: white,
        headerStyle:{
          backgroundColor: purple
        },
        title: "Add Deck"
      }
    },
    Deck:{
      name: "Deck",
      component: Deck,
      options: {
        headerTintColor: white,
        headerStyle:{
          backgroundColor: purple
        },
        title: "Deck"
      }
    },
    AddCard:{
      name: "AddCard",
      component: AddCard,
      options: {
        headerTintColor: white,
        headerStyle:{
          backgroundColor: purple
        },
        title: "AddCard"
      }
    },
    Quiz:{
      name: "Quiz",
      component: Quiz,
      options: {
        headerTintColor: white,
        headerStyle:{
          backgroundColor: purple
        },
        title: "Quiz"
      }
    }
  }
  
  const Stack = createStackNavigator();
  
  const MainNav = () =>(
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['TabNav']} />
      <Stack.Screen {...StackConfig['AddDeck']} />
      <Stack.Screen {...StackConfig['Deck']} />
      <Stack.Screen {...StackConfig['AddCard']} />
      <Stack.Screen {...StackConfig['Quiz']} />
    </Stack.Navigator>
  )

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <FlashCardStatusBar backgroundColor={purple} barStyle='light-content'/>
      <MainNav/>
      </NavigationContainer>
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
