export enum Orientation {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}

export interface OrientationLeftRotations {
  NORTH: Orientation.West;
  WEST: Orientation.South;
  SOUTH: Orientation.East;
  EAST: Orientation.North;
}

export interface OrientationRightRotations {
  NORTH: Orientation.East;
  EAST: Orientation.South;
  SOUTH: Orientation.West;
  WEST: Orientation.North;
}
