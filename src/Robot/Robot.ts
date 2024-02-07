import {
  Orientation,
  OrientationLeftRotations,
  OrientationRightRotations,
} from "../types.js";
import RobotStructure from "./RobotStructure";

class Robot implements RobotStructure {
  xPosition = 0;
  yPosition = 0;
  orientation = Orientation.North;
  tabletopSize;

  constructor(tabletopSize = 5) {
    this.tabletopSize = tabletopSize;
  }

  private checkIsValidPosition(xPosition: number, yPosition: number): boolean {
    const isValidPosition =
      xPosition >= 0 &&
      yPosition >= 0 &&
      xPosition < this.tabletopSize &&
      yPosition < this.tabletopSize;

    return isValidPosition;
  }

  place(xPosition: number, yPosition: number, orientation: Orientation) {
    if (!this.checkIsValidPosition(xPosition, yPosition)) {
      console.log(
        `You can't place the Robot outside the ${this.tabletopSize}x${this.tabletopSize} table!`
      );

      return;
    }

    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.orientation = orientation;
  }

  move() {
    const nextXPosition = this.xPosition + 1;
    const nextYPosition = this.yPosition;
    if (!this.checkIsValidPosition(this.xPosition, this.yPosition)) {
      console.log(
        `You can't move the Robot outside the ${this.tabletopSize}x${this.tabletopSize} table!`
      );

      return;
    }

    switch (this.orientation) {
      case Orientation.North:
        const nextYPosition = this.yPosition + 1;
        this.yPosition++;
        break;

      case Orientation.South:
        this.yPosition--;
        break;

      case Orientation.East:
        this.xPosition++;
        break;

      case Orientation.West:
        this.xPosition--;
    }
  }

  left() {
    const orientationLeftRotations: OrientationLeftRotations = {
      NORTH: Orientation.West,
      WEST: Orientation.South,
      SOUTH: Orientation.East,
      EAST: Orientation.North,
    };

    this.orientation = orientationLeftRotations[this.orientation];
  }

  right() {
    const orientationRightRotations: OrientationRightRotations = {
      NORTH: Orientation.East,
      EAST: Orientation.South,
      SOUTH: Orientation.West,
      WEST: Orientation.North,
    };

    this.orientation = orientationRightRotations[this.orientation];
  }

  report() {
    console.log(
      `Robot is currently at position ${this.xPosition}, ${this.yPosition}, ${this.orientation}`
    );
  }
}

export default Robot;
