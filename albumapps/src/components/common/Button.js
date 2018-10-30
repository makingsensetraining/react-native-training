import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
    button: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#48BBEC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#48BBEC',
        marginLeft: 5,
        marginRight: 5,
        height: 60,
    },

    signOutStyle:{
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#48BBEC',
        marginLeft: 60,
        marginRight: 60,
        padding: 5,
        height: 40
    },

    text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
    }

};

const Button = ( props ) => {

    const { children, onPress, isSignOut } = props;
    const { button, text, signOutStyle } = styles;
    const buttonStyle = isSignOut ? signOutStyle : button;
        
    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
            <Text style={text}>{ children }</Text>
        </TouchableOpacity>
    );
};

export { Button };