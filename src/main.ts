import Case from "case";
import process from "process";
import { IParameters } from "./index";
import { ProjectFile } from "./abstractions/ProjectFile";
import { Logger } from "./abstractions/Logger";

export async function main({ projectName }: IParameters) {
  const data = {
    projectName: {
      camel: Case.camel(projectName),
      pascal: Case.pascal(projectName),
      kebab: Case.kebab(projectName),
    },
    projectDir: `${process.cwd()}\\${Case.kebab(projectName)}`,
  };

  Logger.init("/", "log.log");
  ProjectFile.createProjectDir(data.projectName.kebab);
  ProjectFile.setSharedTemplateData(data);

  await Promise.all([
    new ProjectFile(".vscode", "settings.json").generate(),
    new ProjectFile("", ".gitignore").generate(),
    new ProjectFile("", "main.py").generate(),
    new ProjectFile("", "README.md").generate(),
    new ProjectFile("", "requirements.txt").generate(),
    new ProjectFile("scripts", "activate-env.ps1").generate(),
    new ProjectFile("scripts", "create-env.ps1").generate(),
    new ProjectFile("scripts", "pipi.ps1").generate(),
    new ProjectFile("scripts", "run.ps1").generate(),
  ]);
}
