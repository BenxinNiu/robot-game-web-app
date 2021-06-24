import {Component, Input} from '@angular/core';
import {Direction, Square} from '../../../constant/interface';

@Component({
  selector: 'sg-app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent {

  @Input()
  square: Square;

  constructor() {
  }

  get isTarget(): boolean {
    return this.square.isTarget && !this.square.isTank;
  }

  get isTank(): boolean {
    return this.square.isTank;
  }

  get direction(): string {
    let degree = 0;
    if (this.square.direction) {
      switch (+this.square.direction) {
        case Direction.UP:
          break;
        case Direction.DOWN:
          degree = 180;
          break;
        case Direction.LEFT:
          degree = 270;
          break;
        case Direction.RIGHT:
          degree = 90;
          break;
        default:
          break;
      }
    }
    return `rotate(${degree}deg)`;
  }

}
