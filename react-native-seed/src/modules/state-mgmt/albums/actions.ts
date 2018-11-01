import { GeneralModel, AlbumModel } from '../../models';

export enum ActionType {
  SET_ALBUM_LIST_START = '[album] set list start',
  SET_ALBUM_LIST_SUCCESS = '[album] set list success'
}

export const actions = {
  setAlbumListStart: (query: GeneralModel.IApiQuery) => ({ type: ActionType.SET_ALBUM_LIST_START, payload: { query } }),
  setAlbumListSuccess: (albumList: AlbumModel.IAlbum[]) => ({ type: ActionType.SET_ALBUM_LIST_SUCCESS, payload: { albumList } })
};
