import { Orientation } from "../types.js";

interface RobotStructure {
  xPosition: number;
  yPosition: number;
  orientation: Orientation;
  tabletopSize: number;

  place(xPosition: number, yPosition: number, orientation: Orientation): void;

  move(): void;

  left(): void;

  right(): void;

  report(): void;
}

export default RobotStructure;
