export interface Square {
  isTank: boolean;
  isTarget: boolean;
  direction?: Direction;
}

export enum Direction {
  UP, DOWN, RIGHT, LEFT
}

export interface Player {
  position: number;
  name: string;
  score: number;
}
