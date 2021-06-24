import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../../constant/interface';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';
import {LeaderBoardFacade} from '../../store/leader-board/facade/leader-board.facade';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'sg-app-leader-board-container',
  templateUrl: './leader-board-container.component.html',
  styleUrls: ['./leader-board-container.component.scss']
})
export class LeaderBoardContainerComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = [];

  isLoading$: Observable<boolean>;
  private subscription: Subscription;

  constructor(private router: Router,
              private leaderBoardFacade: LeaderBoardFacade) {
    this.isLoading$ = this.leaderBoardFacade.isLoading;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.initBoard();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initBoard(): void {
    // todo hard code these for now
    this.leaderBoardFacade.loadLeaderBoard('ROBOT', 10);
    this.subscription.add(
      this.leaderBoardFacade.leaderBoardData.subscribe(board => {
        board.scoreList.forEach((gameScore, index) => {
          this.dataSource[index] = {
            position: index,
            name: gameScore.player.name,
            score: gameScore.score
          };
        });
      })
    );
  }

  goToHome(): void {
    this.router.navigate([AppRoute.HOME]);
  }

  refresh(): void {
    console.log('hi');
  }

}
