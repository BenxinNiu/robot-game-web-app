import {Direction} from '../constant/interface';

export function randomCoordinateWithExclusionOf(exclusion: number, max: number): number {
  let randomNumber: number;
  while (!randomNumber || randomNumber === exclusion) {
    randomNumber = Math.round(Math.random() * max);
  }
  return randomNumber;
}

export function isBoardSizeOddNumber(size: number): boolean {
  return size % 2 !== 0;
}

export function getNewCoordinate(currentPosition: [any, any], currentDirection: Direction): [any, any] {
  let row = currentPosition[0];
  let col = currentPosition[1];
  switch (currentDirection) {
    case Direction.UP:
      row--;
      break;
    case Direction.DOWN:
      row++;
      break;
    case Direction.RIGHT:
      col++;
      break;
    case Direction.LEFT:
      col--;
      break;
    default:
      break;
  }
  return [row, col];
}

export function getDirectionAfterRightTurn(currentDirection): Direction {
  switch (currentDirection) {
    case Direction.RIGHT:
      return Direction.DOWN;
    case Direction.LEFT:
      return Direction.UP;
    case Direction.DOWN:
      return Direction.LEFT;
    case Direction.UP:
      return Direction.RIGHT;
    default:
      return currentDirection;
  }
}

export function getDirectionAfterLeftTurn(currentDirection): Direction {
  switch (currentDirection) {
    case Direction.RIGHT:
      return Direction.UP;
    case Direction.LEFT:
      return Direction.DOWN;
    case Direction.DOWN:
      return Direction.RIGHT;
    case Direction.UP:
      return Direction.LEFT;
    default:
      return currentDirection;
  }
}
