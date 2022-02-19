import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete'
import image from 'rollup-plugin-img';

export default {
  input: ["src/Registration.tsx", "src/Login.tsx"],
  output: [{
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: 'src'
  }],
  plugins: [image({
    output: `dist/images`, // default the root
    extensions: /\.(png|jpg|jpeg|gif|svg|webp)$/,
    limit: 10000
  }), typescript()]
};

// using del seems to clash with typescript in our main app - race condition?