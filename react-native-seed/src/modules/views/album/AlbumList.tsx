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
        console.log(' on AlbumList render ' + this.props.albumMap.length);
        const { albumMap } = this.props;
        return (
            <ScrollView>
                {albumMap.map((album, index) => <AlbumDetail key={index} album={album}/>)}
            </ScrollView>
        );
    }
}
