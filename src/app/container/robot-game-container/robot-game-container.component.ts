import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RobotGameBoardComponent} from '../../component/robot-game-board/robot-game-board.component';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LeaderBoardFacade} from '../../store/leader-board/facade/leader-board.facade';
import {Observable, Subject, Subscription, timer} from 'rxjs';
import {ArcadePlayerProfile} from '../../../openapi/codegen/game-arcade/models/arcade-player-profile';
import {startWith, switchMap, takeWhile} from 'rxjs/operators';
import {GameScore} from '../../../openapi/codegen/game-arcade/models/game-score';

@Component({
  selector: 'sg-app-robot-game-container',
  templateUrl: './robot-game-container.component.html',
  styleUrls: ['./robot-game-container.component.scss']
})
export class RobotGameContainerComponent implements OnInit, OnDestroy {

  @ViewChild(RobotGameBoardComponent)
  gameBoard: RobotGameBoardComponent;

  playerProfile$: Observable<ArcadePlayerProfile>;
  remainingTime = 60;
  disableControl = false;

  private timerStart$ = new Subject();
  private subscription: Subscription;
  private profile: ArcadePlayerProfile;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private leaderBoardFacade: LeaderBoardFacade) {
    this.playerProfile$ = this.leaderBoardFacade.playerProfile;
    this.subscription = new Subscription();
  }

  get currentScore(): number {
    return this.gameBoard ? this.gameBoard.score : 0;
  }

  ngOnInit(): void {
    this.initTimer();
    this.timerStart$.next(true);
    this.subscription.add(
      this.playerProfile$.subscribe(profile => this.profile = profile)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  turnLeft(): void {
    this.gameBoard.rotateLeft();
  }

  advance(): void {
    this.gameBoard.advance();
  }

  turnRight(): void {
    this.gameBoard.rotateRight();
  }

  resetGame(): void {
    this.gameBoard.initBoard();
    this.remainingTime = 60;
    this.disableControl = false;
    this.timerStart$.next(true);
  }

  endGame(): void {
    this.disableControl = true;
    this.snackBar.open('Game Over!!!! Uploading your record now! Please reset the game to continue', 'Okie');
    // upload a new record
    this.leaderBoardFacade.createNewRecord('Robot', this.getGameScore());
  }

  getGameScore(): GameScore {
    return {
      game: 'ROBOT',
      score: this.currentScore,
      player: {
        name: this.profile.name,
        email: this.profile.email
      },
      // todo: use moment
      createdAt: Date.now().toLocaleString()
    };
  }

  goToLeaderBoard(): void {
    this.router.navigate([AppRoute.LEADER_BOARD]);
  }

  initTimer(): void {
    this.subscription.add(
      this.timerStart$.pipe(
        switchMap(() => timer(1000, 1000)),
      ).subscribe(
        sec => {
          this.remainingTime = 10 - sec;
          if (this.remainingTime === 0) {
            this.endGame();
          }
          if (this.remainingTime < 0) {
            this.remainingTime = 0;
          }
        }
      )
    );
  }
}
