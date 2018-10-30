import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
    spinnerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
}

export { Spinner };