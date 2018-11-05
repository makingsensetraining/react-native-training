import { mapStateToProps, mapDispatchToProps } from './AlbumListContainer';
import { albumState } from '../../state-mgmt/rootState';
import { getState, getUser_1 } from '../../../test/entities';

describe('AlbumListContainer', () => {

  it('should mapStateToProps, ', () => {
    const state = getState();
    expect(mapStateToProps(getState())).toEqual({
      albumMap: getState().album.albumMap,
      currentUser: getUser_1()
    });
  });

  it('should mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({
      fetchAlbumList: expect.any(Function)
    });
  });

  it('should dispatch albumState setListStart on fetchAlbumList', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    const query = { page: 1, limit: 1 };
    props.fetchAlbumList(query);
    expect(dispatch).toBeCalledWith(albumState.actions.setAlbumListStart(query));
  });
});
