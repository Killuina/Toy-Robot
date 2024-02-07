import * as readline from "readline";
import chalk from "chalk";
import Robot from "./Robot/Robot.js";
import processCommands from "./utils/processCommand.js";
import { availableActions } from "./definitions/availableActions.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const robot = new Robot();

const startApplication = () => {
  console.log(chalk.yellow("Welcome to Toy Robot!"));
  console.log(
    `Please use ${availableActions.PLACE} command to place the Robot on the tabletop first, you are playing with a ${robot.tabletopSize}x${robot.tabletopSize} tabletop`
  );
  console.log(
    `All available commands:
    ${chalk.yellow(availableActions.PLACE)}
    ${chalk.yellow(availableActions.MOVE)} 
    ${chalk.yellow(availableActions.RIGHT)} 
    ${chalk.yellow(availableActions.LEFT)} 
    ${chalk.yellow(availableActions.REPORT)}
    `
  );
  console.log(
    `Press ${chalk.yellow(
      "CTRL + C"
    )} to leave the application whenever you like, but that will make the robot sad ${chalk.blue(
      ":("
    )}`
  );
};

const handleUserInput = (input: string) => {
  const formattedInput = input.trim();

  processCommands(formattedInput, robot);

  rl.prompt();
};

const handleClose = () => {
  console.log(
    chalk.cyan("Thank you for playing Toy Robot! He will miss you :)")
  );

  process.exit(0);
};

rl.on("line", handleUserInput).on("close", handleClose);

startApplication();
