import React from 'react';
import { View } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-ionicons';

// Import all the pages from components/folder-name/index.js
import HomePage from '../components/home';

// StackNavigator
// https://reactnavigation.org/docs/en/stack-navigator.html
const StackNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'Home Page',
    },
  },
}, {
  // Global styles
  // headerMode: 'none',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
      paddingTop: 24,
      elevation: 2,
    },
    headerTitleStyle: {
      fontSize: 16,
      color: '#333',
      fontFamily: 'product_sans_400', // custom font reference
    },
  }
});

// Bottom Tab Navigator
// https://reactnavigation.org/docs/en/bottom-tab-navigator.html
const TabNavigator = createBottomTabNavigator({
  Home            : HomePage, // component, page or navigator name
},{
  // global style
  // set icons and navigation styles
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':  iconName = 'home';    break;
        default:      iconName = 'error';
      }
      return <Icon name={iconName} size={24} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#333',
    inactiveTintColor: '#aaa',
    labelStyle: {
      fontSize: 10,
      fontFamily: 'product_sans_400', // custom font reference
    },
    style: {
      borderTopWidth: 1,
      borderTopColor: '#eee',
      backgroundColor: '#fff',
    },
  },
});

export default createAppContainer(StackNavigator);
