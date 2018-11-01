import { StyleSheet, Platform } from 'react-native';
import { STYLE } from '../../../constants';

export default StyleSheet.create({

    fieldInput: {
        flex: 2,
        color: STYLE.COLOR.BLACK,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: STYLE.FONT.SIZE.INPUT,
        lineHeight: 23,
    },

    fieldContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    fieldLabel: {
        fontSize: STYLE.FONT.SIZE.INPUT,
        paddingLeft: 20,
        flex: 1,
        color: STYLE.COLOR.BLACK,
    },

    cardContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: STYLE.COLOR.SECONDARY,
        borderBottomWidth: 0,
        shadowColor: STYLE.COLOR.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },

    cardSectionContainer: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: STYLE.COLOR.BLACK,
        flexDirection: 'row',
        borderColor: STYLE.COLOR.PRIMARY,
        justifyContent: 'flex-start',
        position: 'relative'
    },

    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
    },

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
});
