import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../root.reducer';
import {Observable} from 'rxjs';
import {selectIsError, selectIsLoading, selectLeaderBoard, selectPlayerProfile} from '../selector/leader-board.selector';
import {LeaderBoard} from '../../../../openapi/codegen/game-arcade/models/leader-board';
import * as LeaderBoardActions from '../action/leader-board.action';
import {GameScore} from '../../../../openapi/codegen/game-arcade/models/game-score';
import {ArcadePlayerProfile} from '../../../../openapi/codegen/game-arcade/models/arcade-player-profile';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardFacade {
  constructor(private store: Store<State>) {
  }

  public get isLoading(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }

  public get isError(): Observable<boolean> {
    return this.store.select(selectIsError);
  }

  public get leaderBoardData(): Observable<LeaderBoard> {
    return this.store.select(selectLeaderBoard);
  }

  public get playerProfile(): Observable<ArcadePlayerProfile> {
    return this.store.select(selectPlayerProfile);
  }

  public createNewRecord(game: string, score: GameScore): void {
    return this.store.dispatch(LeaderBoardActions.createNewGameRecord({game, score}));
  }

  public updatePlayerProfile(profile: ArcadePlayerProfile): void {
    return this.store.dispatch(LeaderBoardActions.updatePlayerProfile({profile}));
  }
}
