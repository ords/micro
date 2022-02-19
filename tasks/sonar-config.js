const fs = require("fs");
const path = require("path");

const nodeProjects = fs.readdirSync("packages").map((dir) => {
  try {
    const data = fs.readFileSync(path.join("packages", dir, "package.json"))
    const fileDirPath = path.join("packages", dir)
    return [fileDirPath, JSON.parse(data).name]
  } catch {
    return null
  }
}).filter((value) => value !== null)

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

for (let nodeProject of nodeProjects) {
  createFile(nodeProject)
}
