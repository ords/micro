const fs = require("fs");

const nodeProjects = fs.readdirSync("packages").map((dir) => {
  try {
    const data = fs.readFileSync(path.join("packages", dir, "package.json"))
    const fileDirPath = path.join("packages", dir)
    return [fileDirPath, JSON.parse(data).name]
  } catch {
    return null
  }
}).filter((value) => value !== null)

module.exports = { nodeProjects }