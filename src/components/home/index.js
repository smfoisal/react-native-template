import React from 'react';
import { Text } from 'react-native';
import { Screen, Demo, Touchable } from '../_common';

const HomePage = props => {
  return (
    <Screen>
      <Demo>Home Page</Demo>
      <Touchable>
        <Text>Test</Text>
      </Touchable>
    </Screen>
  );
};

export default HomePage;
