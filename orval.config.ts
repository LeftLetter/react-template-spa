import { defineConfig } from 'orval'

export default defineConfig({
  swagger: {
    input: './docs/swagger.yaml',
    output: {
      mode: 'split',
      target: 'src/models/api.ts',
      client: 'react-query',
      mock: true,
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: ['eslint --fix', 'prettier --write'],
    },
  },
})
