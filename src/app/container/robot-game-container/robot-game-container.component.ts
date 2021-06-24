import {Component, OnInit, ViewChild} from '@angular/core';
import {RobotGameBoardComponent} from '../../component/robot-game-board/robot-game-board.component';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LeaderBoardFacade} from '../../store/leader-board/facade/leader-board.facade';
import {Observable} from 'rxjs';
import {ArcadePlayerProfile} from '../../../openapi/codegen/game-arcade/models/arcade-player-profile';

@Component({
  selector: 'sg-app-robot-game-container',
  templateUrl: './robot-game-container.component.html',
  styleUrls: ['./robot-game-container.component.scss']
})
export class RobotGameContainerComponent implements OnInit {

  @ViewChild(RobotGameBoardComponent)
  gameBoard: RobotGameBoardComponent;

  playerProfile$: Observable<ArcadePlayerProfile>;
  disableControl = false;

  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private leaderBoardFacade: LeaderBoardFacade) {
  }

  get currentScore(): number {
    return this.gameBoard ? this.gameBoard.score : 0;
  }

  ngOnInit(): void {
    this.playerProfile$ = this.leaderBoardFacade.playerProfile;
    this.snackBar.open(
      ' Refreshing the page will take you back to the home page and you game will not be saved', 'Okie');
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
    this.disableControl = false;
  }

  endGame(): void {
    this.disableControl = true;
    this.snackBar.open('You drove off your tank off the edge!!!! Please reset the game to continue', 'Okie');
  }

  goToLeaderBoard(): void {
    this.router.navigate([AppRoute.LEADER_BOARD]);
  }
}
