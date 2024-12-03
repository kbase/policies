import url from '@rollup/plugin-url';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    url({
      include: ['**/*.md'],
      limit:2000000,
    }),
    typescript({declaration:true,outDir:'build'})
  ],
};