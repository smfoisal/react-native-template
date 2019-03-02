import React from 'react'
import { StyleSheet, View } from 'react-native'

const Screen = props => {
    return (
        <View style={[styles.screenContainer, props.style]}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

export {Screen};
