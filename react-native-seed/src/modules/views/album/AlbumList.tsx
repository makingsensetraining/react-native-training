import React from 'react';
import { View } from 'react-native';

import { GeneralModel, UserModel, AlbumModel } from '../../models';
import { ENV } from '../../../constants';
import AlbumDetail from './components/AlbumDetail';


export interface IAlbumListProps {
    currentUser: UserModel.IUser;
    albumMap: AlbumModel.IAlbum[];
    fetchAlbumList: (query: GeneralModel.IApiQuery) => void;
}

export default class AlbumList extends React.PureComponent<IAlbumListProps, {}> {

    public render() {
        const { albumMap } = this.props;

        return (
            <View>
                {albumMap.map(album => <AlbumDetail key={album.title} album={album}/>)}
            </View>
        );
    }
}
