import React from 'react';
import { View, StatusBar } from 'react-native';

// Added Router Component from `router` folder
import AppContainer from './config/router';

// written as functional components
// convert it to class based component if necessary
const App = props => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.1)"/>
      <AppContainer />
    </View>
  );
}

export default App;
