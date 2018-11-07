import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { IAction, IRootState, IEpicDependencies } from '../rootState';
import { actions, ActionType } from './actions';
import { coreState } from '../core';

export const albumGetEpicGetAlbumList: Epic<IAction, IAction, IRootState, IEpicDependencies> = (action$, state$, deps) =>
  action$.pipe(
    ofType(ActionType.SET_ALBUM_LIST_START),
    mergeMap(({ payload }) => deps.apiService.getAlbumList(payload.query).pipe(
      map(res => {
        return actions.setAlbumListSuccess(res);
      }),
      catchError(error => of(coreState.actions.epicError(error)))
    ))
  );

export const epics = [albumGetEpicGetAlbumList];
