import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../constant/interface';

@Component({
  selector: 'sg-app-leader-board-table',
  templateUrl: './leader-board-table.component.html',
  styleUrls: ['./leader-board-table.component.scss']
})
export class LeaderBoardTableComponent implements OnInit {

  @Input()
  dataSource: Player[];
  @Input()
  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
