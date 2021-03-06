{
  "files.exclude": {
    "**/__pycache__": true,
    "env/": true,
    "wandb/": true
  },
  "python.formatting.blackArgs": ["--line-length=140"],
  "python.pythonPath": "{{projectDir}}\\env\\Scripts\\python.exe",
  "terminal.integrated.shellArgs.windows": [
    "-NoExit",
    "-Command",
    "${workspaceFolder}/scripts/activate-env.ps1"
  ]
}
