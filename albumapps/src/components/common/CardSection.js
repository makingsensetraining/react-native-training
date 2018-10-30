import React from 'react';
import { View } from 'react-native';

const styles = {

    cardSectionContainer: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        position: 'relative'
    }
};

const CardSection = (props) => {
    return(
        <View style={styles.cardSectionContainer}>
            {props.children}
        </View>
    );
};

export { CardSection };