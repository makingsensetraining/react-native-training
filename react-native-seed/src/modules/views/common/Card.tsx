import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class Card extends React.PureComponent<{}, {}> {

    public render() {
        const { cardContainer } = styles;
        const { children } = this.props;

        return(
            <View style={cardContainer}>
                {children}
            </View>
        );
    }
}
