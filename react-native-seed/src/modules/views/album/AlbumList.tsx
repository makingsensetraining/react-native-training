import React from 'react';
import { ScrollView } from 'react-native';

import { GeneralModel, UserModel, AlbumModel } from '../../models';
import { ENV } from '../../../constants';
import AlbumDetail from './components/AlbumDetail';

export interface IAlbumListProps {
    currentUser: UserModel.IUser;
    albumMap: AlbumModel.IAlbum[];
    fetchAlbumList: (query: GeneralModel.IApiQuery) => void;
}

export default class AlbumList extends React.PureComponent<IAlbumListProps, {}> {

    public componentDidMount() {
        const { fetchAlbumList } = this.props;
        fetchAlbumList({ page: 1, limit: ENV.PAGINATION.LIMIT, q: {} });
    }

    public render() {
        console.log(' on AlbumList render');
        const { albumMap } = this.props;
        return (
            <ScrollView>
                {albumMap.map(album => <AlbumDetail key={album.title} album={album}/>)}
            </ScrollView>
        );
    }
}
