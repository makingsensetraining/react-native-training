import { AlbumModel } from '../../models';
import { IEntityMap } from '../../../types';

export interface IState {
  albumMap: IEntityMap<AlbumModel.IAlbum>;
}

export const initialState = {
  albumMap: {}
};
