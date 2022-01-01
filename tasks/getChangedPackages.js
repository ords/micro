const { exec } = require("child_process");

// quite basic script which breaks when package.json in the packages are not following consistent naming convention
exec("git diff master --dirstat=files,0 HEAD~1 packages/", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  const data = [...new Set(stdout.split("\n")
    .map((out) => out.split("/")[1])
    .filter((out) => out !== undefined)
    .map((out) => "@ords/" + out))]

  console.log("\n\nSuggested command to run to build minimal required packages\n\n")
  console.log("npm run build:minimal-required --if-present --workspace=" + data.join(" --workspace="))

  console.log("\n\nSuggested command to run to build all packages\n\n")
  console.log("npm run build --if-present --workspace=" + data.join(" --workspace="))
});
