import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    thumbnail: {
        height: 50,
        width: 50,
    },

    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 5
    },

    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },

    imageAlbum: {
        height: 300,
        flex: 1,
        width: null
    },

    headerText: {
        fontSize: 18
    }
});
