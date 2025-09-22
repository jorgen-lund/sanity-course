import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  server: {
    port: 3333,
  },
  app: {
    organizationId: 'odJu0p45a',
    entry: './src/App.tsx',
  },
})
