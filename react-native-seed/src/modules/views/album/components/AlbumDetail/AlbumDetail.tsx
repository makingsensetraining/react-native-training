import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { CardSection, Card, Button } from '../../../common';

import { AlbumModel } from '../../../../models';
import styles from '../../styles';

export interface IAlbumDetailProps {
  album: AlbumModel.IAlbum;
}

export default class AlbumDetail extends React.PureComponent<IAlbumDetailProps, {}> {

  public render() {

    const { album } = this.props;

    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainer}>
            <Image
              style={styles.thumbnail}
              source={{ uri: album.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContent}>>
            <Text style={styles.headerText}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={styles.imageAlbum}
            source={{ uri: album.image }} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(album.url)}>
            Buy Now
                </Button>
        </CardSection>
      </Card>
    );
  }
}
