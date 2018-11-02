import { IState, initialState } from './state';
import { ActionType } from './actions';

export const reducer = (state: IState = initialState, { type, payload }: { type: ActionType, payload: any }) => {
  switch (type) {
    case ActionType.SET_ALBUM_LIST_SUCCESS:
      return { ...state, albumMap: payload.albumList};
    default:
      return state;
  }
};
