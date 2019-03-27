import React from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

/**
 * Touchable buttons with native effect for android
 * and `TouchableOpacity` for iOS
 */
const Touchable = props => {
  switch (Platform.OS) {
    case 'android':
      return (
        <TouchableNativeFeedback onPress={props.onPress}>
          <View style={props.style}>
            {props.children}
          </View>
        </TouchableNativeFeedback>
      );
    default:
      return (
        <TouchableOpacity onPress={props.onPress}>
          <View style={props.style}>
            {props.children}
          </View>
        </TouchableOpacity>
      );
  }
}

export { Touchable };
