import "reflect-metadata";
import { main } from "./main";
import { options } from "yargs";

const parameters = options({
  projectName: { type: "string", demandOption: true },
}).argv;

export type IParameters = typeof parameters;

main(parameters);
