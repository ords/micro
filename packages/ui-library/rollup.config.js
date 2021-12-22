import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'
import fs from 'fs'
import path from 'path'

const components = fs.readdirSync(path.join("src", "component")).map((file) => "src/component/" + file + "/index.tsx")
const utils = fs.readdirSync(path.join("src", "util")).map((file) => "src/util/" + file + "/index.ts")

export default {
  input: components.concat(utils),
  output: [{
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: 'src'
  }],
  plugins: [del({ targets: 'dist/*' }), typescript()]
};