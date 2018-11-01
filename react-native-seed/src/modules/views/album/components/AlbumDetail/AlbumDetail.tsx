import React from 'react';
import Card from '../../../common/Card';
import { View, Text, Image } from 'react-native';
import CardSection from '../../../common/CardSection';

import { AlbumModel } from '../../../../models';

export interface IAlbumDetailProps {
  album: AlbumModel.IAlbum;
}

export default class AlbumDetail extends React.PureComponent<IAlbumDetailProps, {}> {

  public render() {
    const { album } = this.props;
    return (
      <Card>
        <CardSection>
          <View>
            <Image
              source={{ uri: album.thumbnail_image }}
            />
          </View>
          <View>
            <Text>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{ uri: album.image }} />
        </CardSection>
      </Card>
    );
  }
}
