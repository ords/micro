const fs = require("fs");
const path = require("path");
const YAML = require('yaml');
const { nodeProjects } = require("./nodeProjects")

const filename = "sonar-project.properties"
const repositoryName = "Github Micro"
const sonarOrganisation = "ords"

function createConfigContent(packageName) {
  const name = packageName.replace("@", "").replace("/", "_")
  return `
  sonar.projectKey=${name}
  sonar.organization=${sonarOrganisation}
  sonar.projectName=${repositoryName} ${packageName}
  `
}

function createFile(nodeProject) {
  fs.writeFileSync(path.join(nodeProject[0], filename), createConfigContent(nodeProject[1]))
}

const githubBuildFilePath = path.join(".github", "workflows", "sonar.yml")
const file = fs.readFileSync(githubBuildFilePath, 'utf8')
const buildContent = YAML.parse(file)
buildContent.jobs = {}

for (let nodeProject of nodeProjects) {
  createFile(nodeProject)
  const jobID = nodeProject[1].replace("@", "").replace("/", "_")
  buildContent.jobs[jobID] = (
    {
      name: 'SonarCloud ' + nodeProject[1],
      'runs-on': 'ubuntu-latest',
      steps: [
        { uses: 'actions/checkout@v3', with: { "fetch-depth": 0 } },
        {
          name: 'SonarCloud Scan',
          uses: 'SonarSource/sonarcloud-github-action@master',
          with: { projectBaseDir: nodeProject[0] },
          env: {
            GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
            SONAR_TOKEN: '${{ secrets.SONAR_TOKEN }}'
          }
        }
      ]
    })
}

fs.writeFileSync(githubBuildFilePath, YAML.stringify(buildContent))