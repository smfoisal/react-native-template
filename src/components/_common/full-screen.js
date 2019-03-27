import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

/**
 * Every screen's parent view
 */
const Screen = props => {
  return (
    <View style={[styles.screenContainer, props.style]}>
      <ScrollView>
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

export { Screen };
