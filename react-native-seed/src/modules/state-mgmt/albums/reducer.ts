import { IState, initialState } from './state';
import { ActionType } from './actions';

export const reducer = (state: IState = initialState, { type, payload }: { type: ActionType, payload: any }) => {
  switch (type) {
    case ActionType.SET_ALBUM_LIST_SUCCESS:
      return { ...state, albumMap: payload.albumList.reduce((total, item) => ({ ...total, [item.title]: item }), state.albumMap) };
    default:
      return state;
  }
};
