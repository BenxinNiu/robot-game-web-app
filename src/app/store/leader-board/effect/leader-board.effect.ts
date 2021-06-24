import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import * as LeaderBoardActions from '../action/leader-board.action';
import {GameLeaderBoardService} from '../../../../openapi/codegen/game-arcade/services/game-leader-board.service';

@Injectable()
export class LeaderBoardEffect {
  constructor(private actions$: Actions,
              private leaderBoardApiService: GameLeaderBoardService) {
  }

  requestLeaderBoardData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LeaderBoardActions.requestLeaderBoardData),
      switchMap(({game, limit}) => {
        return this.leaderBoardApiService
          .arcadeGameLeaderBoardGet({game, limit})
          .pipe(
            map((response) => {
              return LeaderBoardActions.leaderBoardRequestSuccess({payload: response});
            }),
            tap((response) => {
              // if something wrong navigate
            }),
            catchError((error: HttpErrorResponse) => {
              return of(LeaderBoardActions.leaderBoardRequestError(error));
            })
          );
      })
    );
  });

  createNewGameRecord$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LeaderBoardActions.createNewGameRecord),
      switchMap(({game, score}) => {
        return this.leaderBoardApiService
          .arcadeGameRecordPost({game, body: score})
          .pipe(
            map((response) => {
              return LeaderBoardActions.leaderBoardRequestSuccess({payload: response});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(LeaderBoardActions.leaderBoardRequestError(error));
            })
          );
      })
    );
  });
}
