import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

export interface ISpinnerProps {
    size: number | 'small' | 'large';
}

export default class Spinner extends React.PureComponent<ISpinnerProps, {}> {

public render() {

    const { spinnerContainer } = styles;
    const { size } = this.props;

    return (
        <View style={spinnerContainer}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
}
}
