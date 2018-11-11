import { reducer } from './reducer';
import { initialState } from './state';
import { getAlbum_1, getAlbum_2 } from '../../../test/entities';
import { actions } from './actions';

describe('album reducer', () => {
  it('should return initial state when no case matches', () => {
      expect(reducer(initialState, { type: null, payload: null })).toBe(initialState);
  });

  it('should return a new state ActionType.SET_ALBUM_LIST_SUCCESS', () => {
    const album =  getAlbum_1();
    expect(reducer(undefined, actions.setAlbumListSuccess([album]))).toEqual({ ...initialState, albumMap: [album] });

  });
});
