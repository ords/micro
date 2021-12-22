import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  plugins: [del({ targets: 'dist/*' }), typescript()]
};