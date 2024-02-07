import processCommand from "../src/utils/processCommand";
import Robot from "../src/Robot/Robot";
import RobotStructure from "../src/Robot/RobotStructure";
import { Orientation } from "../src/types";

let robot: RobotStructure;

beforeEach(() => {
  robot = new Robot();
});

describe("Given the processCommand function", () => {
  describe("When it is called with 'place 2, 4, north' command", () => {
    test("Then robot position should be 2, 4, NORTH ", () => {
      const command = "PLACE 2, 4, north";

      processCommand(command, robot);

      expect(robot.xPosition).toBe(2);
      expect(robot.yPosition).toBe(4);
      expect(robot.orientation).toBe(Orientation.North);
    });
  });

  describe("When placed at 0,0 NORTH and called with MOVE command", () => {
    test("Then robot position should be 0, 1, NORTH ", () => {
      const command = "MOVE";
      robot.place(0, 0, Orientation.North);

      processCommand(command, robot);

      expect(robot.xPosition).toBe(0);
      expect(robot.yPosition).toBe(1);
      expect(robot.orientation).toBe(Orientation.North);
    });
  });

  describe("When placed at 0,0 NORTH and called with LEFT command", () => {
    test("Then robot orientation should be WEST", () => {
      const command = "LEFT";
      robot.place(0, 0, Orientation.North);

      processCommand(command, robot);

      expect(robot.orientation).toBe(Orientation.West);
    });
  });
});
