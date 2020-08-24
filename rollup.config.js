import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs({
      namedExports: {
        'node_modules/react-reconciler/index.js': ['isValidElementType'],
      },
      include: [/node_modules\/react-reconciler/],
    }),
    babel({ exclude: 'node_modules/**' }),
    jsx({ factory: 'React.createElement' }),
  ],
};
