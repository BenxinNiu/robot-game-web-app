import {ActionReducerMap} from '@ngrx/store';
import {leaderBoardReducer, LeaderBoardState} from './leader-board/reducer/leader-board.reducer';

export interface State {
  // todo: can support multiple store
  leaderBoard: LeaderBoardState;
}

export const reducers: ActionReducerMap<State, any> = {
  // todo: can support multiple store
  leaderBoard: leaderBoardReducer
};
