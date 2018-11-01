import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export interface IFieldProps {
    labelTitle: string;
    placeholder: string;
    textValue: string;
    secureTextEntry: boolean;
    onChangeText: (text: string) => void;
}

export default class Field extends React.PureComponent<IFieldProps, {}> {
    public render() {
        debugger;
        const {fieldInput, fieldContainer, fieldLabel } = styles;
        const { labelTitle, placeholder, textValue, secureTextEntry, onChangeText } = this.props;

        return (
            <View style={fieldContainer}>
                <Text style={fieldLabel}>{labelTitle}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholder={placeholder}
                    value={textValue}
                    onChangeText={onChangeText}
                    style={fieldInput}
                />
            </View>
        );
      }
}
