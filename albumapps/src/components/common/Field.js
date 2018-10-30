import React from 'react';
import { View, Text, TextInput } from 'react-native';

const styles= {
    inputStyle: {
        flex: 2,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    
    fieldContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

const Field = (props) => {

    const {inputStyle, fieldContainer, label } = styles;
    const {labelTitle, placeholder, textValue, onChangeTextFuncion, secureTextEntry } = props;
    
    return (
        <View style={fieldContainer}>
            <Text style={label}>{labelTitle}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={textValue}
                onChangeText={onChangeTextFuncion}
                style={inputStyle}
                />
        </View>
    )
}

export { Field };