import {Component, OnInit} from '@angular/core';
import {Player} from '../../constant/interface';
import {Router} from '@angular/router';
import {AppRoute} from '../../constant/app-route';

const ELEMENT_DATA: Player[] = [
  {position: 1, name: 'Hydrogen', score: 20},
  {position: 2, name: 'Helium', score: 20},
];


@Component({
  selector: 'sg-app-leader-board-container',
  templateUrl: './leader-board-container.component.html',
  styleUrls: ['./leader-board-container.component.scss']
})
export class LeaderBoardContainerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate([AppRoute.HOME]);
  }

  refresh(): void {
    console.log('hi');
  }

}
