import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {LeaderBoard} from '../../../../openapi/codegen/game-arcade/models/leader-board';
import {GameScore} from '../../../../openapi/codegen/game-arcade/models/game-score';
import {ArcadePlayerProfile} from '../../../../openapi/codegen/game-arcade/models';

export const requestLeaderBoardData = createAction(
  'REQUEST LEADER BOARD DATA',
  props<{ game: string, limit: number }>()
);

export const createNewGameRecord = createAction(
  'CREATE NEW GAME RECORD',
  props<{ game: string, score: GameScore }>()
);

// todo: this should also have an effect
export const updatePlayerProfile = createAction(
  'UPDATE CURRENT PLAYER PROFILE',
  props<{ profile: ArcadePlayerProfile }>()
);

export const leaderBoardRequestSuccess = createAction(
  'LEADER BOARD REQUEST SUCCESS',
  props<{ payload: LeaderBoard }>()
);

export const leaderBoardRequestError = createAction(
  'LEADER BOARD REQUEST ERROR',
  props<{ error: HttpErrorResponse }>()
);
