import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:5299',
    headless: true,
  },
  webServer: {
    command: 'npm run dev -- --port 5299',
    url: 'http://localhost:5299',
    reuseExistingServer: false,
    timeout: 30_000,
  },
})
