import { AlbumModel } from '../../models';

export interface IState {
  albumMap: AlbumModel.IAlbum[];
}

export const initialState = {
  albumMap: []
};
