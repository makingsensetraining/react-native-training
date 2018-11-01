import { connect } from 'react-redux';

import { GeneralModel } from '../../models';
import { IRootState, albumState } from '../../state-mgmt/rootState';
import AlbumList from './AlbumList';

export const mapStateToProps = (state: IRootState) => ({
  albumMap: state.album.albumMap,
  currentUser: state.user.userMap[state.auth.currentUserId]
});

export const mapDispatchToProps = dispatch => ({
  fetchAlbumList: (query: GeneralModel.IApiQuery) => dispatch(albumState.actions.setAlbumListStart(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
