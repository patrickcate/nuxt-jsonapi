import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/*.ts'],
    coverage: {
      include: ['src'],
      reporter: ['text', 'json', 'lcov', 'html'],
    },
  },
})
