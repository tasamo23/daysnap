import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    cache: {
      dir: 'node_modules/.vitest/',
    },
    dir: 'src/ts/tests',
  },
});
