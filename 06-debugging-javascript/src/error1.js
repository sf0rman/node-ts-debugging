import { readFileSync } from "fs";

const loadInput = (file) => {
  const input = readFileSync(`./data/${file}`, { encoding: "utf8" });
  const formatted = input.split(/\r\n/).map((item) => {
    const instructionSet = item;
    return {
      dir: instructionSet[0],
      val: instructionSet[1],
    };
  });
  return formatted;
};

const part1 = (input) => {
  let position = { depth: 0, distance: 0 };
  for (let i = 0; i < input.length; i++) {
    switch (input[i].dir) {
      case "forward":
        position.distance += parseInt(input[i].val);
        break;
      case "up":
        position.depth -= parseInt(input[i].val);
        break;
      case "down":
        position.depth += parseInt(input[i].val);
        break;
    }
  }

  console.log("Total depth", position.depth);
  console.log("Total distance", position.distance);
};

const run = () => {
  const input = loadInput("input.txt");
  part1(input);
};

export { run };
