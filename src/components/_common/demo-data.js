import React from 'react'
import { StyleSheet, View } from 'react-native'

const Demo = props => {
    return (
        <View style={[styles.demoContainer, props.style]}>
            {props.children}
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
