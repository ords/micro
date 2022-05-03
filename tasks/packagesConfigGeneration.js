const fs = require("fs");
const path = require("path");
const YAML = require('yaml');
const { nodeProjects } = require("./nodeProjects")

const githubBuildFilePath = path.join(".github", "workflows", "packages.yml")
const file = fs.readFileSync(githubBuildFilePath, 'utf8')
const buildContent = YAML.parse(file)
buildContent.jobs = {}

for (let nodeProject of nodeProjects) {

  const jobID = nodeProject[1].replace("@", "").replace("/", "_")
  buildContent.jobs[jobID] = (
    {
      name: 'Packages ' + nodeProject[1],
      'runs-on': 'ubuntu-latest',
      steps: [
        { uses: 'actions/checkout@v2', with: { "fetch-depth": 0 } },
        {
          uses: 'setup-node@v2',
          with: { "node-version": '14.x' },
        },
        { run: "npm ci" },
        { run: "npm run build --workspaces" }
      ]
    })
}

fs.writeFileSync(githubBuildFilePath, YAML.stringify(buildContent))