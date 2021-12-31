import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  plugins: [typescript()]
};

// using del seems to clash with typescript in our main app - race condition?