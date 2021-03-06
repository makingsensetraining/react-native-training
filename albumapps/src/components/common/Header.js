import React from 'react';
import { Text, View } from 'react-native';

const styles = {

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    
    textStyle: {
        fontSize: 20,
        backgroundColor: '#F8F8F8'
    },
};

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

export { Header };
