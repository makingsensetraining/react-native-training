import { IEpicDependencies } from '../rootState';
import { getDeps } from '../../../test/epicDependencies';
import { getInitialState, getAlbum_1 } from '../../../test/entities';
import { albumGetEpicGetAlbumList } from './epics';
import { ActionsObservable } from 'redux-observable';
import { actions, ActionType } from './actions';

describe('Album epics', () => {
  let deps: IEpicDependencies;
  let error;
  let state$;

  beforeEach(() => {
    error = new Error('This is an error');
    deps = getDeps();
    state$ = { value: getInitialState() };
  });

  describe('albumGetEpicGetAlbumList', () => {
    const query = { page: 1, limit: 1 };
    it('should get epic for get album list', done => {
      const emitedActions = [];
      albumGetEpicGetAlbumList(ActionsObservable.of(actions.setAlbumListStart(query)), state$, deps)
      .subscribe(output => {
        emitedActions.push(output);
        expect(deps.apiService.getAlbumList).toBeCalledWith(query);
        expect(emitedActions[0]).toEqual(actions.setAlbumListSuccess([getAlbum_1()]));
        done();
      });
    });
  });
});
