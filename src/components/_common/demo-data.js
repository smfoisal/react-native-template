import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

/**
 * to view demo pages
 * texts in this pages are centered vertically and horizontally centered
 */

const Demo = props => {
  return (
    <View style={[styles.demoContainer, props.style]}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  demoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Demo };
