import { availableActions } from "../definitions/availableCommands.js";
import { Orientation } from "../types.js";
import { removeTextExtraSpacesAndCommas } from "./formatText.js";
import RobotStructure from "../Robot/RobotStructure.js";

let isFirstCommand = true;

const processCommands = (command: string, robot: RobotStructure): void => {
  const formattedCommand = removeTextExtraSpacesAndCommas(command);
  const [action, ...params] = formattedCommand.split(" ");
  const upperCaseAction = action.toUpperCase();

  if (isFirstCommand && !upperCaseAction.startsWith(availableActions.PLACE)) {
    console.log(`You must place the robot first.`);

    return;
  }

  switch (upperCaseAction) {
    case availableActions.PLACE:
      if (params.length !== 3) {
        console.log(
          "Invalid PLACE command. Please provide X Position, Y Position, and Orientation of the Robot!"
        );

        return;
      }

      isFirstCommand = false;

      const [xPosition, yPosition, orientation] = params;
      const upperCaseOrientation = orientation.toUpperCase();

      robot.place(+xPosition, +yPosition, upperCaseOrientation as Orientation);
      break;

    case availableActions.MOVE:
      robot.move();
      break;

    case availableActions.LEFT:
      robot.left();
      break;

    case availableActions.RIGHT:
      robot.right();
      break;

    case availableActions.REPORT:
      robot.report();
      break;

    default:
      console.log("Please enter a valid command!");
      break;
  }
};

export default processCommands;
