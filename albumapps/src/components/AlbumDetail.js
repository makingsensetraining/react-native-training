import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerText: {
        fontSize: 18
    },

    thumbnail: {
        height: 50,
        width: 50,
    },

    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageAlbum: {
        height: 300,
        flex: 1,
        width: null
    }
}

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnail, headerContent, thumbnailContainer, headerText, imageAlbum } = styles;

    return(
        <Card>
            <CardSection>
                <View 
                    style={ thumbnailContainer }>
                    <Image 
                        style={thumbnail} 
                        source={{ uri: thumbnail_image }}
                        />
                </View>
                <View 
                    style={ headerContent }>
                    <Text style={ headerText }>{title}</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image style={ imageAlbum } source={{ uri: image }}/>    
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;