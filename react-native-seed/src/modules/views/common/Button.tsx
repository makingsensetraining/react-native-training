import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export interface IButtonProps {
    onPress: () => void;
}

export default class Button extends React.PureComponent<IButtonProps, {}> {

    public render() {

        const { children, onPress } = this.props;
        const { button, buttonText } = styles;

        return (
            <TouchableOpacity onPress={onPress} style={button}>
                <Text style={buttonText}>{children}</Text>
            </TouchableOpacity>
        );
    }
}
