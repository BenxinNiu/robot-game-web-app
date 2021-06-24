import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Direction, Square} from '../../constant/interface';
import {
  getDirectionAfterLeftTurn,
  getDirectionAfterRightTurn, getNewCoordinate,
  isBoardSizeOddNumber,
  randomCoordinateWithExclusionOf
} from '../../util/common.util';

@Component({
  selector: 'sg-app-robot-game-board',
  templateUrl: './robot-game-board.component.html',
  styleUrls: ['./robot-game-board.component.scss']
})
export class RobotGameBoardComponent implements OnInit {
  @Input()
  boardSize: number;
  @Output()
  gameEnded: EventEmitter<boolean> = new EventEmitter<boolean>();

  board: Square[] = [];
  private currentScore = 0;
  private currentTankPosition: [number, number] = [0, 0];
  private currentTargetPosition: [number, number] = [0, 0];
  private currentDirection = Direction.UP;

  constructor() {
  }

  ngOnInit(): void {
    this.initBoard();
  }

  get gridTemplateStyleAttribute(): string {
    return `repeat(${this.boardSize}, 10vh)`;
  }

  get score(): number {
    return this.currentScore;
  }

  initBoard(): void {
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      this.board[i] = {isTank: false, isTarget: false};
    }
    this.resetBoard();
  }

  rotateRight(): void {
    const targetDirection = getDirectionAfterRightTurn(this.currentDirection);
    this.setTank(targetDirection);
  }

  rotateLeft(): void {
    const targetDirection = getDirectionAfterLeftTurn(this.currentDirection);
    this.setTank(targetDirection);
  }

  advance(): void {
    const newCoordinate = getNewCoordinate(this.currentTankPosition, this.currentDirection);
    // driven off the edge
    if (this.isOffEdge(newCoordinate)) {
      this.gameEnded.emit(true);
      return;
    }
    // continue & update the position
    this.removeCurrentTank();
    this.setTank(this.currentDirection, newCoordinate);
    // target is hit
    if (this.isHitTarget()) {
      this.currentScore++;
      this.setTarget();
      console.log(this.currentScore);
    }
  }

  resetBoard(): void {
    this.currentScore = 0;
    if (isBoardSizeOddNumber(this.boardSize)) {
      const middle = Math.round((this.boardSize - 1) / 2);
      this.setTank(Direction.UP, [middle, middle]);
      this.setTarget();
    } else {
      // todo choose a new starting point for the tank if the board is not odd sized
    }
  }

  setTarget(): void {
    const row = randomCoordinateWithExclusionOf(this.currentTankPosition[0], this.boardSize - 1);
    const col = randomCoordinateWithExclusionOf(this.currentTankPosition[1], this.boardSize - 1);
    this.currentTargetPosition = [row, col];
    this.updateSquare(row, col, {isTank: false, isTarget: true});
  }

  setTank(direction, newCoordinate?: [number, number]): void {
    if (newCoordinate) {
      this.currentTankPosition = newCoordinate;
    }
    this.updateSquare(
      this.currentTankPosition[0],
      this.currentTankPosition[1],
      {isTank: true, isTarget: false, direction});
    this.currentDirection = direction;
  }

  removeCurrentTank(): void {
    this.updateSquare(
      this.currentTankPosition[0],
      this.currentTankPosition[1],
      {isTank: false, isTarget: false});
  }

  updateSquare(row: number, col: number, payload: Square): void {
    this.board[this.boardSize * row + col] = payload;
  }

  isHitTarget(): boolean {
    return this.currentTankPosition[0] === this.currentTargetPosition[0] &&
      this.currentTankPosition[1] === this.currentTargetPosition[1];
  }

  isOffEdge(coordinate: [number, number]): boolean {
    return coordinate[0] < 0 ||
      coordinate[1] < 0 ||
      this.boardSize <= coordinate[0] ||
      this.boardSize <= coordinate[1];
  }
}
