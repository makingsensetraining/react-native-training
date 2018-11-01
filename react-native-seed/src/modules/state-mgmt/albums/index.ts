import { reducer } from './reducer';
import { epics } from './epics';
import { initialState } from './state';
import { actions, ActionType } from './actions';

export { IState as IAlbumState } from './state';
export const albumState = { actions, ActionType, reducer, epics, initialState }; // mira esto !!!!
