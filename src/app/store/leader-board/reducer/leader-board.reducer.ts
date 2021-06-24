import {createReducer, on} from '@ngrx/store';
import * as LeaderBoardActions from '../action/leader-board.action';
import {LeaderBoard} from '../../../../openapi/codegen/game-arcade/models/leader-board';
import {ArcadePlayerProfile} from '../../../../openapi/codegen/game-arcade/models/arcade-player-profile';

export interface LeaderBoardState {
  leaderBoard?: LeaderBoard;
  playerProfile?: ArcadePlayerProfile;
  isLoading: boolean;
  // todo: this should be HttpErrorResponse. Keeping it simple for now
  isError: boolean;
}

export const LEADER_BOARD_INITIAL_STATE: LeaderBoardState = {
  leaderBoard: undefined,
  playerProfile: undefined,
  isLoading: false,
  isError: false
};

export const leaderBoardReducer = createReducer(
  LEADER_BOARD_INITIAL_STATE,
  on(LeaderBoardActions.requestLeaderBoardData, (state => {
    return {
      ...state,
      isLoading: true,
      isError: false
    };
  })),
  on(LeaderBoardActions.createNewGameRecord, (state => {
      return {
        ...state,
      };
    })
  ),
  on(LeaderBoardActions.updatePlayerProfile, (state, {profile}) => {
      return {
        ...state,
        playerProfile: profile
      };
    }
  ),
  on(LeaderBoardActions.leaderBoardRequestSuccess, (state, {payload}) => {
    return {
      ...state,
      leaderBoard: payload,
      isLoading: false,
      isError: undefined,
    };
  }),
  on(LeaderBoardActions.leaderBoardRequestError, (state => {
    return {
      ...state,
      isLoading: false,
      isError: true
    };
  }))
);
