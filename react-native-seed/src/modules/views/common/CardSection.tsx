import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class CardSection extends React.PureComponent<{}, {}> {

    public render() {
        const { children } = this.props;

        return (
            <View style={styles.cardSectionContainer}>
                {children}
            </View>
        );
    }
}
